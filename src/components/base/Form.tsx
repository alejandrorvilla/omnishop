import React, { useRef, useState } from "react";
import useValidateForm, { IInput } from "../../hooks/useValidateForm";
import Button from "./Button";
import Error from "./Error";
import InputField from "./InputField";
import "@styles/base/form.css";

function Form(props: IProps) {
  const { inputs, textButton, errorMessage, onSubmit } = props;
  const formRef = useRef();
  const { validateInput, validateForm, isFormValid } = useValidateForm(inputs);

  const handlerOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data = getDataForm();
    if (validateForm(data)) {
      onSubmit(data);
    }
  };

  const getDataForm = () => {
    const formData = new FormData(formRef.current);
    let data: Record<string, string> = {};
    inputs.forEach((input) => {
      data[input.name] = formData.get(input.name) as string;
    });
    return data;
  };

  return (
    <form className="o-form" ref={formRef} onSubmit={handlerOnSubmit}>
      {inputs.map((input) => {
        const { name } = input;
        return (
          <InputField
            key={name}
            name={name}
            placeholder={input.placeholder}
            type={input.type}
            required={true}
            error={!input.isValid}
            onChange={(event) => {
              validateInput(input, event.target.value);
            }}
          />
        );
      })}
      {errorMessage ||
        (!isFormValid && (
          <Error
            message={
              errorMessage
                ? errorMessage
                : "Por favor, diligencia los campos marcados"
            }
          />
        ))}
      <Button type="submit" text={textButton} />
    </form>
  );
}

interface IProps {
  inputs: IInput[];
  textButton: string;
  errorMessage?: string;
  onSubmit: (data: Record<string, string>) => void;
}

export default Form;
