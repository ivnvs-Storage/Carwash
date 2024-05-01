from backend.db.dao.dao import BaseDAO
from backend.db.box.model import Box


class BoxDAO(BaseDAO):
    model = Box
