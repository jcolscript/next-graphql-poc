import { Provider } from 'urql'
import { client, ssrCache } from '../shared/services/urql'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }
  
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
