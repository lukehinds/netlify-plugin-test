const NetlifyAPI = require('netlify')
const client = new NetlifyAPI('')

const authenticate = require('./auth')

function setEnvVars(key, val) {
  if (!process.env[key]) {
    console.log(`Exporting ${key}=${val}.`);
    process.env[key] = val
  }
}

module.exports = {
  onPreBuild: async({
    constants,
    inputs
  }) => {
    const clientId = inputs.clientId || process.env.CLIENT_ID
    const auth = await authenticate(client, clientId)

    const {
      authLink,
      ticket
    } = auth

    console.log(authLink)

    const accessToken = await client.getAccessToken(ticket)
    console.log(accessToken)

    const site = await client.getSite({site_id: constants.SITE_ID})
    console.log(site)
    
    Object.keys(site.build_settings.env).forEach(envVarKey => {
      const envVarVal = site.build_settings.env[envVarKey]
      setEnvVars(envVarKey, envVarVal);
    })
  }
}