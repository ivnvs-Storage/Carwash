from fastapi import APIRouter, Response
from backend.db.booking.dao import BookingDAO
from backend.src.confirm.schemas import TApproveBookingInput, TBookingsOutput, TConfirmAddInput
from backend.db.user.dao import UserDAO
from backend.db.types import TUser


router_confirm = APIRouter(
    prefix="/confirm",
    tags=["Confirm"],
)

@router_confirm.get("/users")
async def fetch_users_to_confirm() -> list[TUser]:
    users = await UserDAO.find_all(enable=False)
    return users

@router_confirm.post("/add")
async def add_new_user(req_data: TConfirmAddInput):
    await UserDAO.confirm_user(req_data.user_id)

@router_confirm.post("/delete")
async def delete_user(req_data: TConfirmAddInput):
    await UserDAO.delete(req_data.user_id)


@router_confirm.get("/bookings")
async def fetch_bookings_to_approve() -> list[TBookingsOutput]:
    bookings = await BookingDAO.find_all(approved=False)
    users = await UserDAO.find_all()
    booking_to_approve = []
    for booking in bookings:
        booking_to_approve.append({
            **booking, 
            'fullname': next(user.fullname for user in users if user.id == booking.user_id)
            })
    return booking_to_approve

@router_confirm.post("/approve")
async def approve_booking(req: TApproveBookingInput):
    await BookingDAO.approve_booking(req.booking_id)

@router_confirm.post("/delbook")
async def delete_booking(req_data: TApproveBookingInput):
    await UserDAO.delete(req_data.booking_id)
