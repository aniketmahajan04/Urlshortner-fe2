
const variantClasses = {
    "primary": "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white ",
    "secondary": "bg-red-500 hover:bg-red-600 active:bg-red-700 text-white",
    "outlined": "border border-gray-500 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-transparent",
    "disabled": "bg-gray-300 text-gray-500 cursor-not-allowed"
}

const defaultStyle = "p-2 rounded-md flex justify-center items-center transition duration-200 ease-in-out";

export default function Button({text, variant, onClick, disabled = false}){
    return (
        <button onClick={onClick} className={`${defaultStyle} ${disabled ? variantClasses.disabled : variantClasses[variant]}`}>
            {text}
        </button>
    )
}