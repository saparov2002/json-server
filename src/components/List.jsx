// import useAxios from "../hook/useAxios";


import { useEffect, useState } from "react";
import instance from "../api/axios";
import { Link } from "react-router-dom";

const List = () => {
    // const fruits = useAxios('/fruits');
    // const cars = useAxios('/cars');
    const [fruits,setFruits] = useState([]);
    const [refresh,setRefresh] = useState(false)
     
    const handleClickDb = (e) => {
       e.preventDefault();
       instance().delete(`/fruits/${e.target.id}`).then(res => {
            setRefresh(!refresh)
       })
    }

    useEffect(() => {
        instance().get("/fruits")
        .then(resp => setFruits(resp.data))
    },[refresh])
    

    return (
        <>
        <Link to={"/add-fruits"} className="bg-blue-500 text-white p-2 m-2 rounded-md text-[20px] inline-block">Moshina qoshish</Link>
            <ul>
                {fruits.length > 0 && fruits.map(({ id, name, color, price,image}) => (
                    <li className="w-[320px] p-2 bg-green-300 rounded-md flex flex-col mt-3 text-stone-50 font-bold" key={id}>
                        <img src={image} alt="img" width="300" />
                        <span className="mt-2">ID:{id}</span>
                        <span className="mt-2">Name:{name}</span>
                        <span className="mt-2">Color:{color}</span>
                        <span className="mt-2">Price:{price}</span>
                        <button id={id} onClick={handleClickDb} className="bg-red-400 rounded-md mt-3 p-2">delete</button>
                    </li>
                ))}
                
            </ul>
        </>
    );
};

export default List;
