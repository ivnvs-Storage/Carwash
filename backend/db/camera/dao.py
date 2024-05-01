from backend.db.dao.dao import BaseDAO
from backend.db.camera.model import Camera


class CameraDAO(BaseDAO):
    model = Camera
    