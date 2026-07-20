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


class PricePredictor:

    def predict(self, plan):
        df = FeatureBuilder.build(plan)
        prediction = model.predict(df)[0]
        return round(float(prediction), 2)