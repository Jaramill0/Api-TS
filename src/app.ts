import express, { Request, Response } from 'express';

const app = express();

app.get('/hello', (req: Request, res: Response) => {
    res.send({ message: "Hello World" });
});

app.listen(3000, () => console.log('App listening on PORT 3000'));