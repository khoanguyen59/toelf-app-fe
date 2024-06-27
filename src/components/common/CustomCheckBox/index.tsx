import { Checkbox, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import React from 'react';

interface IComponentProps {
  isChecked?: boolean;
  indeterminate?: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: any;
  sx?: SxProps<Theme>;
  name?: string;
}

const CustomCheckBox = (props: IComponentProps) => {
  const { name, isChecked, indeterminate, handleChange, disabled, value, sx } =
    props;

  return (
    <Checkbox
      sx={{ ...sx }}
      checked={isChecked}
      onChange={handleChange}
      disabled={disabled}
      value={value}
      name={name}
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
      }}
      indeterminate={indeterminate}
    />
  );
};

export default CustomCheckBox;
