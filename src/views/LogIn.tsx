import { Form, Formik } from "formik"
import { useState } from "react"
import { Link } from "react-router-dom"
import AppHeader from '../components/AppHeader'
import AppButton from "../components/AppButton"
import AppCheckbox from "../components/AppCheckbox"
import AppFormikInput from "../components/AppFormikInput"
import HomeBackground from '../components/HomeBackground'
import AppFooter from '../components/AppFooter'
import { IFooterLink } from "../components/AppFooter"
import useCommonValidationSchema from '../Hooks/useCommonValidationSchema'

const footerLinks: IFooterLink[] = [
    {
        label: 'FAQ',
        link: '#'
    },
    {
        label: 'Help center',
        link: '#'
    },
    {
        label: 'Terms of Use',
        link: '#'
    },
    {
        label: 'Privacy Policy',
        link: '#'
    },
    {
        label: 'Cookie Preferences',
        link: '#'
    },
    {
        label: 'Corporate Information',
        link: '#'
    },
]

const LogIn = () => {
    const LoginSchema = useCommonValidationSchema(['email', 'password'])
    const [rememberMe, setRememberMe] = useState(false)
    return (<>
        <div className='relative'>
            <section className='min-h-screen bg-black px-2 relative pb-96'>
                <AppHeader />

                <HomeBackground />

                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={LoginSchema}

                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            setSubmitting(false)
                        }, 400)
                    }}>
                    {() => {
                        return (
                            <>
                                <Form
                                    className='relative bg-black mx-auto max-w-sm p-10 bg-opacity-70'
                                >
                                    <h1 className='text-white text-3xl mb-6'>Log in</h1>
                                    <AppFormikInput type="email" name="email" placeholder="Enter your Email address" className='py-3 bg-gray-600 rounded-sm text-white' errorStyles="border-b-2 border-red-500" />
                                    <AppFormikInput type="password" name="password" placeholder="Enter your password" className='mt-5 py-3 bg-gray-600 rounded-sm text-white' errorStyles="border-b-2 border-red-500" />
                                    <AppButton type="submit" className='w-full py-3 mt-10' rounded>Log In</AppButton>

                                    <div className='flex justify-between items-center mt-5'>
                                        <AppCheckbox className='text-white text-sm' name="remember-me" id="remember-me" isActive={rememberMe} setIsActive={setRememberMe}>Remeber me</AppCheckbox>
                                        <a href="#" className='block text-gray-500 border-b border-transparent hover:border-gray-500'>Need help?</a>
                                    </div>
                                </Form>
                            </>
                        )
                    }}
                </Formik>
            </section>
            <AppFooter footerLinks={footerLinks} className=' bg-black bg-opacity-70 text-white absolute bottom-0 right-0 left-0 text-opacity-70' />
        </div>

    </>)
}

export default LogIn