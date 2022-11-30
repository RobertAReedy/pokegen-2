const sequelize = require("./config/connection");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const session = require("express-session");

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
  secret: process.env.SS,
  cookie: {}, //5 min
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); //links static files
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});