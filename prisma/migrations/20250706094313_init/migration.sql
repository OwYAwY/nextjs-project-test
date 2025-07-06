-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "tg_id" BIGINT NOT NULL DEFAULT -1,
    "tg_nick" VARCHAR(255),
    "name" VARCHAR(255),
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
