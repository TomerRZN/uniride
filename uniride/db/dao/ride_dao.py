
from fastapi import Depends

from sqlalchemy.ext.asyncio import AsyncSession

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
