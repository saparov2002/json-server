import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import instance from "../api/axios";

const AddFruits = () => {
    const navigate = useNavigate();
    const nameRef = useRef();
    const colorRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();
    
    const [imgUrl,setImgUrl] = useState("");
    const handleChooseImg = (e) => {
        e.preventDefault();
        setImgUrl(URL.createObjectURL(e.target.files[0]))
        
    }
   
    const handleAddFruits = (e) => {
       e.preventDefault();
       const data= { 
        name: nameRef.current.value,
        color: colorRef.current.value,
        image: imgUrl,
        price: priceRef.current.value,
       }
       try {
           instance().post("/fruits",data)
           .then(res => {
             if(res.status == 201){
               
                    navigate("/")
               
             }
           })
        
       } catch (error) {
        console.log(error);
       }
    }


  return (
    <form onSubmit={handleAddFruits} className="w-[600px] mx-auto mt-10 p-2 bg-slate-200 rounded-md">
        <label className="flex flex-col gap-2">
     <span className="font-semibold">Moshina rasmini kiriting:</span>
     <input onChange={handleChooseImg} className="rounded-md" ref={imgRef} type="file" />
        </label>
     <label className="flex flex-col gap-2">
     <span className="font-semibold">Moshina nomini kiriting:</span>
     <input className="outline-none rounded-md pl-2 py-2" ref={nameRef} type="text" placeholder="Meva kiriting" />
        </label>
        <label className="flex flex-col gap-2">
     <span className="font-semibold">Moshina rangini kiriting:</span>
     <input className="outline-none rounded-md pl-2 py-2" ref={colorRef} type="text" placeholder="Rang kiriting" />
        </label>
        <label className="flex flex-col gap-2">
     <span className="font-semibold">Moshina narxini kiriting:</span>
     <input className="outline-none rounded-md pl-2 py-2" ref={priceRef} type="number" placeholder="Narx kiriting" />
        </label>
        <button  className="border bg-blue-500 rounded-md mt-4 p-2 text-white">Qoshish</button>
    </form>
  )
}

export default AddFruits