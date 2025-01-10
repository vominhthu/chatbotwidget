import { WHILTELIST_DOMAINS } from '~/utils/constants';

export const corsOptions = {
    origin: function (origin, callback) {
        if (WHILTELIST_DOMAINS.includes(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
};
