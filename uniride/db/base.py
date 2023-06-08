from sqlalchemy.orm import DeclarativeBase

from uniride.db.meta import meta


class Base(DeclarativeBase):
    """Base for all models."""

    metadata = meta
