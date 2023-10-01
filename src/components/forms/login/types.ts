import { SubmitHandler, UseFormSetError } from "react-hook-form";

export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginProps = {
  onSubmit: SubmitHandler<LoginFormValues>;
  onCreate: SubmitHandler<LoginFormValues>;
  isLoading: boolean;
};

export type LoginFormRefType = {
  setError: UseFormSetError<LoginFormValues>;
};
