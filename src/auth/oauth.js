import { authenticate } from '../shared/utils';

export const authenticateUser = (clientId, clientSecret) => authenticate(clientId, clientSecret);