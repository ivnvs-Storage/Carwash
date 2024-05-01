from typing import TYPE_CHECKING, Optional
from sqlalchemy.orm import relationship, mapped_column, Mapped

from backend.db.database import Base


class Carwash(Base):
    __tablename__ = "carwash"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    