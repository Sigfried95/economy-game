import { Router, Request, Response } from 'express'

import AdminRouter from './routes/admin';
import AuthRouter from './routes/auth';
import DataRouter from './routes/data';
import GameRouter from './routes/game';

const ApiRouter = Router();

ApiRouter.use('/auth',  AuthRouter);
ApiRouter.use('/admin', AdminRouter);
ApiRouter.use('/data',  DataRouter);
ApiRouter.use('/game',  GameRouter);

ApiRouter.all('/*', (req : Request, res: Response) => {
    res.status(404).json({code:404, msg: 'Ruta API no reconocida.'});
});

export default ApiRouter;
