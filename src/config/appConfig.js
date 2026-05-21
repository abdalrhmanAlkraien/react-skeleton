const appConfig = {
  // Login field — choose one: 'email' | 'username' | 'phone'
  loginIdentifier: 'username',

  // Map your backend response keys here
  auth: {
    tokenKey:   'token',
    userKey:    'user',
    messageKey: 'message',
  }
}

export default appConfig