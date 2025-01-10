import express from 'express';
import session from 'express-session';
import cors from 'cors';
import environment from '~/config/environment';
import { corsOptions } from '~/config/cors';
import { sessionConfig } from '~/config/session';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use(cors(corsOptions));

const { APP_HOST, APP_PORT } = environment;

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello world"
    })
});

app.listen(APP_PORT, APP_HOST, () => {
    console.log(`Server is running at ${APP_HOST}:${APP_PORT}`);
});
