import { IAppProps } from "../interfaces/IAppProps"
import { Link } from 'react-router-dom'
import { useMemo } from "react"
interface IAppHeaderProps extends IAppProps {

}

const AppHeader = ({ children, ...props }: IAppHeaderProps) => {
    const defaultStyles = 'relative z-10 py-8 px-2 md:px-10 flex justify-between items-center'
    const computedStyles = useMemo(() => {
        return defaultStyles + ' ' + props.className
    }, [props.className])
    return (
        <>
            <header className={`${computedStyles}`}>
                <Link to='/'>
                    <img src="../../assets/netflix_logo.png" alt="Netflix Logo" className='h-10 w-auto' />
                </Link>
                {children}
            </header>
        </>
    )
}

export default AppHeader