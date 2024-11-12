import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

/**
 * vitestがテストを正しく行うか検証するためのテストコードです。今後の実装過程で削除します
 */
describe('page.tsx', () => {
    test('"Vercel."文字列が存在すること', () => {
        render(<Home />);
        const vercelText = screen.getByText(/Vercel\./i);
        expect(vercelText).toBeDefined();
    });
});
