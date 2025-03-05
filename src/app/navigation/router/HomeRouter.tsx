import { Route, Routes } from "react-router-dom"
import { RoutePath } from "../config/RouteConfig"
import Home from "../../pages/home/Home"
import Contact from "../../pages/contact/Contact"
import HireMe from "../../pages/hireMe/HireMe"

const HomeRouter = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<Home />}/>
            <Route path={RoutePath.CONTACT} element={<Contact />}/>
            <Route path={RoutePath.HIRE_ME} element={<HireMe />}/>
        </Routes>
    )
}

export default HomeRouter