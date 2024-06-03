from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.src.security.auth.router import router_auth
from backend.src.security.registration.router import router_registration
from backend.src.session.router import router_session
from backend.src.user.router import router_user
from backend.src.report.router import router_report
from backend.src.confirm.router import router_confirm
from backend.src.booking.router import router_booking
from backend.src.bill.router import router_bill


app = FastAPI()


app.include_router(router_auth)
app.include_router(router_registration)
app.include_router(router_session)
app.include_router(router_user)
app.include_router(router_report)
app.include_router(router_confirm)
app.include_router(router_booking)
app.include_router(router_bill)

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://localhost:5173",
    "https://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/test")
async def logout_user() -> bool:
    return True

