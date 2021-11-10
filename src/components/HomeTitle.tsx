import { IAppProps } from '../interfaces/IAppProps'

interface IHomeTitleProps extends IAppProps {
    secondary?: boolean

}
const HomeTitle = ({ children, secondary, ...props }: IHomeTitleProps) => {
    return (
        <h1 {...props} className={`font-bold text-3xl md:text-4xl lg:text-5xl ${props.className} ${secondary ? '' : 'text-white'}`}>
            {children}
        </h1>
    )
}

export default HomeTitle