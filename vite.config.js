import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        define: {
            'process.env.REACT_ENV_FILE': JSON.stringify(env.REACT_ENV_FILE)
        },
        plugins: [react()],
    };
});