const beforeLoginFunctions = []
const prefix = 'LwdOne:'
const validations = { supabaseApiKey: validateSupabaseConnection }
global.LwdOneSession = new Session(['supabaseApiUrl', 'supabaseApiKey'], { beforeLoginFunctions, prefix, validations })

async function login() {
  const supabaseApiUrl = document.querySelector("[name=supabaseApiUrl]").value
  const supabaseApiKey = document.querySelector("[name=supabaseApiKey]").value

  const isValid = await global.LwdOneSession.login({ supabaseApiUrl, supabaseApiKey })

  if (isValid) global.location.reload()
}

async function logout() {
  global.LwdOneSession.logout()
  location.reload();
}


// function loginSupabase() {
//   // this = LwdOneSession, as this function is called inside Session.login
//   return true
// }

async function validateSupabaseConnection(_, { supabaseApiUrl, supabaseApiKey }) {
  // this = LwdOneSession, as this function is called inside Session.isValid
  this.SupabaseApi = new SupabaseApi(supabaseApiUrl, supabaseApiKey)
  global.supa = global.LwdOneSession.SupabaseApi
  return await this.SupabaseApi.read('images').then((images) => images.length > 0)
}

