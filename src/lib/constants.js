export const oauth_providers = {
    instagram : {
        authUrl : (clientId, callbackUrl, scope, responseType) => `https://api.instagram.com/oauth/authorize/?app_id=${clientId}&redirect_uri=${callbackUrl}&scope=${scope}&response_type=${responseType}`,
    },
    facebook : {

    },

}