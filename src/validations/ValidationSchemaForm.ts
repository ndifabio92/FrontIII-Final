import * as Yup from "yup";

export const validationSchemaForm = Yup.object({
    name: Yup.string().trim()
        .required("“Por favor chequea que la información sea correcta”")
        .min(3,"Tiene que tener al menos 3 caracteres"),
    lastName: Yup.string().trim()
        .required("“Por favor chequea que la información sea correcta”")
        .min(6,"Tiene que tener al menos 6 caracteres"),
});