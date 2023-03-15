import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Payment from './Payment';

describe('Payment', () => {
  it('should render the payment options', () => {
    render(<Payment amount={20} />);

    expect(screen.getByText('Payment')).toBeInTheDocument();
  });

  it('should render the amount due', () => {
    render(<Payment amount={20} />);

    expect(screen.getByText('£20')).toBeInTheDocument();
  });

  it('should show an option for user to round up the amount', () => {
    render(<Payment amount={19.9} />);

    expect(
      screen.getByText("I'd like to donate £0.10 to a charity")
    ).toBeInTheDocument();
  });

  it('should allow the user to donate', () => {
    render(<Payment amount={19.9} />);

    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it('should allow the user to opt out of donating', () => {
    render(<Payment amount={19.9} />);

    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });

  it('should show a thank you message when user select to donate', () => {
    render(<Payment amount={19.9} />);

    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);

    expect(screen.getByText('Thank you for your donation')).toBeInTheDocument();
  });
});
