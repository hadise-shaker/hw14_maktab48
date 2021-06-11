import React, { useEffect, useState } from "react";
import animated from "./loading.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Loading(WrappedComponent, api) {
  const LoadingComponent = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(api)
        .then((response) => response.json())
        .catch((err) => toast.error(err))
        .then((json) => {
          setLoading(false);
          setData(json);
        });
    }, []);

    /*     function refetch() {
      setLoading(false);
      fetch(api)
        .then((response) => response.json())
        .then((json) => {
          setLoading(false);
          setData(json);
        });
    } */
    if (isLoading) {
      return (
        <div style={{ margin: "auto" }}>
          <object type="image/svg+xml" data={animated}>
            svg
          </object>
        </div>
      );
    } else {
      return (
        <WrappedComponent /* refetch={refetch} */ data={data} {...props} />
      );
    }
  };

  return LoadingComponent;
}
export default Loading;
