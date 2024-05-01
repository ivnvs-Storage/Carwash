from backend.db.dao.dao import BaseDAO
from backend.db.detection.model import Detection


class DetectionDAO(BaseDAO):
    model = Detection
