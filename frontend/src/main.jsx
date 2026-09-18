import ReactDOM from 'react-dom/client';
import { InternetIdentityProvider } from './hooks/useInternetIdentity';
import { initEditor } from './hooks/useEditor';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './index.css';

const queryClient = new QueryClient();

try {
  if (typeof initEditor === 'function') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        try { initEditor(); } catch (e) { /* ignore editor communicator error */ }
      });
    } else {
      initEditor();
    }
  }
} catch (err) {
  console.debug('Editor communicator ignored:', err);
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <QueryClientProvider client={queryClient}>
      <InternetIdentityProvider>
        <App />
      </InternetIdentityProvider>
    </QueryClientProvider>
  );
}

