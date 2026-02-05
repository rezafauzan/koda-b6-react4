import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Contact = () => {
    return (
        <>
            <div className="container flex flex-col gap-4 lg:gap-16 max-w-360 mx-auto">
                <Navbar />
                <section className="text-white min-h-100 flex flex-col items-center gap-4 p-4 mt-16">
                    <div className="flex flex-col justify-center items-center text-center w-[80%]">
                        <h2 className="text-4xl font-bold">Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias iure, libero porro, fuga quasi, minus autem modi nisi illo quas voluptatem quam aperiam sunt reprehenderit quibusdam tempora! Delectus, atque?</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 w-full p-4">
                        <form className="flex flex-col gap-4 flex-1 mx-auto p-4 rounded w-full">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" className="border border-white p-4 rounded" placeholder="rezafauzan945@gmail.com" />
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" className="border border-white p-4 rounded" placeholder="Reza Fauzan" />
                            <label for="phone">Phone</label>
                            <input type="text" name="phone" id="phone" className="border border-white p-4 rounded" placeholder="+628511224477" />
                            <label for="message">Message</label>
                            <textarea type="text" name="message" id="message" className="border border-white p-4 rounded" placeholder="Your message" />
                            <button type="submit" className="p-4 bg-white text-black rounded cursor-pointer">Send</button>
                        </form>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}
export default Contact