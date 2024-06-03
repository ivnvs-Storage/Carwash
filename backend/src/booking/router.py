from fastapi import APIRouter, Depends
from backend.db.booking.dao import BookingDAO
from backend.src.booking.schemas import TBookingCreateInput
from backend.src.security.dependencies import get_user_id_from_token
from backend.db.box.dao import BoxDAO
from backend.db.types import TBooking


router_booking = APIRouter(
    prefix="/booking",
    tags=["Booking"],
)

@router_booking.post("/create")
async def create_booking(req: TBookingCreateInput, user_id: int = Depends(get_user_id_from_token)):
    if user_id is not  None:
        await BookingDAO.add(
            datetime=req.datetime,
            user_id=user_id,
            approved=False,
        )

@router_booking.get("/fetch")
async def fetch_bookings(user_id: int = Depends(get_user_id_from_token)) -> list[TBooking]:
    if user_id is None:
        return []
    bookings = await BookingDAO.find_all(user_id=user_id)
    return bookings
