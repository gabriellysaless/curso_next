import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams(){ /* O Next já cria páginas 'pré-geradas' antes (build time) */
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todos = await res.json();

    return todos.map((todo) => ({
        todoId: String(todo.id),
    }))
}

export default async function Todo({ params }) {
    const { todoId } = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)

    const todo = await res.json()

    if (!todo.id) { /* Validação se existe o to-do ou não */
        notFound();
    }

    return (
        <>
            <h1>Exibindo o to-do: {todo.id}</h1>
            <h3>Texto: {todo.title}</h3>
            
            <p>Comentário: um... <Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link> </p>

            <p>Comentário: dois... <Link href={`/todos/${todo.id}/comments/2`}>Detalhes</Link> </p>

            <p>Comentário: três... <Link href={`/todos/${todo.id}/comments/3`}>Detalhes</Link> </p>

            <Link href="/todos">
                Voltar
            </Link>
        </>
    )
}