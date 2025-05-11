import styles from "./styles.module.css";

export function Footer() {
  return <footer className={styles.footer}>
    <a href="">Entenda como funciona a tecnica Pomodoro</a>
    <a href="">Chonus Pomodoro &copy; {new Date().getFullYear()}</a>
  </footer>;
}
