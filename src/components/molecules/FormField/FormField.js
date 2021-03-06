import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, Wrapper } from './FormField.styles';

const FormField = React.forwardRef(({ id, type = 'text', label, placeholder, disabled, ...props }, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} disabled={disabled} placeholder={placeholder} {...props} ref={ref} />
    </Wrapper>
  );
});

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default FormField;
