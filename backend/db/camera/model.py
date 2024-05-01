from typing import TYPE_CHECKING, Optional
from sqlalchemy.orm import relationship, mapped_column, Mapped

from backend.db.database import Base


class Camera(Base):
    __tablename__ = "camera"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    box_id: Mapped[int]
    angle: Mapped[int]
    