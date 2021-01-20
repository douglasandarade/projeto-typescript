import express from 'express';
import { helloWorld } from './routes';

const app = express();

app.get('/api', helloWorld);

app.listen(3001);

