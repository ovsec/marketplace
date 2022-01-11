import fetch from 'node-fetch'
const tokenURL = 'https://api.instagram.com/oauth/access_token'
const userURL = 'https://graph.instagram.com/me?fields=id,username'

const clientId = import.meta.env.VITE_INSTAGRAM_CLIENT_ID
const secret = import.meta.env.VITE_INSTAGRAM_CLIENT_SECRET


export async function get(req) {
  
  const code = req.url.searchParams.get('code')
  
  const accessToken = await getAccessToken(code)
  console.log(accessToken)
  const user = await getUser(accessToken)
  console.log(user)
  // this mutates the locals object on the request
  // and will be read by the hooks/handle function
  // after the resolve
  req.locals.user = user.login

  return {
    status: 302,
    headers: {
      location: '/'
    }
  }
}

async function getAccessToken(code) {
  
  const r = await fetch(tokenURL, {
    method: 'POST',
    
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: secret,
      grant_type: 'authorization_code',
      redirect_uri: 'https://feeble-cord.surge.sh/auth/instagram/callback/',
      code
    })
  })
  //console.log(r.error_message)
  const r_1 = await r.json()
  return r_1.access_token 
}

async function getUser(accessToken) {
  const r = await fetch(userURL+`&access_token=${accessToken}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    
  })
  return r.json()
}