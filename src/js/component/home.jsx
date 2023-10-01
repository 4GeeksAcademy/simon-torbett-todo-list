import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])



	return (
		<div className="text-center"> <h1 className="titulo">Todos</h1>

			<ul className="list-group list-group-flush">
				<li className="list-group-item" >
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat(inputValue));
								setInputValue ("");
							}
						}}
						placeholder='Que Necesitas Hacer' />
				</li>
				{todos.map((item, index) => (
					<li className="list-group-item"> {item} <FontAwesomeIcon icon={faTrashCan} onClick={() => setTodos (todos.filter((t, currentIndex) => index != currentIndex))} /></li>
				))}
			</ul>
			<div className='tareas'>{todos.length}</div>

		</div>
	);
};

export default Home;
