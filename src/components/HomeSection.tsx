interface IHomeSectionProps {
    [x: string]: any;
    twoColumns?: boolean;
    children?: any;
}

const HomeSection = ({ twoColumns, reverseColumns, children, ...props }: IHomeSectionProps) => {
    return (
        <section {...props} className={`border-t-4 border-gray-600 bg-black px-2 sm:px-10 md:px-44 py-20 ${props.className}`}>
            {
                twoColumns ? <div className={`grid grid-cols-1 md:grid-cols-2 gap-20 items-center`}>

                    {children}
                </div> : <div>
                    {children}
                </div>
            }
        </section>
    )
}

export default HomeSection