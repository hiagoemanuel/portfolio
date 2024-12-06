-- CreateTable
CREATE TABLE "about_me" (
    "id" SERIAL NOT NULL,
    "resume" VARCHAR(240) NOT NULL,
    "description" VARCHAR(380) NOT NULL,
    "profile_picture" TEXT,

    CONSTRAINT "about_me_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_email" (
    "email" VARCHAR(70) NOT NULL,

    CONSTRAINT "contact_email_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "featured_project" (
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "featured_project_pkey" PRIMARY KEY ("project_id")
);

-- CreateTable
CREATE TABLE "featured_technology" (
    "technology_id" INTEGER NOT NULL,

    CONSTRAINT "featured_technology_pkey" PRIMARY KEY ("technology_id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(20) NOT NULL,
    "description" VARCHAR(160),
    "url_repository" TEXT NOT NULL,
    "url_view" TEXT NOT NULL,
    "thumbnail" TEXT,
    "index" INTEGER NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reference_link" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "url" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "reference_link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "technology" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "icon" TEXT NOT NULL,
    "index" INTEGER NOT NULL,

    CONSTRAINT "technology_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "contact" ADD CONSTRAINT "contact_id_fkey" FOREIGN KEY ("id") REFERENCES "reference_link"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "featured_project" ADD CONSTRAINT "featured_project_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "featured_technology" ADD CONSTRAINT "featured_technology_technology_id_fkey" FOREIGN KEY ("technology_id") REFERENCES "technology"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
