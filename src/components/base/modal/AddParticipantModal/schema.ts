import * as Yup from "yup";

const schema = Yup.object({
  name: Yup.string().required(),
  amount: Yup.number().required(),
});

export default schema;
