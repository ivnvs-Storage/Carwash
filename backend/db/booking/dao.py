from backend.db.dao.dao import BaseDAO
from backend.db.booking.model import Booking


class BookingDAO(BaseDAO):
    model = Booking
