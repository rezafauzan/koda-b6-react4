import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const About = () => {
    return (
        <>
            <div className="container flex flex-col gap-4 lg:gap-16 max-w-360 mx-auto">
                <Navbar />
                <section className="text-white min-h-100 lg:h-screen flex flex-col items-center gap-4 p-4 mt-16">
                    <div className="flex flex-col justify-center items-center text-center w-[80%]">
                        <h2 className="text-4xl font-bold">About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias iure, libero porro, fuga quasi, minus autem modi nisi illo quas voluptatem quam aperiam sunt reprehenderit quibusdam tempora! Delectus, atque?</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                        <div className="h-full flex-1 rounded overflow-hidden">
                            <img src="/assets/img/pexels-asrul-anuar-1264483-2408632.jpg" alt="Panoramic 1" className="h-70 w-full object-cover" />
                            <div className="flex flex-col justify-end item-center text-center p-4">
                                <h3 className="text-xl font-bold">Lorem, ipsum.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore esse doloribus corporis eveniet alias beatae animi ab sapiente optio odio quis ipsam architecto, sint quasi, debitis corrupti, atque blanditiis mollitia!</p>
                            </div>
                        </div>
                        <div className="h-full flex-1 rounded overflow-hidden">
                            <img src="/assets/img/pexels-jasmine-xie-159587902-10836116.jpg" alt="Panoramic 2" className="h-70 w-full object-cover" />
                            <div className="flex flex-col justify-end item-center text-center p-4">
                                <h3 className="text-xl font-bold">Lorem, ipsum.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore esse doloribus corporis eveniet alias beatae animi ab sapiente optio odio quis ipsam architecto, sint quasi, debitis corrupti, atque blanditiis mollitia!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}
export default About