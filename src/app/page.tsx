'use client';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Home() {
  // define state
  const [todos, setTodos] = useState([
    { tasks: 'Learn Next.Js', id: 1 },
    { tasks: 'Learn Typescript', id: 2 },
  ]);
  const [inputval, setInput] = useState('');
  const [id, setid] = useState(0);
  // functions
  const addTask = () => {
    let obj: any = todos.find((item) => item.id == id);
    if(obj) {
      let newTodos = todos.filter(item => item.id !== obj.id)
      setTodos([...newTodos, { tasks: inputval, id: id }]);
    setInput('');
    setid(0);
    return
    }
    setTodos([...todos, { tasks: inputval, id: id }]);
    setInput('');
    setid(0);
  };
  const editItem = (id: number) => {
    let obj: any = todos.find((item) => item.id === id);
    setInput(obj.tasks);
    setid(id);
    setTodos(todos.filter((item) => item.id !== id));
  };
  const deleteItem = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  return (
    <div className="max-w-4xl mx-auto  bg-blue-400 p-5 flex-wrap">
      <h1 className="text-4xl underline font-bold text-center text-white bounce hover: animate-bounce">
        Todo App
      </h1>
      {/* Start Input Div */}
      <div className="flex justify-between gap-3 mt-5">
        <input
          type="text"
          value={inputval}
          onChange={(e) => setInput(e.target.value)}
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 gap-2 rounded-lg py-2 px-4 block w-[60%] appearance-none leading-normal"
          placeholder="Write a task"
        />
        <input
          type="number"
          value={id}
          onChange={(e: any) => setid(e.target.value)}
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 gap-2 rounded-lg py-2 px-4 block w-[20%] appearance-none leading-normal"
          placeholder="Write ID"
        />
        <button
          onClick={addTask}
          className="flex-wrap bg-blue-500 gap-3 w-[20%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </div>
      {/* End Input div */}

      {/* Heading */}
      <h1 className="text-4xl underline font-bold text-center text-white bounce hover: mt-5">
        Task List
      </h1>

      {/* Task List */}
      <div className="grid grid-col-2 gap-5 mt-5">
        {/* grid Item */}
        {todos.map((item: any, i: any) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="shadow p-4" key={i}>
              <div className="flex justify-between">
                <span className="shadow rounded-full w-8 h-8 text-center my-auto text-gray-100">
                  {i + 1}
                </span>
                <span onClick={() => deleteItem(item.id)} className="shadow rounded-full w-8 h-8 text-center my-auto cursor-pointer text-red-500 text-2xl bg-blue-400">
                  x
                </span>
              </div>
              {/* data div */}
              <div className="mt-5 text-[30px] text-gray-100">{item.tasks}</div>
              <div>
                <h2
                  onClick={() => editItem(item.id)}
                  className="text-right text-gray-100 cursor-pointer"
                >
                  Edit
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
