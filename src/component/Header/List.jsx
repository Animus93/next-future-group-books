import { categories } from "@/redux/categoriesSlice";
import { sort } from "@/redux/sortSlice";
import { useDispatch } from "react-redux";
import styles from "../../styles/header/header-list.module.css";

export default function List(props) {
  const dispatch = useDispatch();
  const { data } = props;

  //Проверка из какого копоменета был сделан выббор по полученому пропсу data.title
  // в зависимости от него идет dispatch в определенный слайс
  function changeHandler(e) {
    switch (e.target.name) {
      case "Categories":
        dispatch(categories(e.target.value));
        break;
      case "Soring by":
        dispatch(sort(e.target.value));
        break;
    }
  }
  return (
    <>
      <label className={styles.title}>{data.title}</label>
      <select
        onChange={changeHandler}
        className={styles.items}
        name={data.title}
      >
        {data.list.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}
