import CHeader from '../../atoms/header/CHeader';
import Footer from '../../atoms/footer/Footer';
import { Outlet } from 'react-router-dom';

export default function CHeaderLayout () {
    return(
        <> 
            <CHeader/>
            <Outlet/>
            <Footer/>
        </>
    )
}