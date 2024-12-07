//window.LwdOneSession = new Session(['supabaseApiUrl', 'supabaseApiKey'], 'LwdOne:')
console.log(global)
async function login() {
  const supabaseApiUrl = document.querySelector("[name=baseApiUrl]").value
  const supabaseApiKey = document.querySelector("[name=apiKey]").value

  console.log('session#login:5', supabaseApiUrl, supabaseApiKey)

  const isValid = window.LwdOneSession.login({ supabaseApiUrl, supabaseApiKey })

  if (!isValid) return false;

  window.LwdOneSession.SupabaseApi = new SupabaseApi(supabaseApiUrl, supabaseApiKey)


  console.log('session#login:8', 'LwdOneApi', new SupabaseApi(baseApiUrl, apiKey))
  teste = new Session(['supabaseApiUrl'], { prefix: 'teste:', beforeLoginFunctions: [setSupabaseToken] })
  teste.login({ supabaseApiUrl: '12345.com' })

}
async function logout() {
  window.LwdOneSession.logout()
  location.reload();
}


function setSupabaseToken(attributes) {
  attributes['apiToken'] = '11111'
  return true
}

