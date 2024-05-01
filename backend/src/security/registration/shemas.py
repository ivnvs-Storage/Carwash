from pydantic import BaseModel, EmailStr


class TRegistrationInput(BaseModel):
    email: EmailStr
    password: str
    fullname: str