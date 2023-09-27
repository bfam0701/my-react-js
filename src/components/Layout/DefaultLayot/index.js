import Header from "../component/Header";
import Slidebar from "./Slidebar";
import "./DefaultLayout.scss"

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <Slidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;