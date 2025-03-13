

export default function Input({placeholder, type, reference, full, outlined}){
    return (
         <div className="w-full">
                <input
                    placeholder={placeholder}
                    type={type}
                    className={`border px-7 py-2 rounded-md focus:outline-none focus-ring-2 focus:ring-blue-500 ${full} ${outlined}`}
                    autoComplete="off"
                    spellCheck={false}
                    data-testid="custom-input"
                    />
            </div>
    )

}

  