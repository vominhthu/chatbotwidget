import { render, screen, fireEvent } from '@testing-library/react';
import Chatbot from '~/components/Chatbot/Chatbot.jsx';

describe('Chatbot', () => {
    test('renders toggle button for chat', async () => {
        render(<Chatbot />);
        const toggleButton = await screen.findByRole('button', { name: /toggleChatBtn/i });
        // expect first load
        expect(toggleButton).toBeInTheDocument();
        expect(screen.queryByTestId("chat-window")).not.toBeInTheDocument();
    });
});