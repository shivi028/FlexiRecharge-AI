import random

class PricingEngine:
    OTT_PRICES = {
        "Netflix": 149,
        "Prime": 99,
        "Hotstar": 79,
        "Sony Liv": 89,
        "Zee5": 69,
        "Jiocinema": 59 
    }

    def calculate(self, plan):
        price = 0

        # base validity
        price += plan["days"] * 2

        # data
        price += plan["data_per_day"] * plan["days"] * 3

        # calls
        if plan["calls"]:
            price += 50
        
        # SMS
        if plan['sms']:
            price += 15
        
        # network
        if plan['network'] == 5:
            price += 30
        
        # OTT
        for ott in plan['ott']:
            price += self.OTT_PRICES.get(ott, 0)

        promotion_discount = random.choice([0, 10, 20])
        seasonal_surcharge = random.choice([0, 5, 10])

        price = price - promotion_discount + seasonal_surcharge
        return price