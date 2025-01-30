import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Home</h1>
      <button>Registation</button>
      <button>Login</button>
    </header>
  );
};

export default Header;
