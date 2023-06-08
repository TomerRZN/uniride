from typing import List
from fastapi import APIRouter, HTTPException
from fastapi.param_functions import Depends
from pydantic import BaseModel
import datetime
from uniride.web.api.rides.schema import RidesModelDTO,RidesModelInputDTO
import uniride.web.api.Location as Location
router = APIRouter()
@router.get("/rides/{ride_id}", response_model=List[RidesModelInputDTO])
async def get_ride_by_id(ride_id) -> List[RidesModelInputDTO]:
    """
    Get dummy rides based on specified filters.

    :param event_time_range: Event time range filter.
    :param direction: Direction filter.
    :param location: Location filter.
    :return: List of dummy rides matching the filters.
    """
    # Perform filtering based on the provided parameters
    # Replace the logic below with your actual implementation
    dummy_rides = []

    return dummy_rides


@router.get("/rides/{id}", response_model=DummyModelDTO)
async def get_dummy_ride_by_id(id: uuid.UUID) -> DummyModelDTO:
    """
    Get a dummy ride by its ID.

    :param id: ID of the dummy ride.
    :return: Dummy ride with the specified ID.
    """
    # Replace the logic below with your actual implementation
    dummy_ride = DummyModelDTO(
        driver_id=uuid.uuid4(),
        name="Dummy Ride",
        image="dummy-image.jpg",
        event_time=datetime.datetime.now(),
        distance=10.5,
        ride_id=id,
        location=Location(latitude=12.34, longitude=56.78),
        seats=4,
        to_uni=True,
        passengers=[Profile(id=uuid.uuid4(), name="John"), Profile(id=uuid.uuid4(), name="Alice")],
        price=25.0,
        description="A dummy ride for testing purposes"
    )

    return dummy_ride


@router.post("/rides", response_model=DummyModelDTO)
async def create_dummy_ride(
    new_dummy_ride: DummyModelInputDTO,
) -> DummyModelDTO:
    """
    Create a new dummy ride.

    :param new_dummy_ride: Data for the new dummy ride.
    :return: Created dummy ride.
    """
    # Replace the logic below with your actual implementation
    created_dummy_ride = DummyModelDTO(
        driver_id=uuid.uuid4(),
        name=new_dummy_ride.name,
        image=new_dummy_ride.image,
        event_time=new_dummy_ride.event_time,
        distance=0.0,
        ride_id=uuid.uuid4(),
        location=new_dummy_ride.location,
        seats=new_dummy_ride.seats,
        to_un
