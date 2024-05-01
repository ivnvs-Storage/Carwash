from backend.db.dao.dao import BaseDAO
from backend.db.carwash.model import Carwash


class CarwashDAO(BaseDAO):
    model = Carwash
