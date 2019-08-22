const app = require('./app/index');
require('./db/index');

const PORT = process.env.PORT || 3000;

app.listen(() => console.log(`Server listening on PORT ${PORT}`), PORT);
