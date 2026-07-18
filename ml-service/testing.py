# from pricing import PricingEngine
# engine = PricingEngine()

# plan = {
#     "days": 28,
#     "data_per_day": 3,
#     "calls": True,
#     "sms": True,
#     "network": 5,
#     "ott": ["Netflix", "Prime"]
# }

# print(engine.calculate(plan))

# from predictor import PricePredictor

# predictor = PricePredictor()

# plan = {
#     "days": 28,
#     "data_per_day": 3,
#     "calls": "Unlimited",
#     "sms": True,
#     "network": "5G",
#     "ott": ["Netflix", "Prime"]
# }
# print(predictor.predict(plan))

# from predictor import PricePredictor
# from counterfactual.engine import CounterfactualEngine

# predictor = PricePredictor()

# engine = CounterfactualEngine(predictor)

# plan = {
#     "days": 28,
#     "data_per_day": 3,
#     "calls": "Unlimited",
#     "sms": False,
#     "network": "5G",
#     "ott": ["Netflix", "Prime"],
#     "budget": None
# }

# recommendations = engine.recommend(plan)

# print(recommendations)
from parser import parse_prompt

print(
    parse_prompt(
        "I need a 20-day recharge with 3GB/day and Netflix."
    )
)

# print(
#     parse_prompt(
#         "I need a recharge for 20 days with 3GB/day and Netflix."
#     )
# )