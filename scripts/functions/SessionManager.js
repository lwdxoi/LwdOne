function createSession() {
  const beforeLoginFunctions = []
  const prefix = 'LwdOne:'
  const validations = {
    supabaseApiUrl: Session.defaultRequiredValidation,
    supabaseApiKey: Session.defaultRequiredValidation,
    supabaseConnection: validateSupabaseConnection
  }
  return new Session(['supabaseApiUrl', 'supabaseApiKey'], { beforeLoginFunctions, prefix, validations })
}

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
  try {
    const SupabaseApi = new SupabaseApi(supabaseApiUrl, supabaseApiKey)
    isReturning = await this.SupabaseApi.read('images').then((images) => images.length > 0)
    if (isReturning) {
      this.SupabaseApi = SupabaseApi
      global.supa = global.LwdOneSession.SupabaseApi
      return true;
    }
  } catch {
    console.warn('Failed to connect to Supabase')
    return false
  }
}

