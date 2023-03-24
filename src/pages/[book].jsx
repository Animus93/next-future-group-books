import Head from "next/head";
import BookPage from "@/component/BookPage/BookPage";
import { fetchBookData } from "@/api/service";


export const getServerSideProps = async (context) => {
  const {book} = context.params;
  const response = await fetchBookData(book);
  if(!response) {
    return 'error'
  }
  return {props: {
    book: response
  }}
}

export default function Book({book}) {
    return (
        <>
        <Head>
          <title>Book page</title>
        </Head>
        <BookPage book={book}/>
    </>
  );
}
