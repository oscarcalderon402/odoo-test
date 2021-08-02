const Odoo = require("odoo-xmlrpc");
const config = require("./config/settings.json");

const odoo = new Odoo({
  url: config.url,
  port: config.port,
  db: config.db,
  username: config.username,
  password: config.password,
});
odoo.connect(function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("Connected to Odoo server.");
  let inParams = [];
  inParams.push([[1, "=", 1]]);
  let params = [];
  params.push(inParams);

  // 1- Login
  odoo.connect(function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Connected to Odoo server.");
  });

  // 4- Read
  odoo.execute_kw("account.move", "search", params, function (err, value) {
    if (err) {
      return console.log(err);
    }
    console.log(value);
    var inParams = [];
    inParams.push(value); //ids
    inParams.push([]);
    var params = [];
    params.push(inParams);

    odoo.execute_kw("account.move", "read", params, function (err2, value2) {
      if (err2) {
        return console.log(err2);
      }
      console.log("Result: ", value2);
    });
  });
});
