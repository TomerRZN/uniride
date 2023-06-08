from sqlalchemy.orm import Mapped, mapped_column

from uniride.db.base import Base


class ProfileModel(Base):
    __tablename__ = "Profile"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column()
    education: Mapped[str] = mapped_column()
    bio: Mapped[str] = mapped_column()
    gender: Mapped[str] = mapped_column()
    age: Mapped[int] = mapped_column()
    image: Mapped[str] = mapped_column()
    score: Mapped[float] = mapped_column()
