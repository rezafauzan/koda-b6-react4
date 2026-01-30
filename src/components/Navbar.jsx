import { Link } from "react-router-dom"

const Navbar = () => {
    return (
    <nav className="flex justify-center items-center gap-4 bg-black/40 text-white h-16">
        <ul className="flex justify-between items-center gap-4">
            <li>
                <Link to="/" className="text-white/40 hover:text-white">Home</Link>
            </li>
            <li>
                <Link to="/about" className="text-white/40 hover:text-white">About</Link>
            </li>
            <li>
                <Link to="/contact" className="text-white/40 hover:text-white">Contact Us</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar