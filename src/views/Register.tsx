import { Link } from 'react-router-dom'
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader'
import { IFooterLink } from '../components/AppFooter'
import AppButton from '../components/AppButton'
import { useState } from 'react'
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
const Register = () => {

    const [step, setStep] = useState(1)

    const goToNextStep = () => {
        setStep(step + 1)
    }

    return (
        <>
            <div className='relative min-h-screen h-1'>
                <AppHeader className='border-b-2 border-gray-300'>
                    <Link to='/log-in' className='text-gray-600 text-xl border-b border-transparent hover:border-gray-600'>Sign In</Link>
                </AppHeader>
                <div className='px-2 w-full flex  justify-center items-center h-full'>
                    <div className='max-w-sm'>
                        {
                            step === 1 && <div className='text-center'>
                                <p>STEP <span className='font-bold'>{step}</span> OF <span className='font-bold'>3</span></p>
                                <h1>Finish setting up your account</h1>
                                <p>Netflix is personalized for you. Create a password to watch on any device at any time.</p>
                                <AppButton className='w-full mt-4' onClick={goToNextStep}>Go to next step</AppButton>
                            </div>
                        }
                        {
                            step === 2 && <div className='text-center'>
                                <p>STEP <span className='font-bold'>{step}</span> OF <span className='font-bold'>3</span></p>
                                <ul>
                                    <li>No commitments</li>
                                    <li>All on Netflix for low price</li>
                                    <li>Unlimited streaming on all devices</li>

                                </ul>
                                <AppButton className='w-full mt-4' onClick={goToNextStep}>Go to next step</AppButton>
                            </div>
                        }
                    </div>
                </div>
                <AppFooter footerLinks={footerLinks} className='bg-gray-300' />
            </div>

        </>
    )
}

export default Register