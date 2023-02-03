import { useState } from "react";

const useValidateForm = (inputsList: IInput[]) => {
  const [isFormValid, setFormValid] = useState(true);

  const validateInput = (input: IInput, value: string) => {
    const { type } = input;
    if (!value && type !== "checkbox") {
      input.setValid(false);
      return false;
    }

    if (type === "email" && (!value.includes("@") || !value.includes("."))) {
      input.setValid(false);
      return false;
    }

    if (type === "password" && value.length < 3) {
      input.setValid(false);
      return false;
    }

    type !== "checkbox" && input.setValid(true);
    return true;
  };

  const validateForm = (values: { [nameInput: string]: string }) => {
    let valid = true;
    inputsList.forEach((input) => {
      if (!validateInput(input, values[input.name])) {
        valid = false;
      }
    });
    setFormValid(valid);
    return valid;
  };

  return {
    validateInput,
    validateForm,
    isFormValid,
  };
};

export interface IInput {
  name: string;
  type: "text" | "email" | "password" | "checkbox";
  placeholder?: string;
  label?: string;
  isValid?: boolean;
  setValid?: (isInputValid: boolean) => void;
  errorMessage?: string;
}

export default useValidateForm;
