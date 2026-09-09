import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const reactAppEnv = Object.fromEntries(
    Object.entries(env).filter(([key]) => key.startsWith('REACT_APP_'))
  );

  return {
    plugins: [react()],
    envPrefix: ['VITE_', 'REACT_APP_'],
    // Allows legacy process.env.REACT_APP_* access in code while using Vite.
    define: {
      'process.env': reactAppEnv
    }
  };
});
