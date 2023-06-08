from sqlalchemy.orm import Mapped, mapped_column

from uniride.db.base import Base


class RideModel(Base):
    __tablename__ = "Ride"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    profile_id: Mapped[str] = mapped_column()
    event_time: Mapped[str] = mapped_column()
    location: Mapped[str] = mapped_column()
    seats: Mapped[str] = mapped_column()
    to_uni: Mapped[str] = mapped_column()
    price: Mapped[str] = mapped_column()
    description: Mapped[str] = mapped_column()
