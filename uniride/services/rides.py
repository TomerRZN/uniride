from fastapi import Depends

from uniride.db.dao.pickup_dao import PickupDAO
from uniride.db.dao.profile_dao import ProfileDAO
from uniride.db.models.ride_model import RideModel


async def enrich_ride(
    ride: RideModel,
    pickup_dao: PickupDAO,
    profile_dao: ProfileDAO,
):

    pickups = await pickup_dao.get_all_pickups_by_ride_id(ride.id)
    seats = ride.seats - len(pickups)
    ride.seats = seats if seats > 0 else 0
    ride.passengers = [pickup.profile_id for pickup in pickups]
    profile = await profile_dao.get_profile_model_by_id(ride.profile_id)
    ride.name = profile.name
    ride.image = profile.image

    return ride
