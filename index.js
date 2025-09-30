import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!',
    service : "Hello node ",
    pod:process.env.POD_NAME || "unknown",
    time: new Date().toISOString(),

   });
});

app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

app.get('/ready', (req, res) => {
  res.status(200).send('Ready');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
