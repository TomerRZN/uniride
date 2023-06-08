from fastapi import APIRouter
from fastapi.param_functions import Depends

from uniride.db.dao.ride_dao import RideDAO
from uniride.db.models.ride_model import RideModel
from uniride.web.api.rides.schema import RideModelInputDTO
from uniride.web.api.rides.schema import RideModelDTO
from fastapi.exceptions import HTTPException

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


@router.get("/ride/{id}", response_model=RideModelDTO)
async def get_ride_by_id(
    id: int,
    ride_dao: RideDAO = Depends()
) -> RideModel:
    """
    Create a new ride.

    :param id: id of the ride
    :param ride_dao: DAO for ride models.
    :return: return ride object
    """
    ride = await ride_dao.get_ride_model_by_id(id)
    if not ride:
        raise HTTPException(404)

    # TODO: add passangers and also decrease seats
    # TODO: add get_profile to get image and name of profile_id
    ride.name = ''
    ride.image = ''
    ride.passengers = []

    if ride.location == 'Herzliya':
        ride.distance = 5.6
    elif ride.location == 'Tel Aviv':
        ride.distance = 0.8
    return ride
