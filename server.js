const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`\nApp is running and listening on port: ${PORT}!\n`);
});
