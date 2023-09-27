import * as Yup from "yup";

const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export default schema;
