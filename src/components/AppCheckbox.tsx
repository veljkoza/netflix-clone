import { IAppProps } from '../interfaces/IAppProps'

interface IAppCheckboxProps extends IAppProps {

}

const AppCheckbox = ({ children, isActive, setIsActive, ...props }: IAppCheckboxProps) => {
    // const [isActive, setIsActive] = useState(false)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = e
        const value = target.checked
        // const { name } = target

        setIsActive(value)
    }
    return (<div className={`relative flex ${props.className}`}>
        <input type="checkbox" {...props} className='hidden' checked={isActive} onChange={(e) => {
            handleInputChange(e)
        }} />

        <label className='relative flex select-none' htmlFor={props.name}>
            <div className={`h-5 w-5 cursor-pointer flex justify-center mr-1 text-white ${isActive ? 'bg-red-500' : 'bg-white'}`}>&#10003;</div>
            {children}</label>
    </div>)
}

export default AppCheckbox