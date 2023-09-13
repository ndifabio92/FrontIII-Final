import {useFormik} from "formik";
import {validationSchemaForm as validationSchema} from "../../validations/ValidationSchemaForm.ts";
import {FormData} from "../../../type";
import {Error} from "../UI/Error/Error.tsx"
import './form.css'
import Button from "@mui/material/Button";
import {swalAlert} from "../../shared/alert.ts";
import {TextField} from "@mui/material";

export const Form = () => {
    const initialValues: FormData = {name: '', email: ''}

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            swalAlert('success', 'Send Email', 'Email send Correctly')
            console.log(values)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className="container-form">
            <TextField variant="outlined" size="small" label="Name" type="text" name="name" className="input-background"
                       value={formik.values.name}
                       onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.name && formik.errors.name && (
                <Error error={formik.errors.name}/>
            )}

            <TextField variant="outlined" size="small" label="Email" type="text" name="email" className="input-background"
                       value={formik.values.email}
                       onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email && (
                <Error error={formik.errors.email}/>
            )}
            <Button variant="contained" type="submit">Send</Button>
        </form>
    )
}