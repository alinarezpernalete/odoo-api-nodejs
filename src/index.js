const Odoo = require('odoo-xmlrpc');

const odoo = new Odoo({
    url: 'http://desktop-u68f0ve./',
    port: 8069,
    db: 'odoo_dev',
    user: 'angel',
    pw: 'bb9940f75efcdd18381713942fdd10977bb72ce4'
});

odoo.connect(function (err) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([['active', '=', true]]);
    var params = [];
    params.push(inParams);

    // 1- Login
    odoo.connect(function (err) {
        if (err) { return console.log(err); }
        console.log('Connected to Odoo server.');    
    });
    
    // 4- Read
    // odoo.execute_kw('res.partner', 'search', params, function (err, value) {
    //     if (err) { return console.log(err); }
    //     var inParams = [];
    //     inParams.push(value); //ids
    //     inParams.push(['name', 'website', 'email', 'lang']);
    //     var params = [];
    //     params.push(inParams);
        
    //     odoo.execute_kw('res.partner', 'read', params, function (err2, value2) {
    //         if (err2) { return console.log(err2); }
    //         console.log('Result: ', value2);
    //     });
    // });    
});