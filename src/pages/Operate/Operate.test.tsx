import { render, screen } from '@testing-library/react';
import { Operate } from './Operate';
import { useAriesStore } from '../../stores/use-aries-store/use-aries-store';

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('<Operate />', () => {
  beforeEach(() => {
    const initialStoreState = useAriesStore.getState();

    useAriesStore.setState(
      { ...initialStoreState, name: 'Wendel Freitas' },
      true
    );
  });

  it('should render component Operate successfully', () => {
    render(<Operate />);
    const text = screen.getByText('Hello, Wendel Freitas');

    expect(text).toBeInTheDocument();
  });
});
