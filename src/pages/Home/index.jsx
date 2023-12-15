import { useState, useEffect} from "react"
import axios from "axios";
import Card from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail";

export const Home = () => {
  const [items, setItems] = useState();
  useEffect(()=>{
    axios.get('https://api.escuelajs.co/api/v1/products')
    .then((response)=>{
      //console.log(response.data)
      setItems(response.data)
    })
  },[])
  return (
    <div className="grid gap-4 grid-cols-4 items-center w-full max-w-screen-lg ">
      {
        items?.map((item)=>(
          <Card key={item.id} data={item}/>
        ))
      }
      <ProductDetail/>
    </div>
  )
}
