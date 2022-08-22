import * as express from 'express';

const app = express();
const port = process.env.port || '5000';

app.listen(port, () => console.log(`App is listening on port ${port}`));
