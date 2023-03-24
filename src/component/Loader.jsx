import { MagnifyingGlass } from "react-loader-spinner"
import { useSelector } from "react-redux";

export default function Loader () {
  const loaderStatus = useSelector((state) => state.loader);

    return (
        <div className="loader">
        <MagnifyingGlass
        visible={loaderStatus}
        height="120"
        width="120"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#000"
        />
        </div>
    )
}