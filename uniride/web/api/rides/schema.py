import datetime

from pydantic import BaseModel

from uniride.web.api import Location


class RidesModelDTO(BaseModel):
    """
    DTO for dummy models.

    It returned when accessing dummy models from the API.
    """

    driver_id: int
    name: str
    image: str
    event_time: datetime
    distance: float  # dynamic
    ride_id: int
    location: Location
    seats: int
    to_uni: bool
    passengers: List[Profile]
    price: float
    description: str

    class Config:
        orm_mode = True


class RidesModelInputDTO(BaseModel):

    name: str
    image: str
    event_time: datetime
    location: Location
    seats: int
    to_uni: bool
    price: float
    description: str
