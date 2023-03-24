import { fetchData } from "@/api/service";
import { loader } from "@/redux/loaderSlice";
import { pageIndex } from "@/redux/pageIndexSlice";
import { result } from "@/redux/resultSlice";
import { serchQuery } from "@/redux/serchQuerySlice";
import { totalResult } from "@/redux/totalResultSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/header/header-serchForn.module.css";

export default function SerchForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const categories = useSelector((state) => state.categories);
  const sort = useSelector((state) => state.sort);
  const serchRequest = useSelector((state) => state.serchQuery);
  const index = useSelector((state) => state.pageIndex);
  const [query, setQuery] = useState("");
  const requestParams = { serchRequest, categories, sort, index };

  function submitHandler(e) {
    e.preventDefault();
    // обнуляет pageIndex
    dispatch(pageIndex(0));
    // переписывает глобальное значение поиска согласно локальному стейту
    dispatch(serchQuery(query));
    if (router.pathname !== "/") {
      // если при выполнении нового запроса текущая страница не главная возвращает на главную
      router.push("/");
    }
  }

  useEffect(() => {
    //если поисковая строка не пустая идет запрос за данными
    async function getBooks() {
      if (serchRequest !== "") {
        dispatch(loader(true));
        const data = await fetchData(requestParams);
        if (data.items?.length) {
          dispatch(result(data.items));
          dispatch(totalResult(data.totalItems));
          dispatch(pageIndex(index + 30));
          dispatch(loader(false));
          return;
        }
      }
    }
    getBooks();
  }, [serchRequest]);

  return (
    <form className={styles.serchForm} onSubmit={submitHandler}>
      <input
        type="text"
        className={styles.input}
        value={query}
        onChange={() => {
          setQuery(event.target.value);
        }}
        onClick={() => {
          setQuery("");
          dispatch(serchQuery(""));
        }}
      />
      <input type="submit" className={styles.btn} value="" />
    </form>
  );
}
