from fastapi import Depends, Request
from jose import ExpiredSignatureError, JWTError, jwt
from passlib.context import CryptContext
from backend.config import settings
from backend.src.exceptions import (
    IncorrectTokenFormatException,
    TokenAbsentException,
    UserIsNotPresentException,
)


def get_token(request: Request):
    token = request.cookies.get("carwash_access_token")
    if not token:
        raise TokenAbsentException
    return token


async def get_user_id_from_token(token: str = Depends(get_token)) -> int:
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, settings.ALGORITHM
        )
    except JWTError:
        raise IncorrectTokenFormatException
    user_id: str = payload.get("sub")
    if not user_id:
        raise UserIsNotPresentException
    return int(user_id)


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password, hash_password) -> bool:
    return pwd_context.verify(plain_password, hash_password)


def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)
