from typing import Optional
from fastapi import APIRouter, Depends, Response
from backend.db.types import TSession
from backend.src.session.dependencies import get_car_numbers_by_user_id
from backend.db.session.dao import SessionDAO
from backend.src.session.schemas import TSessionsOtput
from backend.src.security.dependencies import get_user_id_from_token
from datetime import datetime


router_session = APIRouter(
    prefix="/session",
    tags=["Session"],
)

@router_session.get("/sessions")
async def fetch_sessions(user_id: int = Depends(get_user_id_from_token)) -> list[Optional[TSession]]:
    if user_id is None:
        return []
    numbers = await get_car_numbers_by_user_id(user_id)
    sessions: list[TSession] = []
    if numbers:
        for number in numbers:
            session: TSession = await SessionDAO.find_all(number=number)
            sessions += session
    return sorted(sessions, key=lambda session: session.start_time, reverse=True)

@router_session.post("/add")
async def add_session(box_id: int, number: str, payed: bool, cost: float):
    await SessionDAO.add({
        'box_id': box_id,
        'number': number,
        'payed': payed,
        'cost': cost,
        'start_time': datetime.now(),
        'end_time': datetime.now(),
    })
