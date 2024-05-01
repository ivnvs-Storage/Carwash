from backend.db.dao.dao import BaseDAO
from backend.db.user.model import User


class UserDAO(BaseDAO):
    model = User
