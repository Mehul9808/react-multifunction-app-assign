import { useState, useEffect } from 'react';

import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import '../App.css'; // Import the CSS file
function Mytodolist(){
// State for the current input value
 const [todo, setTodo] = useState('');
 // State for the list of todos
 const [todos, setTodos] = useState([]);
 // State to show or hide finished todos
 const [showFinished, setshowFinished] = useState(true);

 // Load todos from localStorage on initial render
 useEffect(() => {
   let todoString = localStorage.getItem('todos');
   if (todoString) {
     let todos = JSON.parse(todoString);
     setTodos(todos);
   }
 }, []);

 // Save todos to localStorage
 const saveToLS = () => {
   localStorage.setItem('todos', JSON.stringify(todos));
 };

 // Toggle the visibility of completed todos
 const toggleFinished = () => {
   setshowFinished(!showFinished);
 };

 // Edit a todo item
 const handleEdit = (id) => {
   let t = todos.filter((i) => i.id === id);
   setTodo(t[0].todo);
   let newTodos = todos.filter((item) => {
     return item.id !== id;
   });
   setTodos(newTodos);
   saveToLS();
 };

 // Delete a todo item
 const handleDelete = (id) => {
   let newTodos = todos.filter((item) => {
     return item.id !== id;
   });
   setTodos(newTodos);
   saveToLS();
 };

 // Add a new todo item
 const handleAdd = () => {
   setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
   setTodo('');
   saveToLS();
 };

 // Update the current input value
 const handleChange = (e) => {
   setTodo(e.target.value);
 };

 // Toggle the completed state of a todo item
 const handleCheckbox = (e) => {
   let id = e.target.name;
   let index = todos.findIndex((item) => {
     return item.id === id;
   });
   let newTodos = [...todos];
   newTodos[index].isCompleted = !newTodos[index].isCompleted;
   setTodos(newTodos);
   saveToLS();
 };

 return (
   <>
    
     <div className="todo-container container">
       <h1 className="header">iTask - Manage your todos at one place</h1>
       <div className="add-todo">
         <h2>Add a Todo</h2>
         <div className="input-group">
           <input
             onChange={handleChange}
             value={todo}
             type="text"
             className="input"
             placeholder="Enter your task"
           />
           <button
             onClick={handleAdd}
             disabled={todo.length <= 3}
             className="button"
           >
             Save
           </button>
         </div>
       </div>
       <input
         className="my-4"
         id="show"
         onChange={toggleFinished}
         type="checkbox"
         checked={showFinished}
       />
       <label className="mx-2" htmlFor="show">
         Show Finished
       </label>
       <div className="divider"></div>
       <h2>Your Todos</h2>
       <div className="todos">
         {todos.length === 0 && <div className="m-5">No Todos to display</div>}
         {todos.map((item) => {
           return (
             (showFinished || !item.isCompleted) && (
               <div key={item.id} className="todo">
                 <div className="todo-item">
                   <input
                     name={item.id}
                     onChange={handleCheckbox}
                     type="checkbox"
                     checked={item.isCompleted}
                   />
                   <div className={item.isCompleted ? 'line-through' : ''}>
                     {item.todo}
                   </div>
                 </div>
                 <div className="button-group">
                   <button
                     onClick={() => handleEdit(item.id)}
                     className="edit-button"
                   >
                     <FaEdit />
                   </button>
                   <button
                     onClick={() => handleDelete(item.id)}
                     className="delete-button"
                   >
                     <AiFillDelete />
                   </button>
                 </div>
               </div>
             )
           );
         })}
       </div>
     </div>
   </>
 );
}
export default Mytodolist;