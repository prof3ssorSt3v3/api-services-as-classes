import express from 'express';
import cors from 'cors';
import itemRouter from './src/routes/items.js';

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/api/items', itemRouter);

app.use((req, res) => {
  res.status(404).send('Four-oh-Four');
});

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log(`Listening on port ${PORT}`);
});
