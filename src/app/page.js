import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Página Principal",
  description: "Encontre a melhor roupa pra você",
  keywords: ["Roupas", "Calçados", "Bonés"],
};

export default function Home() {
  return (
    <>
      <div>
        <h1 className={styles.title}>Hello World Next.js</h1>
        <Image
          src="/images/city.jpg"
          width={300}
          height={400}
          alt="Cidade à noite"
        />
      </div>
    </>
  );
}
