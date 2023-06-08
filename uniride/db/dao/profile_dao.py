
from fastapi import Depends

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from uniride.db.dependencies import get_db_session
from uniride.db.models.profile_model import ProfileModel


class ProfileDAO:
    """Class for accessing profile table."""

    def __init__(self, session: AsyncSession = Depends(get_db_session)):
        self.session = session


    async def get_profile_model_by_id(
        self,
        id: int,
    ) -> ProfileModel:
        """
        Get specific dummy model.

        :param id: id of ride instance.
        :return: ride models.
        """
        query = select(ProfileModel)
        query = query.where(ProfileModel.id == id)
        rows = await self.session.execute(query)
        return rows.scalars().first()
