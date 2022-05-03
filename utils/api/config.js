export const DOMAIN = 'https://identitytoolkit.googleapis.com'
export const DOMAIN_REFRESH = 'https://securetoken.googleapis.com/v1/token?key='
export const version = 'v1'
export const API_KEY = 'AIzaSyA3JNrobkyWUjoHwlDlZHToS5fxJYpi92Q'
export const END_POINT = `${DOMAIN}/${version}`
export const END_POINT_REFRESH = DOMAIN_REFRESH + API_KEY

//Sign up , Sign in
export const signupUrl = `${END_POINT}/accounts:signUp?key=${API_KEY}`
export const signinUrl = `${END_POINT}/accounts:signInWithPassword?key=${API_KEY}`
