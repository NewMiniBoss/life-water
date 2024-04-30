import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 3000;

app.use(express.static('public'));

routes(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});