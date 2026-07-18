import re
from constants import OTT_SERVICES, NETWORK_TYPES

class PlanParser:
    def __init__(self, prompt:str):
        self.prompt = prompt.lower()
    
    def extract_days(self):
        patterns = [
    r"(\d+)\s*-?\s*days?",
    r"for\s+(\d+)",
    r"validity\s*(?:of)?\s*(\d+)"
]
        for pattern in patterns:
            match = re.search(pattern, self.prompt)
            if match:
                return int(match.group(1))
        return None

    def extract_data(self):
        match = re.search(r"(\d+)\s*gb", self.prompt)
        return int(match.group(1)) if match else None

    def extract_network(self):
        for network in NETWORK_TYPES:
            if network in self.prompt:
                return network.upper()
        return None
    
    def extract_calls(self):
        if "unlimited call" in self.prompt:
            return "Unlimited"
        return None

    def extract_sms(self):
        return "sms" in self.prompt
    
    def extract_ott(self):
        selected = []

        for service in OTT_SERVICES:
            if service in self.prompt:
                selected.append(service.title())

        return selected
    
    def extract_budget(self):
        match = re.search(r"(?:under|below|budget)\s*₹?\s*(\d+)", self.prompt)
        return int(match.group(1)) if match else None

    def parse(self):
        return{
            "days": self.extract_days(),
            "data_per_day": self.extract_data(),
            "calls": self.extract_calls(),
            "sms": self.extract_sms(),
            "network": self.extract_network(),
            "ott": self.extract_ott(),
            "budget": self.extract_budget(),
        }

def parse_prompt(prompt: str):
    parser = PlanParser(prompt)
    return parser.parse()