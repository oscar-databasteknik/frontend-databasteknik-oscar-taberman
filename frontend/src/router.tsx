import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CenterLayout from "./layouts/CenterLayout";
import NotFound from "./pages/NotFound";


export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                handle: { title: "Home" },
                element: <HomePage />
            },
            {
                path: "/about",
                handle: { title: "About" },
                element: <AboutPage />
            },
        ]
    },
    {
        element: <CenterLayout />,
        children: [
            {
                path: "*",
                handle: { title: "Not Found" },
                element: <NotFound />
            },
        ]
    },


]);