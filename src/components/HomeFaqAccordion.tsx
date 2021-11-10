import { useCallback, useState } from 'react'
import {IAppProps} from '../interfaces/IAppProps'
import HomeParagraph from './HomeParagraph'
interface IFaqAccordionProps extends IAppProps {
    title: string
}

const HomeFaqAccordion = ({children,title,...props}:IFaqAccordionProps) => {
    const [isExpanded, setExpanded] = useState(false)

    const toggleAccordion = useCallback(()=>{
        setExpanded(!isExpanded)
    },[isExpanded])

    return (
        <article className='cursor-pointer ' onClick={toggleAccordion}>
            <div className='bg-gray-700 text-white px-7 py-5 text-4xl flex justify-between border-b border-black items-center'>
                <HomeParagraph>{title}</HomeParagraph>
                <button className={`cursor-pointer border-none bg-none transform transition-transform ${isExpanded && 'rotate-45'}`}>
                    +
                </button>
            </div>
            <div className={`bg-gray-700 text-white transition overflow-y-hidden  ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}>
                <HomeParagraph className='px-7 py-5 '>
                    {children}
                </HomeParagraph>
            </div>
        </article>
    )
}

export default HomeFaqAccordion