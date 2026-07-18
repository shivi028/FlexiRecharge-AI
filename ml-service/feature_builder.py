import pandas as pd


class FeatureBuilder:
    """
    Converts a parsed recharge plan into the feature vector
    expected by the ML model.
    """

    @staticmethod
    def build(plan: dict) -> pd.DataFrame:
        features = {
            "days": plan.get("days"),
            "data_per_day": plan.get("data_per_day"),
            "calls": 1 if plan.get("calls") == "Unlimited" else 0,
            "sms": 1 if plan.get("sms") else 0,
            "network": 5 if plan.get("network") == "5G" else 4,

            "netflix": int("Netflix" in plan.get("ott", [])),
            "prime": int("Prime" in plan.get("ott", [])),
            "hotstar": int("Hotstar" in plan.get("ott", [])),
            "sony_liv": int("Sony Liv" in plan.get("ott", [])),
            "zee5": int("Zee5" in plan.get("ott", [])),
            "jiocinema": int("JioCinema" in plan.get("ott", [])),
        }

        return pd.DataFrame([features])