const xmlrpc = require('xmlrpc');

// Odoo connection details
const odooUrl = 'http://desktop-u68f0ve.:8069/';
const odooDb = 'odoo_dev';
const odooUsername = 'angel';
const odooPassword = '12345678';

// Odoo API key
const apiKey = 'bb9940f75efcdd18381713942fdd10977bb72ce4';

// Create an XML-RPC client
const odooClient = xmlrpc.createClient({ url: `${odooUrl}/xmlrpc/2/common` });

// Authenticate and get the user ID
odooClient.methodCall('authenticate', [odooDb, odooUsername, odooPassword, {}], (error, uid) => {
  if (error) {
    console.error('Authentication failed:', error);
    return;
  }

  console.log('Authenticated. User ID:', uid);
});