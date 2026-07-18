from pydantic import BaseModel
from typing import List, Optional

class PromptRequest(BaseModel):
    prompt: str

class ParsePlan(BaseModel):
    days: Optional[int] = None
    data_per_day: Optional[int] = None
    calls: Optional[str] = None
    sms: Optional[bool] = None
    network: Optional[str] = None
    ott: List[str] = []
    budget: Optional[int] = None

class ManualPlanRequest(BaseModel):
    days: int
    data_per_day: Optional[float] = None
    calls: Optional[str] = None
    sms: bool = False
    network: Optional[str] = None
    ott: List[str] = []
    budget: Optional[int] = None