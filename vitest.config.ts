import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

/**
 * テスト対象はapp,features,components配下のみとしています
 */
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        coverage: {
            reporter: ['text', 'json', 'html'],
            provider: 'v8',
            exclude: [
                '**/*.test.tsx',
                '.next',
                'next.config.js',
                'postcss.config.js',
                'tailwind.config.ts',
                'vitest.config.ts',
            ],
        },
    },
});
