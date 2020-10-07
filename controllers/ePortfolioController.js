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
    return res.end();
  }
  return;
};

const createPage = async (req, res) => {
  console.log(req.body);
  let { email, folioId, templateId } = req.body;
  try {
    console.log(email);
    await db.query(
      `INSERT INTO Pages (FolioID, TemplateID) VALUES ("${folioId}", "${templateId}")`,
      async function(err, result) {
        if (err) {
          console.log("---creat EP page ERROR---");
          console.log(err);
          return res.status(200).send({ message: "failed to create EP page" });
        } else {
          console.log("---RESULT---");
          console.log(result);
          res.status(200).send({ message: "create EP page success" }); // should return this page id
          return res.end();
        }
      }
    );
  } catch (err) {
    console.log("---creat EP page ERROR---");
    console.log(err);
    return res.end();
  }
  return;
};

function emptyPage(pageId, callback) {
  var sql = `SELECT Count(*) count FROM Contents WHERE PageID = "${pageId}"`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result[0].count);
    if (result[0].count == 0) {
      return callback(true);
    }else {
      return callback(false);
    }
  })
}

const savePage = async (req, res) => { 
    let { email, folioId, pageId, templateId, content} = req.body;
    console.log(email);
    console.log(folioId);
    console.log(pageId);
    console.log(templateId);
    console.log(content);
    try {
      if (templateId == "1") {
        
        emptyPage(pageId, async (isEmpty) => {
          if (isEmpty) {
            await db.query(
              `INSERT INTO Contents (PageID, FolioID, Content) VALUES ("${pageId}", "${folioId}", "${content[0]}")`, (err, result) => {
                if (err) {
                  console.log("---save EP page ERROR---");
                  console.log(err);
                  return res.status(200).send({ message: "failed to save EP page" });
                } else {
                  console.log("---RESULT---");
                  console.log(result);
                }
              }
            );
    
            await db.query(
              `INSERT INTO Contents (PageID, FolioID, Content) VALUES ("${pageId}", "${folioId}", "${content[1]}")`, (err, result) => {
                if (err) {
                  console.log("---save EP page ERROR---");
                  console.log(err);
                  return res.status(200).send({ message: "failed to save EP page" });
                } else {
                  console.log("---RESULT---");
                  console.log(result);
                }
              }
            )

            res.status(200).send({ message: "save EP page success" });
            return res.end(); // should using promise here, fix it next time
          } else {
            console.log("not empty, should using update");
            return res.end();
          }
        })
      } else {
        console.log("-wrong template id");
        return res.end();
      }
    } catch (e) {

        console.log("===SAVE PAGe ERROR ===")
        console.log(e)
        return res.end();
    }
}

const getEportfolios = async (req, res) => {
  var email = req.params.email;
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
  return;
};

const getEportfolio = async (req, res) => {
  console.log(req.body);
  let { email, folioId } = req.body;
  try {
    console.log(email);
    console.log(folioId);

    await db.query(
      `SELECT FolioName, PageID
            FROM Eportfolios
            JOIN Pages ON Eportfolios.FolioID=Pages.FolioID
            AND Pages.FolioID="${folioId}" ORDER BY PageID ASC`,
      async function(err, result) {
        if (err) {
          console.log("---get EP ERROR---");
          console.log(err);
          return res.end();
        }
        console.log("==get folio result==");
        console.log(result);
        res.status(200).send(result);
        return res.end();
      }
    );
  } catch (err) {
    console.log("---get EP ERROR---");
    console.log(err);
    return res.end();
  }

  return;
};

const getPage = async(req, res) => {
  console.log(req.body);
  let { email, folioId, pageId } = req.body;
  try {
    console.log(email);
    console.log(folioId);
    console.log(pageId);
    await db.query(
      `SELECT Content, TemplateID
            FROM Pages
            JOIN Contents ON Pages.PageID=Contents.PageID
            AND Contents.PageID="${pageId}"`,
      async function(err, result) {
        if (err) {
          console.log("---get page ERROR---");
          console.log(err);
          return res.end();
        }
        console.log("==get page result==");
        console.log(result);
        res.status(200).send(result);
        return res.end();
      }
    );
  } catch (err) {
    console.log("---get page ERROR---");
    console.log(err);
    return res.end();
  }

  return;
}

//26/09/2020 Column Name need to add to database and new req variable need to add
const renameFolio = async (req, res) => {
  let { email, folioId, newName } = req.body;
  try {
    console.log(email);
    console.log(folioId);
    await db.query(
      `UPDATE Eportfolios
            SET FolioName = "${newName}"
            WHERE FolioID="${folioId}"`,
      async function(err, result) {
        if (err) {
          console.log("---get EP ERROR---");
          console.log(err);
          return res.end();
        }
        console.log("==Rename Success==")
        console.log(result);
        return res.end();
      }
    );
  }
  catch (e) {
    console.log("==Rename Error==");
      console.log(e);
      return res.end();
  }
  return res.end();
};

// back door
const hackep = async (req, res) => {
  await db.query(
    `SELECT FolioId, FolioName, Visibility, Layout, LastModified FROM Eportfolios`,
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
  createPage,
  savePage,
  getPage,
  getEportfolio,
  getEportfolios,
  renameFolio,
  hackep
};
