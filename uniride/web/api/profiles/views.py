from fastapi import APIRouter
from fastapi.param_functions import Depends

from uniride.db.dao.profile_dao import ProfileDAO
from uniride.db.models.profile_model import ProfileModel
from uniride.services.profiles import enrich_profile
from uniride.web.api.profiles.schema import ProfileModelDTO
from fastapi.exceptions import HTTPException

router = APIRouter()


@router.get("/profile/{id}", response_model=ProfileModelDTO)
async def get_profile_by_id(
    id: int,
    profile_dao: ProfileDAO = Depends()
) -> ProfileModel:
    """
    Create profile by id

    :param id: id of the profile
    :param ride_dao: DAO for profile models.
    :return: return profile object
    """
    profile = await profile_dao.get_profile_model_by_id(id)
    if not profile:
        raise HTTPException(404)

    profile = enrich_profile(profile)
    return profile
