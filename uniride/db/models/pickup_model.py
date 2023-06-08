from sqlalchemy.orm import Mapped, mapped_column

from uniride.db.base import Base


class PickupModel(Base):
    __tablename__ = "Pickup"
    ride_id: Mapped[str] = mapped_column(primary_key=True)
    profile_id: Mapped[str] = mapped_column(primary_key=True)
