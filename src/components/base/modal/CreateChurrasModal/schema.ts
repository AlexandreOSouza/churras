import * as Yup from "yup";

const schema = Yup.object({
  desc: Yup.string().required("Campo obrigatorio"),
});

export default schema;
