import { useMemo } from 'react'
import HomeSection from './HomeSection'

export interface IFooterLink {
    label: string
    link: string
}

interface IAppFooterProps {
    footerLinks: IFooterLink[],
    [x: string]: any
}

const AppFooter = ({ footerLinks, ...props }: IAppFooterProps) => {

    const defaultStyles = 'px-4 sm:px-10 md:px-44 py-20'

    const computedStyles = useMemo(() => {
        return defaultStyles + ' ' + props.className
    }, [])

    return (
        <footer className={computedStyles}>
            <h1>Questions? Call <button className='border-b border-transparent bg-none cursor-pointer hover:border-gray-500'>help.netflix.com</button></h1>

            <ul className='grid gap-2 mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {footerLinks.map(footerLink => <li key={footerLink.label}><a className='border-b border-transparent hover:border-gray-500' href={footerLink.link}>{footerLink.label}</a></li>)}
            </ul>
        </footer>
    )
}
export default AppFooter