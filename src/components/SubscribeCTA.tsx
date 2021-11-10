import AppButton from "./AppButton"
// import AppInput from "./AppInput"
import AppFormikInput from './AppFormikInput'
import HomeText from "./HomeText"
import { Formik, Form } from "formik"
import useCommonValidationSchema from "../Hooks/useCommonValidationSchema"
import { useState } from "react"
import { useHistory } from "react-router"



const SubscribeCTA = ({ ...props }) => {
    const SubscribeSchema = useCommonValidationSchema(['email'])
    const [isLoading, setLoading] = useState(false)

    const history = useHistory()
    const handleSubmit = () => {
        console.log('Kliknuo sam!')
        setLoading(true)
        setTimeout(() => {
            history.push('/register')
        }, 1000)
    }
    return (
        <div {...props}>
            <HomeText>
                Ready to watch? Enter your email to create or restart your membership.
            </HomeText>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={SubscribeSchema}
                onSubmit={(values, { setSubmitting }) => {
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2))
                    //     setSubmitting(false)
                    // }, 400)
                    handleSubmit()
                }}
            >
                {() => {
                    return (
                        <>
                            <Form className="flex mx-auto rounded-sm mt-3 ">
                                <AppFormikInput absolutelyPositionedError type="email" placeholder="Enter your email address" name="email" className='w-full py-5' />
                                <AppButton isLoading={isLoading} type='submit'>Get Started</AppButton>
                            </Form>
                        </>

                    )
                }}
            </Formik>
        </div>
    )
}

export default SubscribeCTA