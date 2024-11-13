import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';
// import * as Sentry from '@sentry/browser';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.scss';
import App from './App';
import './index.scss'

// if (process.env.NODE_ENV === 'production') {
//   Sentry.init({
//     dsn: process.env.REACT_APP_SENTRY_DSN,
//     beforeBreadcrumb(breadcrumb, hint) {
//       return breadcrumb.category === 'ui.click' ? null : breadcrumb;
//     },
//     autoSessionTracking: true,
//     integrations: [new Integrations.BrowserTracing()],
//     tracesSampleRate: 1.0
//   });
// }


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)





