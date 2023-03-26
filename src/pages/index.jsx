import { fetchData } from "@/api/service";
import BookPreview from "@/component/Main/BookPreview";
import { loader } from "@/redux/loaderSlice";
import { pageIndex } from "@/redux/pageIndexSlice";
import { result } from "@/redux/resultSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/main/home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.result);
  const categories = useSelector((state) => state.categories);
  const sort = useSelector((state) => state.sort);
  const serchRequest = useSelector((state) => state.serchQuery);
  const totalResult = useSelector((state) => state.totalResult);
  const index = useSelector((state) => state.pageIndex);
  const requestParams = { serchRequest, categories, sort, index };

  async function loadMoreHandler(e) {
    e.preventDefault();

    async function getBooks() {
      if (serchRequest !== "") {
          dispatch(loader(true));
          dispatch(pageIndex(index + 30));
          const newData = await fetchData(requestParams);
          dispatch(loader(false));
          if (newData.items?.length) {
            const prepareNewState = data.concat(newData.items);
            console.log(prepareNewState);
            dispatch(result(prepareNewState));
            dispatch(loader(false));
            return;
          }
        }
    }
    getBooks();
  }

  return (
    <>
      {data.length > 0 ? (
        <>
          <div className={styles.container}>
            <p className={styles.count}>Found {totalResult} results</p>
            <div className={styles.content}>
              {data.map((item) => (
                <BookPreview key={data.id} data={item} />
              ))}
            </div>
            <button className={styles.loadMore} onClick={loadMoreHandler}>
              Load&nbsp;more
            </button>
          </div>
        </>
      ) : (
        <div className={styles.container}>
          <h1 className={styles.count}>Введите название книги для поиска</h1>
        </div>
      )}
    </>
  );
}
