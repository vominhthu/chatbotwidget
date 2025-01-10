import server from './server';
import environment from '~/config/environment';

const { APP_HOST, APP_PORT } = environment;

server.listen(APP_PORT, APP_HOST, () => {
    console.log(`Server is running at ${APP_HOST}:${APP_PORT}`);
});
