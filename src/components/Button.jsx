
const variantClasses = {
    "primary": "bg-white",
    "secondary": "bg-red-500"
}

const defaultStyle = "p-2 rounded-md flex items-center"

export default function Button({text, variant}){
    return (
        <button className={`${variantClasses[variant]} ${defaultStyle}`}>
            {text}
        </button>
    )
}