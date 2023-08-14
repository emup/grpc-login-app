"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Login } from "@/login/login";
export default function Home() {
  return (
    <main className={styles.main}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Login();
        }}
      >
        <input type="text" className={styles.input} />
        <input type="password" className={styles.input} />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </main>
  );
}
