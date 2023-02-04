import React, { useRef, useState } from "react";
import useValidateForm, { IInput } from "../../hooks/useValidateForm";
import Button from "./Button";
import Error from "./Error";
import InputField from "./InputField";
import "@styles/base/form.css";
import PasswordField from "./PasswordField";
import CheckBox from "./CheckBox";

function Form(props: IProps) {
  const {
    inputs,
    textButton,
    errorMessage,
    onSubmit,
    usePasswordField,
    title,
  } = props;
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
      <h2>{title}</h2>
      {inputs.map((input) => {
        const { name, type, errorMessage } = input;

        if (type === "password" && usePasswordField) {
          return (
            <PasswordField
              key={name}
              name={name}
              placeholder={input.placeholder}
              type={type}
              required={true}
              error={!input.isValid}
              errorMessage={errorMessage}
              onChange={(event) => {
                validateInput(input, event.target.value);
              }}
            />
          );
        }

        if (type === "checkbox") {
          return <CheckBox key={name} name={name} text={input.label} />;
        }

        return (
          <InputField
            key={name}
            name={name}
            placeholder={input.placeholder}
            type={type}
            required={true}
            error={!input.isValid}
            onChange={(event) => {
              validateInput(input, event.target.value);
            }}
          />
        );
      })}
      {(errorMessage || !isFormValid) && (
        <Error
          message={
            errorMessage
              ? errorMessage
              : "Por favor, diligencia los campos marcados"
          }
        />
      )}
      <Button type="submit" text={textButton} />
    </form>
  );
}

interface IProps {
  inputs: IInput[];
  title: string;
  textButton: string;
  errorMessage?: string;
  usePasswordField?: boolean;
  onSubmit: (data: Record<string, string>) => void;
}

export default Form;
