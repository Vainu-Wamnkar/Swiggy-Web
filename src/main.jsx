import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "../src/index.css"
import {BrowserRouter} from "react-router-dom"
import store from './utils/store.js'
import {Provider} from "react-redux"
import {Toaster} from "react-hot-toast"

createRoot(document.getElementById('root')).render(

        <Provider store={store}>
            <BrowserRouter>
                 <App/>
                 <Toaster/>
            </BrowserRouter>
        </Provider>
)

