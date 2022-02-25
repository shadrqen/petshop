export default {
  emailRule: [
    (v: string) => !!v || 'Email is required',
    (v: string) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
  ],
  passwordRule: [
    (v: string) => !!v || 'Password is required',
    (v: string) => (v && v.length >= 8) || 'The password must be at least 8 characters.'
  ],
  firstNameRule: [
    (v: string) => !!v || 'First name is required'
  ],
  lastNameRule: [
    (v: string) => !!v || 'Last name is required'
  ]
}
