import { Link } from "react-router-dom"
import { RoutePath } from "../navigation/config/RouteConfig"
import picture from '../../assets/images/pfp.jpg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="flex-1 text-start">
                <code>
                    <Link to={RoutePath.HOME} className="btn btn-ghost hover:bg-transparent text-primary hover:font-bold uppercase">
                        <div className="avatar">
                            <div className="w-8 rounded">
                                <img
                                src={picture}
                                alt="avatar" />
                            </div>
                        </div>
                        <span className="hidden md:block">clifford Danes yaun</span>
                    </Link>
                </code>
            </div>
            <div className="flex-none">
                <code>
                    <ul className="menu menu-horizontal px-1 md:px-8">
                        <li><Link to={RoutePath.CONTACT} className="text-black hover:text-black text-lg uppercase">Contact</Link></li>
                        <li><Link to={RoutePath.HIRE_ME} className="text-black hover:text-black text-lg uppercase">Hire Me</Link></li>
                    </ul>
                </code>
            </div>
        </div>
    )
}

export default Navbar