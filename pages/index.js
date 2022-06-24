import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("order placed");
    router.push("/product");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Homepage</h1>
      <Link href={"/product"}>
        <a>Product</a>
      </Link>
      <Link href={"/photo"}>
        <a>Photos</a>
      </Link>
      <button onClick={handleClick}></button>
    </div>
  );
}
