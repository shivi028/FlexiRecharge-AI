import random
import pandas as pd
import os
import sys

random.seed(42)

# Allow importing pricing.py from parent folder
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from pricing import PricingEngine

engine = PricingEngine()

def generate_budget_user():
    return{
        "days": random.choice([14, 28]),
        "data_per_day": random.choice([1,2]),
        "calls": True,
        "sms": random.choice([True, False]),
        "network": 4,
        "ott": []
    }

def generate_streamer():
    return{
        "days": random.choice([28, 56]),
        "data_per_day": random.choice([3, 4]),
        "calls": True,
        "sms": True,
        "network": 5,
        "ott": random.sample(
            ["Netflix", "Prime", "Hotstar"],
            random.randint(1, 3)
        )
    }

def generate_traveller():
    return {
        "days": random.choice([7, 14]),
        "data_per_day": random.choice([3, 5]),
        "calls": True,
        "sms": False,
        "network": 5,
        "ott": []
    }

def generate_family():
    return {
        "days": random.choice([56, 84]),
        "data_per_day": random.choice([2, 3]),
        "calls": True,
        "sms": True,
        "network": 5,
        "ott": ["Netflix", "Prime", "Hotstar"]
    }

generators = [
    generate_budget_user,
    generate_streamer,
    generate_traveller,
    generate_family
]

def plan_to_row(plan, price):

    return {
        "days": plan["days"],
        "data_per_day": plan["data_per_day"],
        "calls": int(plan["calls"]),
        "sms": int(plan["sms"]),
        "network": plan["network"],

        "netflix": int("Netflix" in plan["ott"]),
        "prime": int("Prime" in plan["ott"]),
        "hotstar": int("Hotstar" in plan["ott"]),
        "sony_liv": int("Sony Liv" in plan["ott"]),
        "zee5": int("Zee5" in plan["ott"]),
        "jiocinema": int("JioCinema" in plan["ott"]),

        "price": price
    }

rows = []

for _ in range(20000):

    plan = random.choice(generators)()

    price = engine.calculate(plan)

    rows.append(
        plan_to_row(plan, price)
    )

df = pd.DataFrame(rows)

output_path = os.path.join(
    os.path.dirname(os.path.dirname(__file__)),
    "dataset",
    "recharge_dataset.csv"
)

df.to_csv(output_path, index=False)

print(df.head())

print("\nDataset Generated Successfully!")

print(f"Rows : {len(df)}")

print("\nDataset Summary:")
print(df.describe())