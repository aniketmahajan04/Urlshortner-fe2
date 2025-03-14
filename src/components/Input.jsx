

export default function Input({placeholder, type, ref, extraclasses}){
    return (
         <div className="w-full">
                <input
                    ref={ref}
                    placeholder={placeholder}
                    type={type}
                    className={`border px-7 py-2 rounded-md focus:outline-none focus-ring-2 focus:ring-blue-500 ${extraclasses}`}
                    autoComplete="off"
                    spellCheck={false}
                    data-testid="custom-input"
                    />
            </div>
    )

}

  