import * as express from 'express';

const app = express();
const port = process.env.port || '5000';

app.use(express.json());

app.get('/', (req, res) => res.send({message: 'ok'}));

app.get('/echo', (req, res) => res.send({echo: 'echo!'}));

app.listen(port, () => console.log(`App is listening on port ${port}`));
