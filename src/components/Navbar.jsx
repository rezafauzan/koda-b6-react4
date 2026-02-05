import { Link } from "react-router-dom"

const Navbar = () => {
    return (
    <nav className="flex justify-center items-center gap-4 text-white h-16 absolute top-0 right-0 left-0">
        <ul className="flex justify-between items-center gap-4">
            <li>
                <Link to="/" className="text-white hover:text-white/40">Home</Link>
            </li>
            <li>
                <Link to="/about" className="text-white hover:text-white/40">About</Link>
            </li>
            <li>
                <Link to="/contact" className="text-white hover:text-white/40">Contact Us</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar