from pydantic import BaseModel
from datetime import datetime


class TSessionsOtput(BaseModel):
    id: int
    box_id: int
    number: str
    payed: bool
    cost: float
    start_time: datetime
    end_time: datetime
