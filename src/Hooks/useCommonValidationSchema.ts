import * as Yup from 'yup'


const useCommonValidationSchema = (fieldNames: string[]) => {
    const mostUsedShapes: { [x: string]: any } = {
        email: Yup.string().required('This field is required!').email('Email format is not valid!'),
        password: Yup.string().required('This field is required').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Password must contain uppercase letter, lowercase letter, special symbol, number, and be longer than 8 characters!"
        )
    }

    // Found shapes will be stored here
    const existingShapes: { [x: string]: any } = {}

    fieldNames.forEach(name => {
        if (mostUsedShapes[name]) {
            existingShapes[name] = mostUsedShapes[name]
        }
    })

    return Yup.object().shape(existingShapes)

}

export default useCommonValidationSchema