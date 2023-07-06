import Header from "../atoms/header/Header";
import Footer from "../atoms/footer/Footer";
import { Outlet } from 'react-router-dom';


//혜진 - Header와 Footer를 넣고 싶은 곳에만 넣을 수 있도록 도와줍니다.
export default function MainLayout () {
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}