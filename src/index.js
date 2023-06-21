import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

root.render(
  <StrictMode>
    <WagmiConfig config={config}>
      <App />
    </WagmiConfig>
  </StrictMode>
);
