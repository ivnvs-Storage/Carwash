from backend.db.dao.dao import BaseDAO
from backend.db.car.model import Car


class CarDAO(BaseDAO):
    model = Car
