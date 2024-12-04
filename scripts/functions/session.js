async function login() {
  const baseApiUrl = document.querySelector("[name=baseApiUrl]").value
  const apiKey = document.querySelector("[name=apiKey]").value

  console.log('session#login:5', baseApiUrl, apiKey)

  window.LwdOneApi = new SupabaseApi(baseApiUrl, apiKey)
  console.log('session#login:8', 'LwdOneApi', new SupabaseApi(baseApiUrl, apiKey))
}
async function logout() {
  localStorage.clear();
  location.reload();
}
