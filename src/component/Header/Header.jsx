import styles from "../../styles/header/header.module.css";
import List from "./List";
import SerchForm from "./SerchForm";

export default function Header() {

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Search for books</h2>
        <SerchForm />
        <label className={styles.categories}>
          <List data={({title: "Categories", list: ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']})}/>
        </label>
        <label className={styles.sort}>
          <List data={({title: "Soring by", list: ['relevance','newest']})}/>
        </label>
      </div>
    </header>
  );
}
