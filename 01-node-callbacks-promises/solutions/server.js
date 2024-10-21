import express from 'express';

const arrayItems = [
  {
    id: 1,
    content: 'Item 1'
  }
];
const PORT = 3001;

export const app = express();

app.use(express.json());

app.get('/items', (req, res) => {
  return res.json(arrayItems);
});

app.get('/items/:id', (req, res) => {
  const { id } = req.params;
  const itemFound = arrayItems.find((item) => item.id === id);

  return res.json(itemFound);
});

app.post('/items', (req, res) => {
  const body = req.body;

  const newObject = {
    id: crypto.randomUUID(),
    content: body.content
  };

  arrayItems.push(newObject);

  return res.json(newObject);
});

app.delete('/items/:id', (req, res) => {
  const id = req.params.id;

  const itemIndex = arrayItems.findIndex((item) => item.id === id);

  if (itemIndex === -1) {
    return res.status(404).end();
  }

  arrayItems.splice(itemIndex, 1);
  return res.json();
});

export const server = app.listen(PORT, () => {
  console.log(`Server listening on PORT: http://localhost:${PORT}`);
});
