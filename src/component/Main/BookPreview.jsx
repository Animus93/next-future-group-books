import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/main/book-preview.module.css";

export default function BookPreview({ data }) {
  return (
    <Link className={styles.wrapper} href={`/${data.id}`}>
      <div className={styles.content}>
        <Image
          className={styles.img}
          src={
            data.volumeInfo.imageLinks?.smallThumbnail || "/img/no-image.png"
          }
          alt="book preview img"
          width={130}
          height={160}
        ></Image>
        <p className={styles.categories}>
          {data.volumeInfo.categories
            ? data.volumeInfo.categories
                .toString()
                .split(" ")[0]
                .replace(/,/g, "")
            : ""}
        </p>
        <p className={styles.title}>
          {data.volumeInfo.title.length > 40
            ? data.volumeInfo.title.substring(0, 40) + "..."
            : data.volumeInfo.title}
        </p>
        <p className={styles.authors}>
          {data.volumeInfo.authors &&
            (data.volumeInfo.authors.join(", ").length > 25
              ? data.volumeInfo.authors.join(", ").substring(0, 25) + "..."
              : data.volumeInfo.authors.join(", "))}
        </p>
      </div>
    </Link>
  );
}
