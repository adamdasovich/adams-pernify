import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
	const [todos, setTodos] = useState([]);
	const getTodos = async () => {
		try {
			const response = await fetch('/todos')
			const jsonData = await response.json();
			setTodos(jsonData)
		} catch (error) {
			console.log(error.message);
		}
	}
	useEffect(() => {
		getTodos();
	}, [])

	const deleteTodo = async (id) => {
		try {
			const deleteTodo = await fetch(`/todos/${id}`, {
				method: "DELETE"
			})
			setTodos(todos.filter(todo => todo.todo_id !== id))
		} catch (error) {
			console.log(error.message)
		}
	}

	return (
		<Fragment>
			{" "}
			<table className="table mt-5">
				<thead>
					<tr>
						<th>Description</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{/*<tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr> */}
					{todos.map(todo => (
						<tr key={todo.todo_id}>
							<td>{todo.description}</td>
							<td>
								<EditTodo todo={todo} />
							</td>
							<td>
								<button
									className="btn btn-danger"
									onClick={() => deleteTodo(todo.todo_id)}
								>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Fragment>
	)
}

export default ListTodos;