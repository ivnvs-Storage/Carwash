from sqlalchemy import insert, update
from backend.db.dao.dao import BaseDAO
from backend.db.user.model import User
from backend.db.database import async_session_maker
from sqlalchemy.exc import SQLAlchemyError


class UserDAO(BaseDAO):
    model = User

    @classmethod
    async def add_user(cls, user_data):
        async with async_session_maker() as session:
            query = insert(cls.model).values(
                email=user_data['email'], 
                hash_password=user_data['hash_password'],
                fullname=user_data['fullname'],
                car_ids=[], 
                enable=False,
                administrator=False
                )
            result = await session.execute(query)
            await session.commit()

    @classmethod
    async def update_info(cls, data: dict):
        async with async_session_maker() as session:
            query = update(cls.model).where(cls.model.id == data['id']).values(
                fullname=data['fullname'],
                email=data['email'],
                car_ids=data['car_ids']
            )
            await session.execute(query)
            await session.commit()
        
    @classmethod
    async def confirm_user(cls, user_id):
        async with async_session_maker() as session:
            query = update(cls.model).where(cls.model.id == user_id).values(enable=True)
            await session.execute(query)
            await session.commit()
