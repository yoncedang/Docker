import express from 'express'
const app = express();
const port = 5050;

app.get('/', (req, res) => {
  res.send('Hello, Docker Auth Services!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
