import { ROUTERS } from "./utils/router";
import{Routes,Route} from "react-router-dom"


import MasterLayout from "./pages/user/theme/masterLayout";
import Profile from "./pages/user/profilepage";
import Home from "./pages/user/homepage";
import Product from "./pages/user/productpage";
import Contact from "./pages/user/contactpage";
function renderUserRouter() {
    const userRouters = [
        {
        path:ROUTERS.USER.HOME,
        component:<Home/>
    },
    {
        path:ROUTERS.USER.PROFILE,
        component:<Profile/>
    },
    {
        path:ROUTERS.USER.PRODUCT,
        component:<Product/>
    },
    {
        path:ROUTERS.USER.CONTACT,
        component:<Contact/>
    },

]
    return ( 
    
    <MasterLayout>
        <Routes>
            {
                userRouters.map((item,key)=>(<Route key={key} path={item.path} element={item.component} />)
                    )
            }
        </Routes>
    </MasterLayout>
    )
}


function RouterCustom() {
    return  renderUserRouter() ;
}

export default RouterCustom;