from fastapi import APIRouter
from fastapi.param_functions import Depends

from uniride.db.dao.ride_dao import RideDAO
from uniride.web.api.rides.schema import RideModelInputDTO

router = APIRouter()

#
# @router.get("/rides/{ride_id}", response_model=List[RideModelInputDTO])
# async def get_ride_by_id(ride_id) -> List[RideModelInputDTO]:
#     """
#     Get dummy rides based on specified filters.
#
#     :param event_time_range: Event time range filter.
#     :param direction: Direction filter.
#     :param location: Location filter.
#     :return: List of dummy rides matching the filters.
#     """
#     # Perform filtering based on the provided parameters
#     # Replace the logic below with your actual implementation
#     dummy_rides = []
#
#     return dummy_rides

#
# @router.get("/rides/{id}", response_model=DummyModelDTO)
# async def get_dummy_ride_by_id(id: uuid.UUID) -> DummyModelDTO:
#     """
#     Get a dummy ride by its ID.
#
#     :param id: ID of the dummy ride.
#     :return: Dummy ride with the specified ID.
#     """
#     # Replace the logic below with your actual implementation
#     dummy_ride = DummyModelDTO(
#         driver_id=uuid.uuid4(),
#         name="Dummy Ride",
#         image="dummy-image.jpg",
#         event_time=datetime.datetime.now(),
#         distance=10.5,
#         ride_id=id,
#         location=Location(latitude=12.34, longitude=56.78),
#         seats=4,
#         to_uni=True,
#         passengers=[Profile(id=uuid.uuid4(), name="John"),
#                     Profile(id=uuid.uuid4(), name="Alice")],
#         price=25.0,
#         description="A dummy ride for testing purposes"
#     )
#
#     return dummy_ride


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