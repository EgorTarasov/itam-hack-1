from pydantic import Field
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    postgres_user: str = Field(..., env="POSTGRES_USER")
    postgres_password: str = Field(..., env="POSTGRES_PASSWORD")
    postgres_host: str = Field("localhost", env="POSTGRES_HOST")
    postgres_port: int = Field(5432, env="POSTGRES_PORT")
    postgres_db: str = Field(..., env="POSTGRES_DB")

    access_token_expire_minutes: int = Field(
        60 * 60 * 24,
        description="Access token expire time",
        alias="ACCESS_TOKEN_EXPIRE_MINUTES",
    )

    secret_key: str = Field(..., alias="SECRET_KEY")
    algorithm: str = Field("HS256", alias="ALGORITHM")


settings = Settings(_env_file=".env")
