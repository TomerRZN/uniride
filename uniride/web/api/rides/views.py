from fastapi import APIRouter
from fastapi.param_functions import Depends

from uniride.db.dao.ride_dao import RideDAO
from uniride.web.api.rides.schema import RideModelInputDTO

router = APIRouter()


@router.post("/")
async def create_ride(
    new_ride: RideModelInputDTO,
    ride_dao: RideDAO = Depends(),
) -> None:
    """
    Create a new ride.

    :param new_ride: Data for the new ride.
    :param ride_dao: DAO for ride models.
    :return: Created ride.
    """
    # Replace the logic below with your actual implementation
    await ride_dao.create_ride_model(**new_ride.dict())
