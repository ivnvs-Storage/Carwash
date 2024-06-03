from fastapi import APIRouter
from backend.db.box.dao import BoxDAO
from backend.db.types import TSession
from backend.db.session.dao import SessionDAO
from backend.src.report.schemas import TReportCreateInput
import pytz


router_report = APIRouter(
    prefix="/report",
    tags=["Report"],
)

@router_report.post("/create")
async def create_report(req: TReportCreateInput) -> list[TSession]:
    all_sessions: list[TSession] = await SessionDAO.find_all()
    timezone = pytz.timezone('Europe/Moscow')
    required_sessions = []
    for session in all_sessions:
        if (
        timezone.localize(session.start_time) >= req.start_time and 
        timezone.localize(session.end_time) <= req.end_time and 
        session.box_id in req.box_ids
        ):
            required_sessions.append(session)
    return required_sessions

@router_report.get("/fetch")
async def fetch_boxes() -> list[int]:
    boxes = await BoxDAO.find_all()
    return list(map(lambda box: box.id, boxes))
