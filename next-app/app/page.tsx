"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Login } from "@/login/login";
import { useState } from "react";
export default function Home() {
  const [username, setUsername] = useState("");
  return (
    <main className={styles.main}>
      <form
        onSubmit={async (e) => {
          const data = new FormData(e.currentTarget);
          e.preventDefault();
          try {
            const response = await Login(
              data.get("username")?.toString(),
              data.get("password")?.toString()
            );
            setUsername(response);
          } catch (error) {
            setUsername(error.message);
          }
        }}
      >
        <input name="username" type="text" className={styles.input} />
        <input name="password" type="password" className={styles.input} />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      {username}
    </main>
  );
}
