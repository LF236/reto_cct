import ReactDom from 'react-dom/client';
import CtcApp from './CtcApp';
import './index.css';
const root = document.querySelector( '#root' );

ReactDom.createRoot( root! ).render(
    <CtcApp />
);