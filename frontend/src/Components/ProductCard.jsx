import { IconButton, Image, Text, useToast,useDisclosure} from "@chakra-ui/react"
import { useProductStore } from "../store/product";
import { CiSquarePlus } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button,Input} from '@chakra-ui/react'
import { useState } from "react";

const ProductCard = ({product})=>{
    const [updatedProduct,setupdateProduct]=useState(product);
    const {deleteProduct,updateProduct}=useProductStore();
    const toast=useToast()
    const handleDeleteProduct=async (pid)=>{
        const {success,message}=deleteProduct(pid);
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
    }
    const handleUpdateProduct = async (pid,product)=>{
        const { success, message }=await updateProduct(pid,product);
        onClose();
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
    }
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <div 
            style={{
            height: "400px", 
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", 
            transition: "box-shadow 0.3s ease-in-out",
            borderRadius: "20px"
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0px 0px 20px rgba(100, 100, 150, 0.8)"}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0px 0px 0px rgba(100, 150, 100, 0.9)"}
        >
                <div style={{margin:"20px",minHeight:"360px", borderRadius:"20px"}}>
                    <Image height="200px" borderRadius={"10px"} width={"full"} src={product.image}></Image>
                    <br></br>
                    <Text fontSize={"30px"} fontWeight={"bold"}>{product.name}</Text>
                    <Text fontSize={"15px"} fontWeight={"bold"}>price : <span style={{fontSize:"25px"}}>₹{product.price}</span>/-</Text>
                    <IconButton marginTop={"20px"} marginRight={"10px"} color={"blue"} onClick={onOpen}><CiSquarePlus /></IconButton>
                    <IconButton marginTop={"20px"} color={"red"} onClick={()=>handleDeleteProduct(product._id)}><MdDeleteOutline /></IconButton>
                </div>
                <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Update Product</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Input placeholder="Product Name" type="text" name="name" marginBottom={"10px"} value={updatedProduct.name} onChange={(e)=>{
                            setupdateProduct({...updatedProduct,name:e.target.value})
                            }}>
                            </Input>
                            <Input placeholder="Price" type="number" name="price" marginBottom={"10px"} value={updatedProduct.price} onChange={(e)=>{
                            setupdateProduct({...updatedProduct,price:e.target.value})
                            }}>
                            </Input>
                            <Input placeholder="Image URl" type="text" name="image" value={updatedProduct.image}onChange={(e)=>{
                            setupdateProduct({...updatedProduct,image:e.target.value})
                            }}>
                            </Input>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={()=>handleUpdateProduct(updatedProduct._id,updatedProduct)}>Update</Button>
                            <Button onClick={onClose}>
                            Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
        </div>

   )
};

export default ProductCard;