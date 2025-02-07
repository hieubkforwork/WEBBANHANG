
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import RouterCustom from './router';
import"./styles/style.scss";
import"./styles/index.css";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <RouterCustom/>
  </BrowserRouter>
)
