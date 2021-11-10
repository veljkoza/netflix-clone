import {IAppProps} from '../interfaces/IAppProps'

interface IHomeParagraphProps extends IAppProps {
    secondary?: boolean
}

const HomeParagraph = ({ children,secondary, ...props }: IHomeParagraphProps) => {
    return (
        <p {...props} className={`text-xl md:text-2xl ${props.className} ${secondary ? '' : 'text-white'}`}>{children}</p>

    )
}

export default HomeParagraph