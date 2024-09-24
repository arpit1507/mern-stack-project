import { useState } from "react"
import { useProductStore } from "../store/product.js";
import { VStack,Heading, Box, useColorModeValue, Input, Button,useToast } from "@chakra-ui/react";

const CreatePage=()=>{
    const [newProduct, setNewProduct]=useState({
        name:"",
        price:"",
        image:""
    });

    const toast = useToast();
    
    const {createProduct}= useProductStore();

    const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
		}
		setNewProduct({ name: "", price: "", image: "" });
	};

    return(
        <div style={{marginLeft:"30px",marginRight:"30px",minHeight:"40vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}> Create New Product</Heading>
                <Box w={"full"} bg={useColorModeValue("white","gray.800")} p={6} rounded={"lg"} shadow={"md"}>
                    <VStack spacing={4}>
                        <Input placeholder="Product Name" type="text" name="name" value={newProduct.name} onChange={(e)=>{
                            setNewProduct({...newProduct,name:e.target.value})
                        }}>
                        </Input>
                        <Input placeholder="Price" type="number" name="price" value={newProduct.price} onChange={(e)=>{
                            setNewProduct({...newProduct,price:e.target.value})
                        }}>
                        </Input>
                        <Input placeholder="Image URl" type="text" name="image" value={newProduct.image} onChange={(e)=>{
                            setNewProduct({...newProduct,image:e.target.value})
                        }}>
                        </Input>
                        <Button colorScheme="blue" onClick={handleAddProduct} w="full" >
                            Submit
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </div>
    )
}
export default CreatePage