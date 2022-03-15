import SecureLS from 'secure-ls'
import VuexPersister from 'vuex-persister'
const SecureLocalStorage = new SecureLS({ encodingType: 'aes' })

export default ({ store }) => {
  new VuexPersister({
    storage: {
      getItem: (key) => SecureLocalStorage.get(key),
      setItem: (key, value) => SecureLocalStorage.set(key, value),
      removeItem: (key) => SecureLocalStorage.remove(key),
      length: SecureLocalStorage.getAllKeys().length,
      clear: () => SecureLocalStorage.clear(),
      key: (key) => null
    }
  }).persist(store)
}
