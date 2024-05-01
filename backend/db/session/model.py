from typing import TYPE_CHECKING, Optional
from sqlalchemy.orm import mapped_column, Mapped
from datetime import datetime
from backend.db.database import Base


class Session(Base):
    __tablename__ = "session"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    box_id: Mapped[int]
    number: Mapped[str]
    payed: Mapped[bool]
    cost: Mapped[float]
    start_time: Mapped[datetime]
    end_time: Mapped[datetime]
