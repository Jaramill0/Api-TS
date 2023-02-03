import express, { Request, Response } from 'express';

const app = express();

app.get('/hello', (_req: Request, res: Response) => {
    res.send({ message: "Hello World" });
});
const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('Someone pinged here!!' + new Date().toLocaleDateString())
    res.send('pong')
})
app.use(express.json()) //middleware que trasforma la req.body a un json

app.listen(PORT, () => {
    console.log(`Server Run on port ${PORT}`);
});