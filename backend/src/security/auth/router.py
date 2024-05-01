from fastapi import APIRouter, Depends, Response
from backend.src.user.schemas import TUser
from backend.src.security.auth.schemas import TAuth
from backend.src.security.auth.authentication import Authentification
from backend.src.security.auth.authorization import Authorization
from backend.db.user.dao import UserDAO
from backend.src.security.dependencies import get_user_id_from_token


router_auth = APIRouter(
    prefix="/auth",
    tags=["Auth"],
)


@router_auth.post("/login")
async def login_user(response: Response, user_data: TAuth) -> dict:
    user = await Authentification.authenticate_user(user_data.email, user_data.password)
    access_token = Authentification.create_access_token({"sub": str(user.id)})
    if Authorization.is_enable_user(user):
        response.set_cookie("carwash_access_token", access_token, httponly=True)
    return {"access_token": access_token}


@router_auth.get("/me")
async def read_user_me(user_id: int = Depends(get_user_id_from_token)) -> TUser:
    user = await UserDAO.find_one_or_none(id=user_id)
    return user

@router_auth.post("/logout")
async def logout_user(response: Response):
    response.delete_cookie("carwash_access_token")
