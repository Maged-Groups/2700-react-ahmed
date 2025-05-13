import { Route, Routes } from "react-router";

import Home from "./Home";

import Cart from "./Cart";

import About from "./About";

// Marketplace
import Marketplace from "./Marketplace";
import Product from "./Product";

// Services
import Services from "./Services";
import MobileApps from '../components/pages/services/MobileApps'
import WebApps from "../components/pages/services/WebApps";
import DesktopApps from "../components/pages/services/DesktopApps";
import DigitalMarketing from "../components/pages/services/DigitalMarketing";

import P404 from "./P404";
import Categories from "./Categories";
import LoginForm from "./LoginForm";

export default function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<LoginForm />} />

            <Route path="/about" element={<About />} />

            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/marketplace/:id" element={<Product />} />

            <Route path="/categories/:slug" element={<Categories />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/services" element={<Services />}>
                <Route path="mobile-apps" element={<MobileApps />} />
                <Route path="web-apps" element={<WebApps />} />
                <Route path="desktop-apps" element={<DesktopApps />} />
                <Route path="digital-marketing" element={<DigitalMarketing />} />
            </Route>

            <Route path="*" element={<P404 />} />
        </Routes>
    )
}