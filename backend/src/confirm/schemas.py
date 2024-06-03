from pydantic import BaseModel
from datetime import datetime


class TConfirmAddInput(BaseModel):
    user_id: int

class TBookingsOutput(BaseModel):
    id: int
    datetime: datetime
    user_id: int
    approved: bool
    fullname: str

class TApproveBookingInput(BaseModel):
    booking_id: int
