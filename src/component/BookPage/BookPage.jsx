import Image from "next/image";
import styles from "../../styles/bookPage/bookPage.module.css";
import Link from "next/link";

export default function BookPage({ book }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftBlok}>
          <Link href="/">
            <div className={styles.return}></div>
          </Link>
          <Image
            className={styles.img}
            src={book.volumeInfo.imageLinks?.large || "/img/no-image.png"}
            alt="book preview"
            width={250}
            height={350}
          ></Image>
        </div>
        <div className={styles.rightBlok}>
          <p className={styles.categories}>
            {book.volumeInfo.categories || ""}
          </p>
          <p className={styles.title}>{book.volumeInfo.title}</p>
          <p className={styles.authors}>{book.volumeInfo.authors || ""}</p>
          {book.volumeInfo.description && (
            <p className={styles.description}>
              {book.volumeInfo.description || ""}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
