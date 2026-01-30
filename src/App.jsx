import "./pages/Home"
import "./pages/About"
import "./pages/Contact"
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/contact',
            element: <Contact />
        }
    ]
)

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
