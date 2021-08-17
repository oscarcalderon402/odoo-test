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
//     if (err) { return console.log(err); }
//     console.log('Connected to Odoo server.');
//     var inParams = [];
//     inParams.push([[1, '=', 1]]);
//     var params = [];
//     params.push(inParams);

//     // 1- Login
//     odoo.connect(function (err) {
//         if (err) { return console.log(err); }
//         console.log('Connected to Odoo server.');
//     });

//     // 4- Read
//     odoo.execute_kw('account.move', 'search', params, function (err, value) {
//         if (err) { return console.log(err); }
//         console.log("yo" , value)
//         var inParams = [];
//         inParams.push(value); //ids
//         inParams.push(['name']);
//         var params = [];
//         params.push(inParams);

//         odoo.execute_kw('account.move', 'read', params, function (err2, value2) {
//             if (err2) { return console.log(err2); }
//             console.log('Result: ', value2);
//         });
//     });
// });

//CREAR FACTURA
// odoo.connect(function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('Connected to Odoo server.');
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

//   odoo.execute_kw('account.move', 'create', params, function (err, invoiceID) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log('Result: ', invoiceID);
//     let inParams = [];
//     inParams.push({
//       move_name: 'factura test',
//       move_id: invoiceID,
//       date: '2021-08-15',
//       parent_state: 'draft',
//       // invoice_date_due: '2021-08-20',
//       name: 'cuota',
//       quantity: 1,
//       price_unit: 100,
//       credit: 100,
//       //debit: 0,
//       //balance: -100,
//       currency_id: 74,
//       journal_id: 2,
//       company_id: 1,
//       company_currency_id: 74,
//       account_id: 159,
//       sequence: 10,
//     });
//     let params = [];
//     params.push(inParams);
//     odoo.execute_kw(
//       'account.move.line',
//       'create',
//       params,
//       function (err, value) {
//         if (err) {
//           return console.log(err);
//         }
//         console.log('Result: ', value);
//       }
//     );
//   });
// });

//CREAR PAGO
// odoo.connect(function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('Connected to Odoo server.');
//   let inParams = [];
//   inParams.push({
//     move_id: 19,
//     is_reconciled: true,
//     is_matched: false,
//     is_internal_transfer: false,
//     payment_method_id: 1,
//     amount: 50,
//     payment_type: 'inbound',
//     partner_type: 'customer',
//     currency_id: 74,
//     destination_account_id: 9,
//     partner_id: 10,
//   });
//   let params = [];
//   params.push(inParams);

//   odoo.execute_kw(
//     'account.payment',
//     'create',
//     params,
//     function (err, invoiceID) {
//       if (err) {
//         return console.log(err);
//       }
//       console.log('Result: ', invoiceID);
//     }
//   );
// });

odoo.connect(function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('Connected to Odoo server.');
  let inParams = [];
  inParams.push({
    name: 'pago',
    state: 'draft',
    posted_before: true,
    move_type: 'entry',
    journal_id: 14,
    partner_id: 10,
    commercial_partner_id: 10,
    is_move_sent: false,
    // payment_id
    amount_untaxed: 0,
    amount_tax: 0,
    amount_total: 25,
    amount_total_signed: 25,
  });
  let params = [];
  params.push(inParams);

  odoo.execute_kw('account.move', 'create', params, function (err, invoiceID) {
    if (err) {
      return console.log(err);
    }
    console.log('Result: ', invoiceID);
  });
});

//CREAR REVERSO DE PAGO
