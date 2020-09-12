USE Folihub;
/*
CREATE TABLE Users
(
	Email VARCHAR(345) NOT NULL UNIQUE,
    userPasword VARCHAR(16) NOT NULL,
    PRIMARY KEY (Email)
);


CREATE TABLE Eportfolios
(
	FolioID INT NOT NULL UNIQUE,
    Email VARCHAR(345) NOT NULL UNIQUE,
    FOREIGN KEY  (Email) REFERENCES Users (Email),
    PRIMARY KEY (FolioID)
);

CREATE TABLE Templates
(
	TemplateID INT NOT NULL UNIQUE,
    MarginTop DECIMAL(4, 1),
    MarginLeft DECIMAL(4, 1),
    MarginBtm DECIMAL(4, 1),
    MarginRight DECIMAL(4, 1),
    BlockNum INT NOT NULL,
    PRIMARY KEY (TemplateID)
);


CREATE TABLE Pages
(
	PageID INT NOT NULL,
    FolioID INT NOT NULL UNIQUE,
    TemplateID INT NOt NULL UNIQUE,
    FOREIGN KEY (FolioID) REFERENCES Eportfolios (FolioID),
    FOREIGN KEY (TemplateID) REFERENCES Templates (TemplateID),
    PRIMARY KEY (PageID)
);

CREATE TABLE Contents
(
	ContentID INT NOT NULL,
    PageID INT NOT NULL,
    FolioID INT NOT NULL UNIQUE,
    ContentType ENUM('txt', 'img', 'vid', 'aud') NOT NULL,
    SourceID INT NOT NULL,
    PRIMARY KEY (ContentID),
    FOREIGN KEY (PageID) REFERENCES Pages (PageID),
    FOREIGN KEY (FolioID) REFERENCES Pages (FolioID)
);

CREATE TABLE SourceText
(
	TextID INT NOT NULL UNIQUE,
    FontFam VARCHAR(45),
    FontSize INT,
    Color VARCHAR(45),
    TextContent VARCHAR(400),
    PRIMARY KEY (TextID)
);

CREATE TABLE SourceImage
(
	ImageID INT NOT NULL UNIQUE,
    URL VARCHAR(200) NOT NULL,
    Length DECIMAL(5, 2),
    Width DECIMAL(5, 2),
    Description VARCHAR(45),
    PRIMARY KEY (ImageID)
);
*/

SHOW TAbLES;