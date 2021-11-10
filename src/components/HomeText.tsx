import {IAppProps} from '../interfaces/IAppProps'

interface IHomeTextProps extends IAppProps {
    secondary?: boolean
    
}

const HomeText = ({ children,secondary, ...props }: IHomeTextProps) => {
    return (
        <p {...props} className={`md:text-xl ${props.className} ${secondary ? '' : 'text-white'}`}>{children}</p>

    )
}

export default HomeText