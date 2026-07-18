from .transformations import (RemoveOTTTransformation, NetworkTransformation, ValidityTransformation)

class CounterfactualEngine:
    def __init__(self, predictor):
        self.predictor = predictor
        self.transformations = [
            RemoveOTTTransformation(),
            NetworkTransformation(),
            ValidityTransformation()
        ]

    def recommend(self, plan):
        current_price = self.predictor.predict(plan)

        recommendations = []
        for transformation in self.transformations:
            alternatives = transformation.generate(plan)
            for alternative in alternatives:
                new_price = self.predictor.predict(alternative["plan"])
                saving = round(current_price - new_price, 2)

                if saving <= 0:
                    continue

                recommendations.append({

                    "category": alternative["category"],

                    "title": alternative["title"],

                    "action": alternative["action"],

                    "reason": alternative["reason"],

                    "current_price": current_price,

                    "predicted_price": new_price,

                    "estimated_saving": saving
                })
        
        recommendations.sort(key=lambda x: x["estimated_saving"], reverse=True)
        return recommendations[:3]
