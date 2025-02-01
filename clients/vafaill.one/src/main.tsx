import ReactDOM from "react-dom/client"
import "./index.css"

// Client-side routing
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LayoutView, NotFoundView } from "./modules/layout"

// Routed Components

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutView />}>
                    {/* <Route index element={<LoginView />} />
                    <Route path="home" element={<HomeView />} /> */}
                    <Route path="*" element={<NotFoundView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

root.render(<App />)
