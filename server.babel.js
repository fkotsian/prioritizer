const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use('/', express.static(path.join(__dirname, './')));

app.listen(app.get('port'), function() {
  console.log('Server started on port : ' + app.get('port'));
});
