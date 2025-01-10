import server from './server';
import environment from '~/config/environment';

const PORT = environment.APP_PORT || 4000;

server.listen(PORT, () => {
    console.log(`Server is running at :${PORT}`);
});
