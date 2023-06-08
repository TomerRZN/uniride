
from fastapi import Depends

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from uniride.db.dependencies import get_db_session
from uniride.db.models.pickup_model import PickupModel


class PickupDAO:
    """Class for accessing ride table."""

    def __init__(self, session: AsyncSession = Depends(get_db_session)):
        self.session = session

    async def get_all_pickups_by_ride_id(
        self,
        ride_id: int,
    ) -> list[PickupModel]:
        """
        Get specific dummy model.

        :param ride_id: id of ride.
        :return: pickup objects.
        """
        query = select(PickupModel).where(PickupModel.ride_id == ride_id)
        pickups = await self.session.execute(query)
        return list(pickups.scalars().fetchall())

    async def get_all_pickups_by_profile_id(
            self,
            profile_id: int,
        ) -> list[PickupModel]:
            """
            Get specific dummy model.

            :param profile_id: id of profile.
            :return: pickup objects.
            """
            query = select(PickupModel).where(PickupModel.profile_id == profile_id)
            pickups = await self.session.execute(query)
            return list(pickups.scalars().fetchall())
