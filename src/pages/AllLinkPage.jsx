import { useState } from "react"
import { Trash2 } from "lucide-react"

export default function AllLinkPage(){

  const [links, setLinks] = useState([]);

 return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-4xl h-[80vh] overflow-auto bg-white rounded-lg p-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            📌 Your Shortened Links
        </h2>
        <div className="grid grid-cols-2 font-bold bg-gray-200 p-2 rounded-md">
          <div>Links</div>
          <div>Created At</div>
        </div>

        {links.map((links) => (
          <div key={links.id} className="grid grid-cols-3 py-2 border-b relative hover:bg-gray-50 transition">
            <div className="relative group">
              <a href={links.shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline"
                {...links.shortUrl}
              />
              {/* Delete Button - Shown on Hover */}
              <button
                className="absolute top-0 right-0 hidden group-hover:block bg-red-500 text-white p-1 rounded-full shadow-md hover:bg-red-600 transition"
                onClick={() => deleteLink(item.id)}
              >
                <Trash2 size={16} />
              </button>
            </div>
            <div>{item.createdAt}</div>
          </div>
        ))}

      </div>
    </div>
  );
}
