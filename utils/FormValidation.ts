export default {
  emailRule: [
    (v: any) => !!v || 'Email is required',
    (v: any) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
  ],
  passwordRule: [
    (v: any) => !!v || 'Password is required'
  ],
  confirmPasswordRule: [
    (v: any) => !!v || 'Password confirmation is required'
  ],
  firstNameRule: [
    (v: any) => !!v || 'First name is required'
  ],
  lastNameRule: [
    (v: any) => !!v || 'Last name is required'
  ]
}
