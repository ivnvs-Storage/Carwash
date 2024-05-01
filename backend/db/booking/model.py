from typing import TYPE_CHECKING, Optional
from sqlalchemy.orm import mapped_column, Mapped
from datetime import datetime
from backend.db.database import Base


class Booking(Base):
    __tablename__ = "booking"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    start_time: Mapped[datetime]
    end_time: Mapped[datetime]
