"use client";
import styles from "./page.module.css";
import CounterApp from "./Components/CounterApp/page";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
      <CounterApp />
      </main>
    </>
  );
}