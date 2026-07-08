

import { Navigate } from "react-router-dom"

const ProductRoutes = ({children}) => {
    const getdata = JSON.parse(localStorage.getItem("currentuser"))
    return getdata ? children : <Navigate to="/assignment20/task" />
  
}

export default ProductRoutes
