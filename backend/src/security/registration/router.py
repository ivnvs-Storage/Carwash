from fastapi import APIRouter

from backend.src.security.registration.shemas import TRegistrationInput
from backend.db.user.dao import UserDAO
from backend.src.security.dependencies import get_password_hash
from backend.db.types import TUser

from backend.db.carwash.dao import CarwashDAO


router_registration = APIRouter(
    prefix="/registration",
    tags=["Registration"],
)


@router_registration.post("/registration")
async def registration(user_data: TRegistrationInput) -> bool:
    existing_user = await UserDAO.find_one_or_none(email=user_data.email)
    if existing_user:
        return False
    hash_password = get_password_hash(user_data.password)
    new_user = await UserDAO.add_user({
        'email':user_data.email, 
        'hash_password': hash_password,
        'fullname': user_data.fullname,
        })
    if not new_user:
        return False
    return True
