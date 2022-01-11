//  Login endpoint

import { oauth_providers } from "$lib/constants"

const clientId = import.meta.env.VITE_INSTAGRAM_CLIENT_ID
const secret = import.meta.env.VITE_INSTAGRAM_CLIENT_SECRET

export async function get(req) {
  const sessionId = '1234'
  //  Redirect request to GitHub authentication endpoint with CLIENT_ID
  return {
    status: 302,
    headers: {
      location: oauth_providers.instagram.authUrl(clientId, 'https://feeble-cord.surge.sh/auth/instagram/callback/', 'user_profile,user_media', 'code', )
    }
  }
}