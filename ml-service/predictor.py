import joblib
import os
import pandas as pd
from feature_builder import FeatureBuilder

MODEL_PATH = os.path.join(
    os.path.dirname(__file__),
    "models",
    "price_model.pkl"
)

model = joblib.load(MODEL_PATH)
print("loading model.....")


class PricePredictor:

    def predict(self, plan):

        features = {
            "days": plan["days"],
            "data_per_day": plan["data_per_day"],
            "calls": 1 if plan["calls"] == "Unlimited" else 0,
            "sms": 1 if plan["sms"] else 0,
            "network": 5 if plan["network"] == "5G" else 4,

            "netflix": int("Netflix" in plan["ott"]),
            "prime": int("Prime" in plan["ott"]),
            "hotstar": int("Hotstar" in plan["ott"]),
            "sony_liv": int("Sony Liv" in plan["ott"]),
            "zee5": int("Zee5" in plan["ott"]),
            "jiocinema": int("JioCinema" in plan["ott"]),
        }

        df = FeatureBuilder.build(plan)

        print(df)

        prediction = model.predict(df)[0]

        return round(float(prediction), 2)