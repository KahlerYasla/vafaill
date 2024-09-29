import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LayoutContainer } from "./modules/Layout"
import { HomeContainer } from "./modules/Home"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutContainer />}>
                    {/* <Route path="product/:id" element={<ProductContainer />} /> */}
                    <Route path="" element={<HomeContainer />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
