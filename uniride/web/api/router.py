from fastapi.routing import APIRouter

from uniride.web.api import docs, dummy, echo, monitoring, rides, profiles

api_router = APIRouter()
api_router.include_router(monitoring.router)
api_router.include_router(docs.router)
api_router.include_router(echo.router, prefix="/echo", tags=["echo"])
api_router.include_router(dummy.router, prefix="/dummy", tags=["dummy"])
api_router.include_router(rides.router, prefix="/rides", tags=["rides"])
api_router.include_router(profiles.router, prefix="/profiles", tags=["profiles"])
