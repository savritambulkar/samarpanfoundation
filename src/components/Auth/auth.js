import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Auth({children}){
   const navigate = useNavigate();
   const {isLoggedIn} = useSelector((store)=>store.User);
   if(isLoggedIn)
    return children;
   navigate("Login");
}

export default Auth;
