import { render, screen } from '@testing-library/react';
import { Welcome } from './Welcome';

describe('<Welcome />', () => {
  it('should render component Welcome successfully', () => {
    render(<Welcome />);
    const text = screen.getByText('Welcome to our operation platform, Aries');

    expect(text).toBeInTheDocument();
  });
});
