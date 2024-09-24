import { IoIosAdd } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header=()=>{
    const {colorMode,toggleColorMode}= useColorMode();
    return(
        <>
            <div style={{minHeight:"10%",display:"flex",flexDirection:"row",fontFamily:"cursive",fontWeight:"bold",marginLeft:"30px",marginRight:"30px",backgroundColor:"green",borderRadius:"20px",marginTop:"30px"}}>
                <div style={{flex:1,alignSelf:"flex-start",width:"200px"}}>
                    <Link to={"/HomePage"}>
                    <p style={{fontSize: "50px",
                            paddingLeft: "20px",
                            backgroundImage: "linear-gradient(#000, #900,#450)",
                            WebkitBackgroundClip: "text",
                            color: "transparent"}}>ProductCart 🛒</p>
                    </Link>
                </div>
                <div style={{flex:1,display:"flex",alignContent:"flex-end",justifyContent:"right"}}>
                    <Link to={"/"}>
                        <div style={{marginTop:"15px"}}>
                            <Button  style={{backgroundColor:"green"}}>
                                <IoIosAdd style={{height:"50px",width:"50px"}} />
                            </Button>
                        </div>
                    </Link>
                    <div style={{}}>
                        <MdLightMode onClick={toggleColorMode} style={{height:"50px",width:"50px",paddingTop:"20px",paddingRight:"20px"}} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header

