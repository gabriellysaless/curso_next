import styles from "./page.module.css";

export const metadata = {
  title: "Página Principal",
  description: "Encontre a melhor roupa pra você",
  keywords: ["Roupas", "Calçados", "Bonés"],
};

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <h1>Hello World Next.js</h1>
      </div>
    </>
  );
}
