from fastapi import FastAPI
from jose import jwt
from fastapi.middleware.cors import CORSMiddleware
from backend.src.exceptions import UserIsNotPresentException
from backend.src.security.auth.router import router_auth
from backend.src.security.registration.router import router_registration


app = FastAPI()


app.include_router(router_auth)
app.include_router(router_registration)
# # app.include_router(router_hotels)  # Необходимо реализовать самостоятельно
# app.include_router(router_bookings)

# app.include_router(router_images)
# app.include_router(router_prometheus)

origins = [
    # 3000 - порт, на котором работает фронтенд на React.js 
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS", "DELETE", "PATCH", "PUT"],
    allow_headers=["Content-Type", "Set-Cookie", "Access-Control-Allow-Headers", 
                   "Access-Control-Allow-Origin", "Authorization"],
)


@app.get("/test")
async def logout_user():
    raise UserIsNotPresentException

