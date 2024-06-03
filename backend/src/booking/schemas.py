from pydantic import BaseModel
from datetime import datetime


class TBookingCreateInput(BaseModel):
    datetime: datetime
    