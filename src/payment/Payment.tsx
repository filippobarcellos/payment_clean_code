import useRoundUp from './useRoundUp';

type PaymentProps = {
  amount: number;
};

function Payment({ amount }: PaymentProps) {
  const { agreeToDonate, total, tip, onUpdateAgreeToDonate } = useRoundUp({
    amount,
  });

  function formatCheboxLabel() {
    return agreeToDonate
      ? 'Thank you for your donation'
      : `I'd like to donate £${tip} to a charity`;
  }

  return (
    <div>
      <h1>Payment</h1>
      <label>
        <input
          type="checkbox"
          checked={agreeToDonate}
          onChange={onUpdateAgreeToDonate}
        />
        <span>{formatCheboxLabel()}</span>
      </label>
      <p>£{total}</p>
    </div>
  );
}

export default Payment;
