from pydantic import BaseModel, EmailStr


class TAuth(BaseModel):
    email: EmailStr
    password: str
