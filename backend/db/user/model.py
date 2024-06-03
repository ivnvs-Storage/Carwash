from sqlalchemy.orm import mapped_column, Mapped
from sqlalchemy import ARRAY, Column, Integer
from backend.db.database import Base


class User(Base):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    email: Mapped[str]
    hash_password: Mapped[str]
    fullname: Mapped[str]
    enable: Mapped[bool]
    car_ids = Column(ARRAY(Integer))
    administrator: Mapped[bool]
    