from typing import TYPE_CHECKING, Optional
from sqlalchemy.orm import mapped_column, Mapped

from backend.db.database import Base


class Car(Base):
    __tablename__ = "car"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    number: Mapped[str]
    type: Mapped[str]
