import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

const Hero = () => {
    return (
        <section className="text-white min-h-100 h-screen max-h-180 bg-[url(/assets/img/pexels-jasmine-xie-159587902-10887389.jpg)] bg-cover bg-center w-full">
            <div className="bg-black/40 w-full min-h-100 h-screen max-h-180 flex flex-col justify-center items-center">
                <h1 className="text-xl lg:text-9xl font-bold">The Great City</h1>
                <p>Wander often, wonder always</p>
            </div>
        </section>
    )
}

const About = () => {
    return (
        <section className="text-white min-h-100 lg:h-screen flex flex-col items-center gap-4 p-4">
            <div className="flex flex-col justify-center items-center text-center w-[80%]">
                <h2 className="text-4xl font-bold">Explore the world</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe at reiciendis architecto tempore placeat sequi maxime suscipit quibusdam numquam, consectetur mollitia est nesciunt sapiente quos nisi impedit commodi! Officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, esse ducimus? Doloremque, ex? Perferendis tenetur qui nulla id! Quibusdam dolorum et blanditiis explicabo laborum cumque voluptatibus similique! Maiores, id perferendis?</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                <div className="relative h-full flex-1 rounded overflow-hidden">
                    <img src="/assets/img/pexels-asrul-anuar-1264483-2408632.jpg" alt="Panoramic 1" className="h-100 w-80"/>
                    <div className="flex flex-col justify-end item-center text-center p-4 absolute top-0 right-0 left-0 bottom-0 bg-black/40">
                        <h3 className="text-xl font-bold">Lorem, ipsum.</h3>
                        <p>Lorem.</p>
                    </div>
                </div>
                <div className="relative h-full flex-1 rounded overflow-hidden">
                    <img src="/assets/img/pexels-jasmine-xie-159587902-10836116.jpg" alt="Panoramic 2" className="h-100 w-80"/>
                    <div className="flex flex-col justify-end item-center text-center p-4 absolute top-0 right-0 left-0 bottom-0 bg-black/40">
                        <h3 className="text-xl font-bold">Lorem, ipsum.</h3>
                        <p>Lorem.</p>
                    </div>
                </div>
                <div className="relative h-full flex-1 rounded overflow-hidden">
                    <img src="/assets/img/pexels-serena-xu-2150765651-31316830.jpg" alt="Panoramic 3" className="h-100 w-80"/>
                    <div className="flex flex-col justify-end item-center text-center p-4 absolute top-0 right-0 left-0 bottom-0 bg-black/40">
                        <h3 className="text-xl font-bold">Lorem, ipsum.</h3>
                        <p>Lorem.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Journal = () => {
    return (
        <section className="text-white min-h-100 lg:h-screen flex flex-col items-center gap-4 p-4">
            <div className="flex flex-col justify-center items-center text-center w-[80%]">
                <h2 className="text-4xl font-bold">The Journal</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias iure, libero porro, fuga quasi, minus autem modi nisi illo quas voluptatem quam aperiam sunt reprehenderit quibusdam tempora! Delectus, atque?</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                <div className="h-full flex-1 rounded overflow-hidden">
                    <img src="/assets/img/pexels-asrul-anuar-1264483-2408632.jpg" alt="Panoramic 1" className="h-70 w-full object-cover"/>
                    <div className="flex flex-col justify-end item-center text-center p-4">
                        <h3 className="text-xl font-bold">Lorem, ipsum.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore esse doloribus corporis eveniet alias beatae animi ab sapiente optio odio quis ipsam architecto, sint quasi, debitis corrupti, atque blanditiis mollitia!</p>
                    </div>
                </div>
                <div className="h-full flex-1 rounded overflow-hidden">
                    <img src="/assets/img/pexels-jasmine-xie-159587902-10836116.jpg" alt="Panoramic 2" className="h-70 w-full object-cover"/>
                    <div className="flex flex-col justify-end item-center text-center p-4">
                        <h3 className="text-xl font-bold">Lorem, ipsum.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore esse doloribus corporis eveniet alias beatae animi ab sapiente optio odio quis ipsam architecto, sint quasi, debitis corrupti, atque blanditiis mollitia!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const BigImage = () => {
    return (
        <section className="text-white min-h-100 h-screen max-h-180 w-full flex-1 flex flex-col items-center gap-4 p-4">
            <img src="/assets/img/pexels-jasmine-xie-159587902-10836116.jpg" alt="Big Image" className="flex-1 min-h-100 h-screen w-full"/>
        </section>
    )
}

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

const Home = () => {
    return (
        <>
            <div className="container flex flex-col gap-4 lg:gap-16 max-w-360 mx-auto">
                <Navbar />
                <Hero />
                <About />
                <Journal />
                <BigImage />
                <Footer />
            </div>
        </>
    )
}
export default Home