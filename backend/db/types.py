from typing import Optional
from pydantic import BaseModel, EmailStr
from datetime import datetime


class TSession(BaseModel):
    id: int
    box_id: int
    number: str
    payed: bool
    cost: Optional[float]
    start_time: datetime
    end_time: datetime



class TCar(BaseModel):
    id: int
    number: str
    type: str


class TUser(BaseModel):
    id: int
    email: EmailStr
    hash_password: str
    fullname: str
    enable: bool
    car_ids: Optional[list[int]]
    administrator: bool


class TBooking(BaseModel):
    id: int
    approved: bool
    user_id: int
    datetime: datetime
