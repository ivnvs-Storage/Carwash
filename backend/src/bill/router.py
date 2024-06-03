from fastapi import APIRouter, Depends
from backend.src.bill.schemas import TBillCreateInput
from backend.db.session.dao import SessionDAO
from backend.db.booking.dao import BookingDAO
from backend.db.types import TSession


router_bill = APIRouter(
    prefix="/bill",
    tags=["Bill"],
)

@router_bill.post("/create")
async def create_bills(requests: TBillCreateInput):
    for request in requests.data:
        await SessionDAO.create_bill(request.session_id, request.cost)

@router_bill.get("/fetch")
async def fetch_sessions_to_bill() -> list[TSession]:
    sessions = await SessionDAO.find_all(cost=None)
    return sessions
