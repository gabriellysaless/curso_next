import styles from './todo.module.css';

export async function getTodos() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
    return  data.json()
}

export default async function Todos() {
    const todos = await getTodos(); // roda no servidor antes da página carregar

    return (
        <>
            <h1>Tarefas para fazer:</h1>
            <ul className={styles.todolist}>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}