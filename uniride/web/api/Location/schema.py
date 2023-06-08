import datetime
import uuid

from pydantic import BaseModel


class DummyModelDTO(BaseModel):
    """
    DTO for dummy models.

    It returned when accessing dummy models from the API.
    """

    latitude: float
    longitude: float


class Config:
        orm_mode = True


class DummyModelInputDTO(BaseModel):
    """DTO for creating new dummy model."""

    latitude: float
    longitude: float
