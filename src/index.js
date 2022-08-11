import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const DEFAULT_MODULE = './ex-04.js';

async function main() {
  const {pathname} = document.location;
  let moduleToLoad = pathname.startsWith('/ex-')
    ? `.${pathname}.js`
    : DEFAULT_MODULE;

  let App = undefined;

  try {
    App = (await import(moduleToLoad)).default;
  } catch (err) {
    console.log(`Failed to load ${pathname}`);
    App = (await import(DEFAULT_MODULE)).default;
  }

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

main();
