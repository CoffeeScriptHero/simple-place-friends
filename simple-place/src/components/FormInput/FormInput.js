import React from "react";
import { CustomInput } from "./FormInput-styles";

const FormInput = (props) => {
  const { field, form, ...rest } = props;
  const { name } = field;
  return (
    <div>
      <CustomInput {...rest} {...field}></CustomInput>
      {form.touched[name] && form.errors[name] && (
        <div>{form.errors[name]}</div>
      )}
    </div>
  );
};

export default FormInput;
