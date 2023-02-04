import React, { useEffect, useState } from "react";
import "@styles/base/amountField.css";

function AmountField(props: IProps) {
  const { maxNumber } = props;
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    if (amount > maxNumber) {
      setAmount(maxNumber);
    }
  }, [maxNumber]);

  return (
    <div className="o-amountfield">
      <a
        className="o-decrease"
        onClick={() => {
          amount > 1 && setAmount(amount - 1);
        }}
      >
        -
      </a>
      <input
        type="number"
        value={amount}
        onChange={(event) => {
          setAmount(Number(event.target.value));
        }}
      />
      <a
        className="o-increase"
        onClick={() => {
          amount < maxNumber && setAmount(amount + 1);
        }}
      >
        +
      </a>
    </div>
  );
}

interface IProps {
  maxNumber: number;
}

export default AmountField;
