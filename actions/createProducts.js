function createProducts() {
  odoo.connect(function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Connected to Odoo server.");

    let inParams = [];
    inParams.push({
      name: "producto 500",
      sequence: 1,
      type: "service",
    });

    let params = [];
    params.push(inParams);
    odoo.execute_kw(
      "product.template",
      "create",
      params,
      function (err, value) {
        if (err) {
          return console.log(err);
        }
        console.log("Result: ", value);
      }
    );
  });
}
