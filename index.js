import express from 'express';
import client from 'prom-client';
const app = express();
const port = 3000;

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({timeout: 5000});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});
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
