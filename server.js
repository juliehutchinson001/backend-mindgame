// dependencies to create the backend server
const app = require('./app');
const { connectMongoose } = require('./database/mongoose-config');

connectMongoose();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));
