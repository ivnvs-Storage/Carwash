from sqlalchemy import update
from backend.db.dao.dao import BaseDAO
from backend.db.session.model import Session
from backend.db.database import async_session_maker


class SessionDAO(BaseDAO):
    model = Session

    @classmethod
    async def create_bill(cls, session_id, cost):
        async with async_session_maker() as session:
            query = update(cls.model).where(cls.model.id == session_id).values(cost=cost)
            await session.execute(query)
            await session.commit()
