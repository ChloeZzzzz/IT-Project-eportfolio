const db = require("../config/database.js");
const DATE_FORMATER = require("dateformat");

const createEPortfolio = async (req, res) => {
  console.log(req.body);
  let { email, folioName, visibility, layout } = req.body;
  try {
    console.log(email);
    console.log(layout);
    var now = DATE_FORMATER(new Date(), "yyyy-mm-dd");
    await db.query(
      `INSERT INTO Eportfolios (Email, FolioName, Visibility, Layout, LastModified) VALUES ("${email}", "${folioName}", "${visibility}", "${layout}", "${now}")`,
      async function(err, result) {
        if (err) {
          console.log("---creat EP ERROR---");
          console.log(err);
          return res.status(200).send({ message: "failed to create EP" });
        }
        console.log("---RESULT---");
        console.log(result);
        res.status(200).send({ message: "create EP success" });
        return res.end();
      }
    );
  } catch (err) {
    console.log("---creat EP ERROR---");
    console.log(err);
    return;
  }
  return;
};

const getEortfolios = async (req, res) => {

  console.log(req.session);
  var email = req.session.email;
  console.log(email);

  await db.query(
    `SELECT FolioName, Visibility, Layout, LastModified FROM Eportfolios WHERE Email = "${email}"`,
    async function(err, result) {
      if (err) {
        console.log("---db ERROR---");
        console.log(err);
        return res
          .status(200)
          .send({ message: "failed to fetch eportfolios of current user" });
      }
      console.log("---RESULT---");
      console.log(result);
      res.status(200).send(result);
      return res.end();
    }
  );
};

const getEPortfolio = async (req, res) => {
  console.log(req.body);
  let { email, folioId } = req.body;
  try {
    console.log(email);
    console.log(folioId);

    await db.query(
      `SELECT *
            FROM Contents
            LEFT JOIN SourceText ON Contents.SourceID=SourceText.TextID
            LEFT JOIN SourceImage ON Contents.SourceID=SourceImage.ImageID
            WHERE FolioID="${folioId}" ORDER BY PageID ASC;`,
      async function(err, result) {
        if (err) {
          console.log("---get EP ERROR---");
          console.log(err);
          return;
        }
      }
    );
  } catch (err) {
    console.log("---get EP ERROR---");
    console.log(err);
    return;
  }

  return;
};
//26/09/2020 Column Name need to add to database and new req variable need to add
const renameEportfolio = async (req, res) => {
  console.log(req.body);
  let { email, folioId, newName } = req.body;
  try {
    console.log(email);
    console.log(folioId);
    await db.query(
      `UPDATE E-portfolios
            SET Name = "${newName}"
            WHERE FolioID="${folioId}" ;`,
      async function(err, result) {
        if (err) {
          console.log("---get EP ERROR---");
          console.log(err);
          return;
        }
      }
    );

    await dp.query(
      `SELECT FolioID, Name FROM E-portfolios WHERE Name = "${newName}" ;`,
      async function(err, result) {
        if (err) {
          console.log("---verify EP creation ERROR---");
          console.log(err);
          return;
        }
        console.log(result[0].FolioID);

        res.message("rename success");
        res.message("name:", result[0].Name);
      }
    );
  } catch (err) {
    console.log("---get EP ERROR---");
    console.log(err);
    return;
  }

  return;
};

// back door
const hackep = async (req, res) => {
  await db.query(
    `SELECT FolioName, Visibility, Layout, LastModified FROM Eportfolios`,
    (err, result) => {
      if (err) {
        console.log("===err===");
        console.log(err);
      }
      console.log(result);
      res.send(result);
      return res.end();
    }
  );
};

module.exports = {
  createEPortfolio,
  getEPortfolio,
  getEortfolios,
  renameEportfolio,
  hackep
};
