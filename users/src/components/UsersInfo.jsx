import React,{useEffect,useState} from 'react'

const UsersInfo = () => {
        const [data, setData] = useState([]);
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
   
    const data = await response.json();
    console.log(data);
    return data;
  };
    return (
        <div >
            {data.map((info,index)=>{
                return(
            <form key={index}>
                <input value={info.firstname}/>
                <input value={info.lastname}/>
                <input value={info.email}/>
                <input value={info.id}/>
            </form>
            )
            })}

        </div>
    )
}

export default UsersInfo
