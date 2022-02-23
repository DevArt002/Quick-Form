import React, { FC, memo, useCallback } from 'react';
// Types
import { IDropdownProps } from './Dropdown.d';
// Styles
import s from './Dropdown.module.scss';

const Dropdown: FC<IDropdownProps> = ({
  className,
  style,
  name,
  onChange,
  label,
  value,
  options,
  ...rest
}) => {
  // Generate button content with option
  const generatBtnConent = useCallback(
    (option?: string) => (
      <>
        <label>{option || '--select state--'}</label>
      </>
    ),
    [],
  );

  return (
    <div className={`${s.dropdown} ${className}`} style={style} {...rest}>
      {label && <label className={s.label}>{label}</label>}
      <button className={s.dropBtn}>{generatBtnConent(value)}</button>
      <div className={s.dropdownContent}>
        {options.map((option, index) => (
          <button
            name={name}
            value={option}
            key={`option-${index}`}
            className={s.optionBtn}
            onClick={onChange}>
            {generatBtnConent(option)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(Dropdown);
