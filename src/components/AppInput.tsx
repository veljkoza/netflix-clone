interface IInputInterface {
    [x: string]: any
}

const AppInput = ({ ...props }: IInputInterface) => {
    return (
        <input {...props} className={`px-5 py-2 w-full ${props.className}`} />

    )
}

export default AppInput