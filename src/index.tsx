import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import 'nprogress/nprogress.css';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';
import AuthMiddleware from './middleware/AuthMiddleware';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';


const store = setupStore();


ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <SidebarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SidebarProvider>
    </HelmetProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
