import React from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import { InputProps, inputVariants } from '../Input/Input';

type CurrencyFieldProps = Omit<InputProps, 'type' | 'value' | 'defaultValue'> &
  NumericFormatProps;

export const Currency = React.forwardRef<HTMLInputElement, CurrencyFieldProps>(
  ({ placeholder, ...props }, ref) => {
    return (
      <NumericFormat
        {...props}
        type="tel"
        placeholder={placeholder}
        thousandSeparator=","
        decimalSeparator="."
        prefix="$"
        fixedDecimalScale
        decimalScale={2}
        getInputRef={ref}
        className={inputVariants({ className: props.className })}
      />
    );
  }
);

Currency.displayName = 'Currency';
