from pydantic import BaseModel
from datetime import datetime


class TReportCreateInput(BaseModel):
    start_time: datetime
    end_time: datetime
    box_ids: list[int]
    