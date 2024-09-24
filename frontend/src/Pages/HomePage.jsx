import { useProductStore } from "../store/product";
import ProductCard from "../Components/ProductCard";
import { useEffect } from "react";
import { Image, Text } from "@chakra-ui/react";

const HomePage= ()=>{
    const {fetchProducts,products}= useProductStore();
    useEffect(()=>{fetchProducts()},[fetchProducts])
    return(
        <div style={{marginLeft:"30px",marginTop:"20px",marginRight:"30px",minHeight:"100vw", display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridTemplateRows:"100px"}}>
            <div style={{gridColumnStart:1,gridColumnEnd:5,height:"50px",textAlign:"center"}}>
                <Text fontSize="50px" 
                    fontFamily={"cursive"} 
                    fontWeight={"bold"} 
                    style={{backgroundImage:"linear-gradient(#f32, #329)",
                            WebkitBackgroundClip:"text",
                            color: "transparent"}}>Inventory</Text>
            </div>
            {products.map((product)=>(
                <ProductCard key={product._id} product={product}/>
            ))}
        </div>
    )
};

export default HomePage;
