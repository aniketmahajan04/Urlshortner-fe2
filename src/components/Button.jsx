
const variantClasses = {
    "primary": "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white",
    "secondary": "bg-red-500 hover:bg-red-600 active:bg-red-700 text-white",
    "outlined": "border border-gray-500 text-gray-700 hover:bg-gray-100",
    "disabled": "bg-gray-300 text-gray-500 cursor-not-allowed"
}

const defaultStyle = "p-2 rounded-md flex justify-center items-center transition duration-200 ease-in-out";

export default function Button({text, variant, onClick, disabled = false}){
    return (
        <button className={`${defaultStyle} ${disabled ? variantClasses.disabled : variantClasses[variant]}`}>
            {text}
        </button>
    )
}