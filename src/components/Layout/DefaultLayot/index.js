import Header from "../component/Header";
import Slidebar from "./Slidebar";


function DefaultLayout({ children }) {
    return (
        <div className="header">
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