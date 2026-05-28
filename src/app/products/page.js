import Link from "next/link";

import styles from './products.module.css'

export default function Products() {
    return (
        <div className={styles.products}>
            <h1>Página de Produtos</h1>
            <Link href="/">
                Voltar
            </Link>
        </div>
    )
}