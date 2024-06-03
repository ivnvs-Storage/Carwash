from backend.db.types import TCar
from backend.db.car.dao import CarDAO
from backend.db.types import TUser
from backend.db.user.dao import UserDAO


async def get_car_numbers_by_user_id(user_id: int) -> int:
    user: TUser = await UserDAO.find_one_or_none(id=user_id)
    numbers = []
    if user.car_ids:
        for car_id in user.car_ids:
            car: TCar = await CarDAO.find_one_or_none(id=car_id)
            numbers.append(car.number)
        return numbers
    else:
        return []

