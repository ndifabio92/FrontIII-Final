
import {useFormik} from "formik";
import {validationSchemaForm as validationSchema} from "../../validations/ValidationSchemaForm.ts";
import {FormData} from "../../../type";
import {Error} from "../UI/Error/Error.tsx"


export const Form = () => {
    const initialValues: FormData = {name: '', lastName: '', email: ''}

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <label>
                Name
                <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.name && formik.errors.name && (
                    <Error error={formik.errors.name}/>
                )}
            </label>
            <br/>
            <label>
                LastName
                <input type="text" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.lastName && formik.errors.lastName &&(
                    <Error error={formik.errors.lastName}/>
                )}
            </label>
            <br/>
            <button type="submit">Send</button>
        </form>
    )
}