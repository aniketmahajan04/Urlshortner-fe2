import { useState } from "react"

export default function AllLinkPage(){
  const [links, setLinks] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
        <div className="w-full max-w-4xl h-[80vh] overflow-auto bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700 mg-4 text-center">Shortened links</h2>
        </div>
    </div>

  )
}
