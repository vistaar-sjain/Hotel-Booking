import React, { useState, useEffect } from "react";
import { GiCheckMark } from "react-icons/gi";
import { IoIosAddCircle } from "react-icons/io";
import { VscBlank } from "react-icons/vsc";

function Destinations() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [newTodo, setNewTodo] = useState(""); // State for new input
  const rowsPerPage = 20; // Number of rows per page

  useEffect(() => {
    const storedData = localStorage.getItem("apiData");

    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((fetchedData) => {
          setData(fetchedData);
          localStorage.setItem("apiData", JSON.stringify(fetchedData));
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  // Calculate the index range for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = data ? data.slice(indexOfFirstRow, indexOfLastRow) : [];

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Handle delete
  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id); // Remove the item with the specified ID
    setData(updatedData); // Update state
    localStorage.setItem("apiData", JSON.stringify(updatedData)); // Update localStorage
  };

  // Handle content editing
  const handleEdit = (id, newValue) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, title: newValue } : item
    ); // Update the item's title
    setData(updatedData); // Update state
    localStorage.setItem("apiData", JSON.stringify(updatedData)); // Update localStorage
  };

  // Handle check/uncheck
  const handleCheck = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ); // Toggle the `completed` status
    setData(updatedData); // Update state
    localStorage.setItem("apiData", JSON.stringify(updatedData)); // Update localStorage
  };

  // Handle add new to-do
  const handleAdd = () => {
    if (newTodo.trim() === "") return; // Prevent adding empty to-dos
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1; // Generate a new ID
    const newItem = { id: newId, title: newTodo, completed: false }; // New item object
    const updatedData = [...data, newItem]; // Append new item to data
    setData(updatedData); // Update state
    localStorage.setItem("apiData", JSON.stringify(updatedData)); // Update localStorage
    setNewTodo(""); // Clear the input box
  };

  return (
    <div>
      <div className="w-full items-center flex justify-center mt-24">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)} // Update input value
          className="p-3 border-2 text-xl w-3/5"
          placeholder="Add a new task" />
        <button
          onClick={handleAdd} // Add the new to-do on button click
          className="text-4xl ms-5 text-amber-500">
          <IoIosAddCircle />
        </button>
      </div>
      <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead>
          <tr>
            <th className="px-6 py-3 text-2xl">No.</th>
            <th className="px-6 py-3 text-2xl">To Do</th>
            <th className="px-6 py-3 text-2xl">Checked</th>
            <th className="px-6 py-3 text-2xl">Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 ? (
            currentData.map((item, index) => (
              <tr key={item.id}>
                <td className="px-6 py-3 text-xl">{indexOfFirstRow + index + 1}</td>
                <td
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  onBlur={(e) => handleEdit(item.id, e.target.textContent)}
                  className={`px-6 py-3 text-xl ${
                    item.completed ? "line-through" : "no-underline"
                  }`}>
                  {item.title}
                </td>
                <td
                  className="px-6 py-3 text-xl text-center justify-center flex cursor-pointer hover:border-2"
                  onClick={() => handleCheck(item.id)}> 
                  {/* // Toggle completed on click */}
                  {item.completed ? <GiCheckMark className="text-green-500" /> : <VscBlank />}
                </td>
                <td className="px-6 py-3 text-xl">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        {data &&
          Array.from(
            { length: Math.ceil(data.length / rowsPerPage) },
            (_, i) => i + 1
          ).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 border ${
                page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
              }`} >
              {page}
            </button>
          ))}
      </div>
    </div>
  );
}

export default Destinations;
