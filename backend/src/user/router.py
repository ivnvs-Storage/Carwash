from fastapi import APIRouter, Depends, Response
from backend.db.car.dao import CarDAO
from backend.src.user.schemas import TInfoOutput
from backend.db.user.dao import UserDAO
from backend.db.types import TSession
from backend.src.session.dependencies import get_car_numbers_by_user_id
from backend.db.session.dao import SessionDAO
from backend.src.session.schemas import TSessionsOtput
from backend.src.security.dependencies import get_user_id_from_token
from datetime import datetime


router_user = APIRouter(
    prefix="/user",
    tags=["User"],
)

@router_user.get("/info")
async def fetch_user_info(user_id: int = Depends(get_user_id_from_token)) -> TInfoOutput:
    if user_id is None:
        return {}
    user = await UserDAO.find_one_or_none(id=user_id)
    numbers = await get_car_numbers_by_user_id(user_id)
    info: TInfoOutput = {
        'fullname': user.fullname,
        'email': user.email,
        'car_numbers': numbers
    }
    return info


@router_user.post("/update")
async def update_user_info(
    user_form_data: dict, 
    user_id: int = Depends(get_user_id_from_token)
    ):
    if user_id is None:
        return None
    user = await UserDAO.find_one_or_none(id=user_id)
    print(user_form_data)
    car_numbers = []
    user_update = {}
    for data_key in user_form_data.keys():
        if 'new' in data_key:
            if len(user_form_data[data_key]) > 0:
                car_numbers.append(user_form_data[data_key])
        else:
            user_update[data_key] = user_form_data[data_key]
    car_ids = []
    for car_number in car_numbers:
        car = await CarDAO.find_one_or_none(number=car_number)
        if car:
            car_ids.append(car.id)
    if len(car_ids) > 0:
        user_update['car_ids'] = car_ids
    new_user_data = dict(user)
    for user_update_key in user_update.keys():
        if user_update_key == 'car_ids':
            new_user_data[user_update_key] += user_update[user_update_key]
        else:
            new_user_data[user_update_key] = user_update[user_update_key]
    print(new_user_data)
    await UserDAO.update_info(new_user_data)
