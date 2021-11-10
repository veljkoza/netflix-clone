import { useMemo } from 'react'
import { IAppProps } from '../interfaces/IAppProps'
import LoaderSvg from './svg/LoaderSvg'

interface IButtonProps extends IAppProps {
    rounded?: boolean;
    isLoading?: boolean;
}

const AppButton = ({ rounded, isLoading, children, ...props }: IButtonProps) => {

    const defaultStyles = `bg-primary px-5 py-2 w-32 text-white ${rounded ? 'rounded-sm' : ''}`
    const computedStyles = useMemo(() => {
        return defaultStyles + ' ' + props.className
    }, [defaultStyles, props.className])
    console.log("🚀 ~ file: AppButton.tsx ~ line 16 ~ computedStyles ~ computedStyles", computedStyles)
    return (
        isLoading ?
            <button {...props} onClick={(e) => {
                e.preventDefault()
            }} className={computedStyles}>
                <LoaderSvg className='h-10 w-10 stroke-current text-white' />
            </button> :
            <button {...props} className={computedStyles} >{children}</button>


    )
}

export default AppButton