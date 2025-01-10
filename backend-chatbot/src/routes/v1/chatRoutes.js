import express from 'express';
import { init, getMessage } from '~/controllers/chatController.js';

const Router = express.Router();

Router.route('/')
    .get(init)
    .post(getMessage)

export default Router;