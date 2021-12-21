import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from '../config.json';
import { getAllAvailableItems, updateInventory } from './db';

const app: Express = express();

/************************************************************************************
 *                              Basic Express Middlewares
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle logs in console during development
if (process.env.NODE_ENV === 'development' || config.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  app.use(cors());
}


app.get('/ping', (req: express.Request, res:express.Response) => {
  res.status(200).send('Ping');
})

app.get('/available_items', async (req: express.Request, res:express.Response) => {
  const items = await getAllAvailableItems();
  console.log('items', items);
  res.status(200).send(items);
})

app.post('/update_inventory', (req: express.Request, res:express.Response) => {
  updateInventory(req.body.item);
  res.status(200).send('Item updated');
})


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  return res.status(500).json({
    errorName: err.name,
    message: err.message,
    stack: err.stack || 'no stack defined'
  });
});

export default app;