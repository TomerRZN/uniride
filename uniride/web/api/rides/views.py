from fastapi import APIRouter
from fastapi.param_functions import Depends

from uniride.db.dao.pickup_dao import PickupDAO
from uniride.db.dao.profile_dao import ProfileDAO
from uniride.db.dao.ride_dao import RideDAO
from uniride.db.models.ride_model import RideModel
from uniride.services.rides import enrich_ride
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


@router.get("/{id}", response_model=RideModelDTO)
async def get_ride_by_id(
    id: int,
    ride_dao: RideDAO = Depends(),
    pickup_dao: PickupDAO = Depends(),
    profile_dao: ProfileDAO = Depends(),
) -> RideModel:
    """
    Create a new ride.

    :param id: id of the ride
    :param ride_dao: DAO for ride models.
    :param pickup_dao: DAO for pickup models.
    :param profile_dao: DAO for profile models.
    :return: return ride object
    """
    ride = await ride_dao.get_ride_model_by_id(id)
    if not ride:
        raise HTTPException(404)

    ride = await enrich_ride(ride, pickup_dao, profile_dao)
    return ride


@router.get("/", response_model=list[RideModelDTO])
async def get_all_rides(
    ride_dao: RideDAO = Depends(),
    pickup_dao: PickupDAO = Depends(),
    profile_dao: ProfileDAO = Depends(),
) -> list[RideModel]:
    """
    Create a new ride.

    :param ride_dao: DAO for ride models.
    :param pickup_dao: DAO for pickup models.
    :param profile_dao: DAO for profile models.
    :return: return ride object
    """
    return [
        await enrich_ride(ride, pickup_dao, profile_dao)
        for ride in await ride_dao.get_all_rides()
    ]
