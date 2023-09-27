import { SubmitHandler, UseFormSetError } from "react-hook-form";

export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginProps = {
  onSubmit: SubmitHandler<LoginFormValues>;
};

export type LoginFormRefType = {
  setError: UseFormSetError<LoginFormValues>;
};
