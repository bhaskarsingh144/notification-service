import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Notification System UP and Running`);
});
