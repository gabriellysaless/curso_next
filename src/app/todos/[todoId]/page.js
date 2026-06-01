"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Todo() {

    const params = useParams();

    return (
        <>
            <Link href="/">
                Voltar
            </Link>
            <h1>Exibindo o to-do: {params.todoId}</h1>
            <p>Comentário: um... <Link href={`/todos/${params.todoId}/comments/1`}>Detalhes</Link> </p>

            <p>Comentário: dois... <Link href={`/todos/${params.todoId}/comments/2`}>Detalhes</Link> </p>

            <p>Comentário: três... <Link href={`/todos/${params.todoId}/comments/3`}>Detalhes</Link> </p>
        </>
    )
}