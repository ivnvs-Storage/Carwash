from typing import TYPE_CHECKING, Optional
from sqlalchemy.orm import mapped_column, Mapped
from datetime import datetime
from backend.db.database import Base


class Detection(Base):
    __tablename__ = "detection"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    camera_id: Mapped[int]
    number: Mapped[str]
    valid: Mapped[bool]
    datetime: Mapped[datetime]
