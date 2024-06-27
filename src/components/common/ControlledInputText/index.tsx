import { SxProps } from '@mui/system';
import {
  FilledInputProps,
  Theme,
  InputBaseComponentProps,
} from '@mui/material';
import React from 'react';
import { CustomTextField } from './style';

interface IComponentProps {
  label?: string;
  value: number | string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
  helperText?: string;
  hasError?: boolean;
  errorText?: string;
  InputProps?: Partial<FilledInputProps>;
  inputProps?: InputBaseComponentProps;
  hasMultiline?: boolean;
  variant?: 'filled' | 'outlined' | 'standard';
  minRows?: number;
  maxRows?: number;
  disabled?: boolean;
  type?: string;
  name?: string;
  required?: boolean;
}

const ControlledInputText = (props: IComponentProps) => {
  const {
    label,
    value,
    sx,
    helperText,
    hasError,
    errorText,
    InputProps,
    inputProps,
    hasMultiline,
    variant,
    minRows,
    maxRows,
    disabled,
    type,
    name,
    onChange,
    onKeyUp,
    onKeyPress,
    required,
  } = props;

  const [isShowingHelperText] = React.useState<boolean>(
    !!(helperText || errorText)
  );

  const [computedHelperText, setComputedHelperText] = React.useState<string>(
    helperText || ''
  );

  React.useEffect(() => {
    setComputedHelperText(hasError ? errorText || '' : helperText || '');
  }, [hasError, errorText, helperText]);

  return (
    <>
      <CustomTextField
        id={`${label}-fill-text-input`}
        label={label}
        variant={variant ? variant : 'filled'}
        value={value}
        name={name}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onKeyPress={onKeyPress}
        sx={sx}
        helperText={
          isShowingHelperText && computedHelperText ? (
            <>{computedHelperText}</>
          ) : (
            <></>
          )
        }
        FormHelperTextProps={{ variant: 'filled' }}
        error={hasError}
        InputProps={InputProps}
        inputProps={inputProps}
        multiline={hasMultiline}
        minRows={minRows}
        maxRows={maxRows}
        disabled={disabled}
        type={type}
        required={required}
      />
    </>
  );
};

export default ControlledInputText;
