/**
 * Authenticate using OAuth2.0
 * @param {string} clientId - OAuth client ID
 * @param {string} clientSecret - OAuth client secret
 */
export const authenticate = (clientId, clientSecret) => {
  if (!clientId || !clientSecret) {
    throw new Error('Client ID and Client Secret are required');
  }
  return { clientId, clientSecret };
};