from pydantic import BaseModel


class TBillData(BaseModel):
    session_id: int
    cost: float


class TBillCreateInput(BaseModel):
    data: list[TBillData]
