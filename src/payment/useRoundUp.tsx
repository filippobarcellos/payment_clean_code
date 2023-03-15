import { useState, useEffect } from 'react';

type useRoundUpProps = {
  amount: number;
};

export default function useRoundUp({ amount }: useRoundUpProps) {
  const [tip, setTip] = useState('0');
  const [total, setTotal] = useState(amount);
  const [agreeToDonate, setAgreeToDonate] = useState(false);

  useEffect(() => {
    const total = Math.floor(amount + 1);

    if (agreeToDonate) {
      setTotal(total);
    } else {
      setTotal(amount);
    }

    setTip(parseFloat(String(total - amount)).toPrecision(2));
  }, [agreeToDonate, amount]);

  function onUpdateAgreeToDonate() {
    setAgreeToDonate((state) => !state);
  }

  return { agreeToDonate, total, tip, onUpdateAgreeToDonate };
}
