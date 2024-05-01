from backend.db.dao.dao import BaseDAO
from backend.db.session.model import Session


class SessionDAO(BaseDAO):
    model = Session
