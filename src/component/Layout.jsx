import { MagnifyingGlass } from "react-loader-spinner";
import Header from "./Header/Header";
import Loader from "./Loader";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Loader/>
      {children}
    </>
  );
}
