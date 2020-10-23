/* eslint-disable no-bitwise */
import { useState, useCallback } from "react";

// Import Own Components
import TodoList from "./TodoList.jsx";

const testItems = [
	{ text : "Lavar los platos" },
	{ text : "Sacar a pasear el perro" },
	{ text : "Leer 20 minutos" },
	{ text : "Enviar trabajos" },
	{ text : "Planificar boda" },
	{ text : "Estudiar vectores", done : true },
	{ text : "Calificar MR" },
	{ text : "Investigar sobre Dart" },
	{ text : "Hacer test del proyecto" },
];

const TodoListContainer = () => {
	const [items, setItems] = useState(testItems);

	const onItemClick = useCallback((item, evnt) => {
		evnt?.stopPropagation();

		if (item.done) {
			return;
		}

		setItems((prevState) => {
			const currentItems = [...prevState];
			const itemIndex    = currentItems.findIndex(element => element.text === item.text);

			// If the item is found
			if (~itemIndex) {
				currentItems[itemIndex].done = true;

				return currentItems;
			}

			return prevState;
		});
	}, []);

	return (
		<TodoList
			items={items}
			onItemClick={onItemClick}
		/>
	);
};

export default TodoListContainer;
