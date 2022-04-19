import logo from './img/profile.jpg';

function Header() {
  return (
    <>
        <header className="text-white bg-dark">
            <div className="container py-5">
                <div className="row">
                    <div className="col-xs-3 col-lg-2 text-center">
                        <img src={logo}
                            alt="Image" className="border border-5 rounded-circle img-fluid" style={{ width: "150px", height: "150px" }} />
                    </div>
                    <div className="col text-center text-lg-start">
                        <h1>Yousung Park</h1>

                        <p className="lead">Junior Software developer</p>

                        <ul className="list-inline">
                            <li className="list-inline-item my-2"><a href="#" className="fs-5 link-light text-decoration-none"><i
                                className="bi bi-envelope pe-1"></i>
                                <span className="text-center">yousung621@gmail.com</span></a></li>
                            <li className="list-inline-item my-2"><a href="#" className="fs-5 link-light text-decoration-none"><i
                                className="bi bi-linkedin pe-1"></i>
                                www.linkedin.com/in/yousungpark</a></li>
                            <li className="list-inline-item my-2"><a href="#" className="fs-5 link-light text-decoration-none"><i
                                className="bi bi-github pe-1"></i>
                                </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>
);
}

export default Header;
