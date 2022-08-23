import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const DEFAULT_EXAMPLE = '04';

async function main() {
  const { pathname } = document.location;
  const exampleNumber = pathname.startsWith('/ex-')
    ? pathname.replace(/^\/ex-/, '')
    : DEFAULT_EXAMPLE;
  let App = undefined;

  try {
    App = (await import(`./ex-${exampleNumber}.js`)).default;
  } catch (err) {
    console.error(`Failed to load ${pathname}`, err);
    App = (await import(`./ex-${DEFAULT_EXAMPLE}.js`)).default;
  }

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

main();
