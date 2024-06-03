from backend.db.dao.dao import BaseDAO
from backend.db.booking.model import Booking
from sqlalchemy import insert, update
from sqlalchemy.exc import SQLAlchemyError
from backend.db.database import async_session_maker


class BookingDAO(BaseDAO):
    model = Booking

    @classmethod
    async def add(cls, **data):
        async with async_session_maker() as session:
            query = insert(cls.model).values(
                datetime=data['datetime'].replace(tzinfo=None), 
                user_id=data['user_id'], approved=data['approved']
                )
            result = await session.execute(query)
            await session.commit()

    @classmethod
    async def approve_booking(cls, booking_id):
        async with async_session_maker() as session:
            query = update(cls.model).where(cls.model.id == booking_id).values(approved=True)
            await session.execute(query)
            await session.commit()
