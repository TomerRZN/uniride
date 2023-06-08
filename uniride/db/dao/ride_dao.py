
from fastapi import Depends

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from uniride.db.dependencies import get_db_session
from uniride.db.models.ride_model import RideModel


class RideDAO:
    """Class for accessing ride table."""

    def __init__(self, session: AsyncSession = Depends(get_db_session)):
        self.session = session

    async def create_ride_model(self, **kwargs) -> None:
        """
        Add single ride to session.

        :param name: name of a ride.
        """
        self.session.add(RideModel(**kwargs))

    async def get_ride_model_by_id(
        self,
        id: int,
    ) -> RideModel:
        """
        Get specific dummy model.

        :param id: id of ride instance.
        :return: ride models.
        """
        query = select(RideModel)
        query = query.where(RideModel.id == id)
        rows = await self.session.execute(query)
        return rows.scalars().first()
