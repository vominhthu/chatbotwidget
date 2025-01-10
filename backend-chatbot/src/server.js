import express from 'express';
import session from 'express-session';
import cors from 'cors';

// Import configurations
import { corsOptions } from '~/config/cors';
import { sessionConfig } from '~/config/session';

// Import routes
import API_V1 from '~/routes/v1';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use(cors(corsOptions));

app.use('/api/v1', API_V1);

export default app;