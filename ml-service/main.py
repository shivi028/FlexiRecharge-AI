from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas import PromptRequest, ManualPlanRequest
from parser import parse_prompt
from predictor import PricePredictor
from counterfactual.engine import CounterfactualEngine
from fastapi import HTTPException

predictor = PricePredictor()
counterfactual = CounterfactualEngine(predictor)

app = FastAPI(
    title="FlexiRecharge AI API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def root():
    return{
        "message": "FlexiRecharge AI Running 🚀"
    }

@app.post('/api/v1/plan/parse')
def parse_plan(request: PromptRequest):
    return parse_prompt(request.prompt)


@app.post('/api/v1/plan/predict')
def predict_plan(request: PromptRequest):
    # parse natural language
    parsed_plan = parse_prompt(request.prompt)
    # predict price
    price = predictor.predict(parsed_plan)

    # generate ML-based recommendations
    recommendations = counterfactual.recommend(parsed_plan)

    return {
        "parsed_plan": parsed_plan,
        "predicted_price": price,
        "recommendations": recommendations
    }

@app.post("/api/v1/plan/generate")
def generate_plan(request: PromptRequest):
    try:

        parsed_plan = parse_prompt(request.prompt)

        predicted_price = round(predictor.predict(parsed_plan), 2)

        recommendations = counterfactual.recommend(parsed_plan)
        
        return {
        "success": True,
        "message": "Recharge plan generated successfully",
        "data": {
            "parsed_plan": parsed_plan,
            "predicted_price": predicted_price,
            "recommendations": recommendations
            }
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/v1/plan/manual")
def manual_plan(request: ManualPlanRequest):

    plan = request.model_dump()

    predicted_price = round(
        predictor.predict(plan),
        2
    )

    recommendations = counterfactual.recommend(plan)

    return {
        "success": True,
        "data": {
            "parsed_plan": plan,
            "predicted_price": predicted_price,
            "recommendations": recommendations
        }
    }

@app.get("/health")
def health():
    return {
        "status": "ok",
        "service": "FlexiRecharge AI ML Service"
    }

    