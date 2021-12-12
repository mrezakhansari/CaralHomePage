import React from 'react';
export default class App extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="single-page-nav sticky-wrapper" id="tmNavbar">
                            <ul className="nav navbar-nav">
                                <li><a href="#section1">Homepage</a></li>
                                <li><a href="#section2">About Us</a></li>
                                <li><a href="#section3">Services</a></li>
                                <li><a href="#section4">Contact</a></li>
                                <li>
                                    <a
                                        href="http://www.google.com/+templatemo"
                                        className="external"
                                        title="+templatemo page"
                                        target="_blank"
                                    >External</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div id="section1">
                    <header id="header-area" className="intro-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <div className="header-content">
                                        <h1>CONQUER</h1>
                                        <h4>Simple Bootstrap Template</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                <div id="section2">
                    <section id="feature-area" className="about-section">
                        <div className="container">
                            <div className="row text-center inner">
                                <div className="col-sm-4">
                                    <div className="feature-content">
                                        <img src="img/1-1.jpg" alt="Image" />
                                        <h2 className="feature-content-title green-text">
                                            Bootstrap v3.3.6
                                        </h2>
                                        <p className="feature-content-description">
                                            Morbi sagittis justo a velit placerat ullamcorper quis quis
                                            velit. Sed convallis at risus ullamcorper auctor. Praesent
                                            quis velit neque. Quisque semper porta nisi vitae suscipit.
                                            Duis lectus magna, ornare ac scelerisque.
                                        </p>
                                        <a href="#" className="feature-content-link green-btn"
                                        >button green</a
                                        >
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="feature-content">
                                        <img src="img/1-2.jpg" alt="Image" />
                                        <h2 className="feature-content-title blue-text">
                                            Responsive Design
                                        </h2>
                                        <p className="feature-content-description">
                                            Conquer Template is provided by templatemo for free of charge.
                                            You can use this template for any kind of website. No credit
                                            link is required. All images by
                                            <a href="http://unsplash.com" target="_parent">Unsplash</a>.
                                            Thank you for visiting our website. Please come again!
                                        </p>
                                        <a href="#" className="feature-content-link blue-btn"
                                        >See Details</a
                                        >
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="feature-content">
                                        <img src="img/1-3.jpg" alt="Image" />
                                        <h2 className="feature-content-title red-text">Parallax Layout</h2>
                                        <p className="feature-content-description">
                                            Morbi sagittis justo a velit placerat ullamcorper quis quis
                                            velit. Sed convallis at risus ullamcorper auctor. Praesent
                                            quis velit neque. Quisque semper porta nisi vitae suscipit.
                                            Duis lectus magna, ornare ac scelerisque.
                                        </p>
                                        <a href="#" className="feature-content-link red-btn">Button Red</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="blog-area">
                        <div className="container">
                            <div className="row text-center inner">
                                <div className="col-sm-6">
                                    <div className="blog-content">
                                        <img src="img/2-1.jpg" alt="Image" />
                                        <h2>Two Column Left Side</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                            tempor eros eget eros maximus, ut cursus sem euismod. Donec
                                            iaculis tristique odio at consectetur. Nullam dignissim varius
                                            suscipit. Sed in leo sit amet velit finibus pretium.<br /><br />
                                            Vestibulum vel mauris at erat mattis accumsan et ac lorem.
                                            Cras non venenatis orci, sed tincidunt massa. Duis nisl
                                            lectus, auctor eu sodales at, dignissim eu orci. Sed vitae
                                            venenatis magna, in blandit metus.
                                        </p>
                                        <br />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="blog-content">
                                        <img src="img/2-2.jpg" alt="Image" />
                                        <h2>Two Column Right Side</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                            tempor eros eget eros maximus, ut cursus sem euismod. Donec
                                            iaculis tristique odio at consectetur. Nullam dignissim varius
                                            suscipit. Sed in leo sit amet velit finibus pretium.<br /><br />
                                            Vestibulum vel mauris at erat mattis accumsan et ac lorem.
                                            Cras non venenatis orci, sed tincidunt massa. Duis nisl
                                            lectus, auctor eu sodales at, dignissim eu orci. Sed vitae
                                            venenatis magna, in blandit metus.
                                        </p>
                                        <span><a href="#">read more</a></span
                                        ><br />
                                        <p id="blofr"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div id="section3">
                    <section id="services-area" className="services-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-center inner our-service">
                                    <div className="service">
                                        <h1>Our Services</h1>
                                        <p>
                                            Nunc diam leo, fringilla vulputate elit lobortis, consectetur
                                            vestibulum quam. Sed id <br />
                                            felis ligula. In euismod libero at magna dapibus, in rutrum
                                            velit lacinia. <br />
                                            Etiam a mi quis arcu varius condimentum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="testimornial-area">
                        <div className="container">
                            <div className="row text-center">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                                    <div className="testimonial-content">
                                        <img src="img/4-1.jpg" alt="Image" />
                                        <h2>Column One</h2>
                                        <p>
                                            Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui
                                            libero, in tincidunt purus pretium quis. Fusce posuere egestas
                                            enim eu viverra.
                                        </p>
                                        <br />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                                    <div className="testimonial-content">
                                        <img src="img/4-2.jpg" alt="Image" />
                                        <h2>Column Two</h2>
                                        <p>
                                            Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui
                                            libero, in tincidunt purus pretium quis.
                                        </p>
                                        <a href="#" className="content-link">read it</a>
                                        <br />
                                        <p id="redd"></p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                                    <div className="testimonial-content">
                                        <img src="img/4-3.jpg" alt="Image" />
                                        <h2>Column Three</h2>
                                        <p>
                                            Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui
                                            libero, in tincidunt purus pretium quis. Fusce posuere egestas
                                            enim eu viverra.
                                        </p>
                                        <br />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                                    <div className="testimonial-content">
                                        <img src="img/4-4.jpg" alt="Image" />
                                        <h2>Column Four</h2>
                                        <p>
                                            Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui
                                            libero, in tincidunt purus pretium quis.
                                        </p>
                                        <a href="#" className="content-link">details</a>
                                        <br />
                                        <p id="dets"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="tm-box">
                                        <img src="img/4-5.jpg" alt="Image" className="img-responsive" />
                                        <div className="tm-box-description">
                                            <h2>One Big Column</h2>
                                            <p className="tm-box-p">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                                tempor eros eget eros maximus, ut cursus sem euismod. Donec
                                                iaculis tristique odio at consectetur. Nullam dignissim
                                                varius suscipit. Sed in leo sit amet velit finibus pretium.
                                                Vivamus dictum nisi ac fermentum interdum. Vestibulum vel
                                                mauris at erat mattis accumsan et ac lorem. Cras non
                                                venenatis orci, sed tincidunt massa. Duis nisl lectus,
                                                auctor eu sodales at, dignissim eu orci. Sed vitae venenatis
                                                magna, in blandit metus. Praesent volutpat cursus rhoncus.
                                                Aenean arcu diam, suscipit ac neque in, sollicitudin
                                                convallis orci.
                                            </p>
                                            <p className="tm-box-p">
                                                Fusce eu porta massa, sed tincidunt turpis. Cum sociis
                                                natoque penatibus et magnis dis parturient montes, nascetur
                                                ridiculus mus. Vivamus a urna tellus. Integer pharetra vitae
                                                nisi et lacinia. Morbi sagittis justo a velit placerat
                                                ullamcorper quis quis velit. Sed convallis at risus
                                                ullamcorper auctor. Praesent quis velit neque. Quisque
                                                semper porta nisi vitae suscipit. Duis lectus magna, ornare
                                                ac scelerisque quis, maximus eget nisi.
                                            </p>
                                            <a href="#" className="content-link">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div id="section4">
                    <section id="contact-area" className="contact-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-center inner">
                                    <div className="contact-content">
                                        <h1>contact form</h1>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <p>
                                                    Nunc diam leo, fringilla vulputate elit lobortis,
                                                    consectetur vestibulum quam. Sed id <br />
                                                    felis ligula. In euismod libero at magna dapibus, in
                                                    rutrum velit lacinia. <br />
                                                    Etiam a mi quis arcu varius condimentum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <form action="#" method="post" className="contact-form">
                                        <div className="col-sm-6 contact-form-left">
                                            <div className="form-group">
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Name"
                                                />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    id="mail"
                                                    placeholder="Email"
                                                />
                                                <input
                                                    name="subject"
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder="Subject"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 contact-form-right">
                                            <div className="form-group">
                                                <textarea
                                                    name="message"
                                                    rows="6"
                                                    className="form-control"
                                                    id="comment"
                                                    placeholder="Your message here..."
                                                ></textarea>
                                                <button type="submit" className="btn btn-default">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <footer id="footer-area">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-sm-12">
                                <div className="footer-content">
                                    <h1>Use it free!</h1>
                                    <p>
                                        “Conquer is free Bootstrap template from templatemo website.
                                        <br />No backlink is required to use this layout.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <p className="copy">Copyright © 2084 Your Company Name</p>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}
