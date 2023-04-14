const { response } = require("express");
const express = require("express");
const app = express();
require("./db/config");
const User = require("./db/user");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
    
      let user = await User.findOne(req.body);

      if (user) {
        res.send(JSON.stringify(user));
      } else {
        res.send({ result: "No user found" });
      }

    }
  
);
app.listen(5000);
