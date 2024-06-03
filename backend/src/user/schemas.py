from typing import Optional
from pydantic import BaseModel, EmailStr


class TInfoOutput(BaseModel):
    email: EmailStr
    fullname: str
    car_numbers: Optional[list[str]]
