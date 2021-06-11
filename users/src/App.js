import logo from "./logo.svg";
import "./App.css";

import Body from "./components/Body";
function App() {
  /*   const [data, setData] = useState([]);
  const getData = async () => {
    const datasFromServer = await fetchData();
    setData(datasFromServer);
  };
  useEffect(() => {
    getData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://60bf8aba97295a0017c432ab.mockapi.io/users"
    );
    console.log(response);
    const data = await response.json();
    return data;
  }; */
  return (
    <div className="App">
      <Body />
    </div>
  );
}

export default App;
