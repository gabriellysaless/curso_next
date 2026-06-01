"use client";

import Link from "next/link";
import { useParams } from "next/navigation"

export default function Comemnts() {
    const params = useParams();
    
    return(
        <>
            <Link href={`/todos/${params.todoId}`}>
                Voltar
            </Link>
            <h1>To-do: {params.todoId}</h1>
            <h2>Exibindo o comentário número: {params.commentId}</h2>
        </>
    )
}