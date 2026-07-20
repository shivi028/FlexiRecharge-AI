from copy import deepcopy
from .base import Transformation


class RemoveOTTTransformation(Transformation):

    def generate(self, plan):

        alternatives = []

        for ott in plan["ott"]:

            new_plan = deepcopy(plan)

            new_plan["ott"].remove(ott)

            alternatives.append({

    "category":"OTT Optimization",

    "title":"Reduce OTT Cost",

    "action":f"Remove {ott}",

    "reason":f"Removing {ott} keeps the rest of your recharge plan unchanged while reducing its overall cost.",

    "plan":new_plan
})

        return alternatives


class NetworkTransformation(Transformation):

    def generate(self, plan):

        if plan["network"] == "5G":

            new_plan = deepcopy(plan)

            new_plan["network"] = "4G"

            return [{
                "category": "Network Optimization",
                "title": "Switch to 4G",
                "action": "Use a 4G recharge instead of 5G",
                "reason": "If 5G isn't essential, switching to a 4G recharge reduces the overall cost while keeping calls and data benefits similar.",
                "plan": new_plan
            }]

        return []


class ValidityTransformation(Transformation):

    STANDARD = [7, 14, 28, 56, 84]

    def generate(self, plan):

        if plan["days"] in self.STANDARD:
            return []

        nearest = min(
            self.STANDARD,
            key=lambda x: abs(x - plan["days"])
        )

        new_plan = deepcopy(plan)

        new_plan["days"] = nearest

        return [{
            "category": "Validity Optimization",
            "title": f"Use {nearest}-Day Plan",
            "action": f"Reduce validity to {nearest} days",
            "reason": "Choosing the closest standard validity can reduce the recharge price while still meeting your needs.",
            "plan": new_plan
        }]