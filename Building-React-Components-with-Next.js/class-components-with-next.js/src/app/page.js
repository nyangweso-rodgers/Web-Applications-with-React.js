import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <div className="row">
            <p>Test paragraph</p>
          </div>
        </div>
      </main>
    </>
  );
}