import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="text-white flex flex-col items-center gap-4 p-4">
            <ul className="flex flex-col lg:flex-row justify-center items-center gap-4">
                <li>© 2026 Website React-Router-Dom by <a href="https://github.com/rezafauzan/" className="animate-ping">Reza Fauzan</a></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </footer>
    )
}

export default Footer