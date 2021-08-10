const Odoo = require('odoo-xmlrpc');
const config = require('./config/settings.json');

const odoo = new Odoo({
  url: config.url,
  port: config.port,
  db: config.db,
  username: config.username,
  password: config.password,
});
// odoo.connect(function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('Connected to Odoo server.');
//   // let inParams = [];
//   // inParams.push([[1, "=", 1]]);
//   // let params = [];
//   // params.push(inParams);

//   // // 1- Login
//   // odoo.connect(function (err) {
//   //   if (err) {
//   //     return console.log(err);
//   //   }
//   //   console.log("Connected to Odoo server.");
//   // });

//   // // 4- Read
//   // odoo.execute_kw("account.move", "search", params, function (err, value) {
//   //   if (err) {
//   //     return console.log(err);
//   //   }
//   //   console.log(value);
//   //   var inParams = [];
//   //   inParams.push(value); //ids
//   //   inParams.push([]);
//   //   var params = [];
//   //   params.push(inParams);

//   //   odoo.execute_kw("account.move", "read", params, function (err2, value2) {
//   //     if (err2) {
//   //       return console.log(err2);
//   //     }
//   //     console.log("Result: ", value2);
//   //   });
//   // });
//   let inParams = [];
//   inParams.push({
//     name: 'factura test',
//     payment_state: 'not_paid',
//     move_type: 'out_invoice',
//     invoice_date: '2021-08-15',
//     invoice_date_due: '2021-08-15',
//     // invoice_payment_term_id: 11,
//     // amount_untaxed: 500,
//     // amount_tax: 500 * 0.24,
//     partner_id: 10,
//   });
//   let params = [];
//   params.push(inParams);
//   odoo.execute_kw('account.move', 'create', params, function (err, value) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log('Result: ', value);
//   });
// });

// odoo.connect(function (err) {
//   if (err) {
//     return console.log(err);
//   }

//   var inParams = [];
//   inParams.push([3, 4, 5]); //id to delete
//   var params = [];
//   params.push(inParams);
//   odoo.execute_kw("account.move", "unlink", params, function (err, value) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Result: ", value);
//   });
// });

odoo.connect(function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('Connected to Odoo server.');
  // let inParams = [];
  // inParams.push([[1, "=", 1]]);
  // let params = [];
  // params.push(inParams);

  // // 1- Login
  // odoo.connect(function (err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("Connected to Odoo server.");
  // });

  // // 4- Read
  // odoo.execute_kw("account.move", "search", params, function (err, value) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log(value);
  //   var inParams = [];
  //   inParams.push(value); //ids
  //   inParams.push([]);
  //   var params = [];
  //   params.push(inParams);

  //   odoo.execute_kw("account.move", "read", params, function (err2, value2) {
  //     if (err2) {
  //       return console.log(err2);
  //     }
  //     console.log("Result: ", value2);
  //   });
  // });
  let inParams = [];
  inParams.push({
    move_name: 'factura test',
    move_id: 13,
    date: '2021-08-15',
    parent_state: 'draft',
    // invoice_date_due: '2021-08-20',
    name: 'cuota',
    quantity: 1,
    //price_unit: 100,
    //credit: 100,
    //debit: 0,
    //balance: -100,
    currency_id: 74,
    journal_id: 2,
    company_id: 1,
    company_currency_id: 74,
    account_id: 159,
    sequence: 10,
  });
  let params = [];
  params.push(inParams);
  odoo.execute_kw('account.move.line', 'create', params, function (err, value) {
    if (err) {
      return console.log(err);
    }
    console.log('Result: ', value);
  });
});
