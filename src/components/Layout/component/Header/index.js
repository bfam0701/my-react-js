import images from "../../../../assets/images"
import '@fortawesome/fontawesome-free/css/all.min.css';



function Header() {

    return (
        <h2 className="wrapper">
            <div className="inner">
                <div className="wrapper-logo">
                    <img
                        src={images.logo}
                        alt="tiktok"
                    />
                </div>
                <div className="wrapper-search">
                    <input
                        className="wrapper-search-input"
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                    />
                    <button className="wrapper-search-clear">
                        <i class="fa-solid fa-circle-xmark"></i>
                    </button>

                    <i className="fa-solid fa-spinner wrapper-search-loading"></i>

                    <span></span>
                    <button className="wrapper-search-btn">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className="wrapper-actions">

                </div>
            </div>

        </h2>
    )

}

export default Header