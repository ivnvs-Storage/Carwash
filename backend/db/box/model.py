from typing import TYPE_CHECKING, Optional
from sqlalchemy.orm import mapped_column, Mapped

from backend.db.database import Base


class Box(Base):
    __tablename__ = "box"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    carwash_id: Mapped[int]
