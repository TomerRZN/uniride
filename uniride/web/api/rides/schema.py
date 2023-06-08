from pydantic import BaseModel


class RideModelDTO(BaseModel):
    """
    DTO for dummy models.

    It returned when accessing dummy models from the API.
    """
    id: int
    profile_id: int
    name: str
    image: str
    event_time: str
    location: str
    seats: int
    to_uni: bool
    passengers: list[int]
    price: float
    description: str

    class Config:
        orm_mode = True


class RideModelInputDTO(BaseModel):
    profile_id: int
    event_time: str
    location: str
    seats: int
    to_uni: bool
    price: float
    description: str
