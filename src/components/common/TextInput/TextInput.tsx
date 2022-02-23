import React, { FC, memo } from 'react';
// Types
import { ITextInputProps, ETextInputTypes } from './TextInput.d';
// Styles
import s from './TextInput.module.scss';

const TextInput: FC<ITextInputProps> = ({
  className,
  style,
  name,
  id,
  label,
  type = ETextInputTypes.TEXT,
  value,
  onChange,
  disabled = false,
  ...rest
}) => {
  return (
    <div
      className={`
        ${s.textInput} 
        ${className}
      `}
      style={style}
      {...rest}>
      {label && <label className={s.label}>{label}</label>}
      <input
        id={id}
        name={name}
        className={s.input}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default memo(TextInput);
