const jsonwebtoken = require("jsonwebtoken");
const fs = require("fs");
const PUB_KEY = fs.readFileSync(__dirname + "/../id_rsa_pub.pem", "utf8");
const PRIV_KEY = fs.readFileSync(__dirname + "/../id_rsa_priv.pem", "utf8");

function issueJWT(user) {
  const user_id = user.id;

  const expiresIn = "30d";

  const payload = {
    sub: user_id,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: "RS256",
  });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
}

module.exports = {
  issueJWT,
}