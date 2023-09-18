import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome!</h1>
      <h2>
        <Link href="/Home">Home</Link>
      </h2>
      <h2>
        <Link href="/Blog">Blog</Link>
      </h2>
    </>
  );
}
