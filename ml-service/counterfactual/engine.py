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
        
        recommendations.sort(
            key=lambda x: x["estimated_saving"],
            reverse=True
        )

        selected = []
        seen_categories = set()

        # First pick the best recommendation from each category
        for recommendation in recommendations:

            if recommendation["category"] in seen_categories:
                continue

            selected.append(recommendation)
            seen_categories.add(recommendation["category"])

#        Fill remaining slots with highest-saving recommendations
        if len(selected) < 3:

            for recommendation in recommendations:

                if recommendation in selected:
                    continue

                selected.append(recommendation)

                if len(selected) == 3:
                    break

        return selected
