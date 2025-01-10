import express from 'express';
import { StatusCodes } from 'http-status-codes';
import chatRoutes from '~/routes/v1/chatRoutes';

const Router = express.Router();

Router.get('/healthz', (_req, res) => {
    res.status(StatusCodes.OK).json({ message: 'APIs V1 are ready to use '})
})

Router.use('/chat', chatRoutes);

export default Router;
