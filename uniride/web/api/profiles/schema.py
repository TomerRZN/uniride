from pydantic import BaseModel


class ProfileModelDTO(BaseModel):
    """
    DTO for dummy models.

    It returned when accessing dummy models from the API.
    """
    id: int
    name: str
    education: str
    bio: str
    gender: str
    age: int
    image: str
    score: float
    class Config:
        orm_mode = True


class ProfileModelInputDTO(BaseModel):
    id: int
    name: str
    education: str
    bio: str
    gender: str
    image: str
    score: float
