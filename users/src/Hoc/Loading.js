import React, { useEffect, useState, useParams } from "react";
import animated from "./loading.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Loading(WrappedComponent, api) {
  const LoadingComponent = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchTasks = async () => {
        try {
          const response = await fetch(api);

          const data = await response.json();
          if (response.status !== 200) {
            setLoading(false);
            toast.error("Request Failed");
          } else {
            setLoading(false);
            setData(data);

            toast.success("successful");
          }
        } catch (err) {
          toast.error("Request Failed");
        }
      };
      fetchTasks();
    }, []);
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
        <div>
          <ToastContainer />
          {data && <WrappedComponent data={data} {...props} />}
        </div>
      );
    }
  };

  return LoadingComponent;
}
export default Loading;
