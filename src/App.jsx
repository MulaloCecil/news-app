import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function App() {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=tesla&from=2023-09-14&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_BASE_URL}&page=${page}&pageSize=${pageSize} `
      );
      const data = await response.json();
      console.log(data);
      setResults(data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNews();
  }, [page, pageSize]);


  return (
    <div className="App container flex justify-center flex-col mx-auto px-4">
      <Navbar />
      <select
        className="border rounded p-2 my-4"
        onChange={(e) => setPageSize(e.target.value)}
      >
        <option>Articles per page</option>
        <option value={12}>12</option>
        <option value={48}>50</option>
        <option value={100}>100</option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {results.map((result, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow-md hover:shadow-lg"
          >
            <img
              src={result.urlToImage}
              alt={result.title}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <p className="font-bold text-xl mb-2">{result.title}</p>
            <p
              className="text-sm text-gray-600"
              dangerouslySetInnerHTML={{ __html: result.description }}
            ></p>
            <button
              href={result.url}
              target="_blank"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {page === 1 ? null : (

          <button
            onClick={() => setPage(page - 1)}
            className="bg-gray-300 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            {page - 1}
          </button>
        )}
        <button
          disabled
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
        >
          {page}
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="bg-gray-300 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          {page + 1}
        </button>
      </div>

    </div>
  );
}



