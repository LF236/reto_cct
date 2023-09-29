import ReactDom from 'react-dom/client';
import CtcApp from './components/CtcApp';
const root = document.querySelector( '#root' );

ReactDom.createRoot( root! ).render(
    <CtcApp />
);
