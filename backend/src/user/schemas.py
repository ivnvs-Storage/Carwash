from typing import Optional
from pydantic import BaseModel, EmailStr


class TUser(BaseModel):
    id: int
    email: EmailStr
    hash_password: str
    fullname: str
    enable: bool
    car_ids: Optional[list[int]]
    administrator: bool
