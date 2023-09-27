import Header from "../component/Header";

function DefaultLayout({ children }) {
    return (
        <div className="header">
            <Header />
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;