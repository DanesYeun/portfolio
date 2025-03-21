import { BrowserRouter } from "react-router-dom"
import Layout from "./app/layout/Layout"
import HomeRouter from "./app/navigation/router/HomeRouter"

function App() {

    return (
        <BrowserRouter basename="/portfolio">
            <Layout>
                <HomeRouter />
            </Layout>
        </BrowserRouter>     
    )
}

export default App
