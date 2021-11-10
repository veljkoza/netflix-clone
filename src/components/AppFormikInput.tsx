import AppInput from './AppInput'
import { useField } from 'formik'
import { IAppProps } from '../interfaces/IAppProps'
import { useMemo } from 'react'

interface IAppFormikInput extends IAppProps {
    absolutelyPositionedError?: boolean,
    errorStyles?: string
}

const AppFormikInput = ({ absolutelyPositionedError, errorStyles, ...props }: IAppFormikInput) => {
    const [field, meta] = useField(props.name)

    const computedStyles = useMemo(() => {
        return `${props.className} ${meta.touched && meta.error ? errorStyles : ''}`
    }, [meta.error, meta.touched, errorStyles, props.className])
    return (
        <div className='w-full relative'>
            <AppInput {...field}{...props} className={computedStyles} />
            {
                meta.touched && meta.error ? (
                    <div className={`text-left text-red-500  ${absolutelyPositionedError && 'absolute left-2 -bottom-6'}`}>{meta.error}</div>
                ) : null

            }
        </div>

    )
}

export default AppFormikInput