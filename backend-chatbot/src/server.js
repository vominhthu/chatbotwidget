import express from 'express';
import environment from '~/config/environment';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { APP_HOST, APP_PORT } = environment;

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello world"
    })
});

app.listen(APP_PORT, APP_HOST, () => {
    console.log(`Server is running at ${APP_HOST}:${APP_PORT}`);
});
