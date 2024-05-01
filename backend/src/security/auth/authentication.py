from datetime import datetime, timedelta

from jose import jwt
from pydantic import EmailStr

from backend.src.user.schemas import TUser
from backend.src.security.dependencies import verify_password
from backend.db.user.dao import UserDAO
from backend.config import settings



class Authentification:
    @classmethod
    async def authenticate_user(cls, email: EmailStr, password: str) -> TUser:
        user = await UserDAO.find_one_or_none(email=email)
        if user and verify_password(password, user.hash_password):
            return user
        else:
            return None


    @classmethod
    def create_access_token(cls, data: dict) -> str:
        to_encode = data.copy()
        expire = datetime.now() + timedelta(minutes=30)
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(
            to_encode, settings.SECRET_KEY, settings.ALGORITHM
        )
        return encoded_jwt
    