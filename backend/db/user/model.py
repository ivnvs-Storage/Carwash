from typing import TYPE_CHECKING, Optional
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship, mapped_column, Mapped

from backend.db.database import Base

# if TYPE_CHECKING:
#     # Убирает предупреждения отсутствия импорта и неприятные подчеркивания в 
#     # PyCharm и VSCode
#     from bookings.models import Bookings


class User(Base):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    email: Mapped[str]
    hash_password: Mapped[str]
    fullname: Mapped[str]
    enable: Mapped[bool]
    car_ids: Mapped[Optional[int]]
    administrator: Mapped[bool]

    # bookings: Mapped[list["Bookings"]] = relationship(back_populates="user")