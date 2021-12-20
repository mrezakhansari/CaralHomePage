import React from 'react';
import "./assets/css/custom.css";
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
                        <div  className="single-page-nav sticky-wrapper" id="tmNavbar">
                            <ul className="nav navbar-nav">
                                <li><a href="#section4">تماس با ما</a></li>
                                <li><a href="#section3">مزایا</a></li>
                                <li><a href="#section2">درباره ی ما</a></li>
                                <li><a href="#section1">خانه</a></li>
                                {/* <li>
                                    <a
                                        href="http://www.google.com/+templatemo"
                                        className="external"
                                        title="+templatemo page"
                                        target="_blank"
                                    >External</a>
                                </li> */}
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
                                        <img src="img/2-1.png" alt="Image" />
                                        <h2>درخواست جابجایی خودرو</h2>
                                        <p style={{ textAlign: "justify", justifyContent: "right", justifyItems: "right", direction: 'rtl' }}>
                                            حتی اگر شما تمام سعی خود را می کنید که هیچ وقت خودرو خود را در محل نامناسب یا بصورت دوبل یا جلوی درب پارکینگ و یا بطور کلی با مزاحمت برای سایرین پارک ننمایید. همچنان احتمال آن زیاد است که به واسطه پارک سالمی که انجام داده اید و پس از جابجایی خودرو های عقب و جلوی خودرو شما، ماشین های پیرامونتان با پارک در تنگنا مواجه شده و در زمان خروج از پارک به خودرو شما برخورد نموده و ایجاد خسارت هایی مانند ایجاد خوردگی رنگ در سپر یا بعضا شکستگی چراغ خودرو، نمایند زیاد است.
                                            با استفاده از لیبلهای کارال امکان درخواست جهت جابجایی خودرو را برای سایرین میسر نمایید
                                        </p>
                                        <br />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="blog-content">
                                        <img src="img/2-2.png" alt="Image" />
                                        <h2>اعلام آلودگی صدای دزدگیر، نشتی از خودرو، باز بودن درب یا پنجره خودرو</h2>
                                        <p style={{ textAlign: "justify", justifyContent: "right", justifyItems: "right", direction: 'rtl' }}>
                                            در این موارد جدای از مشکلاتی مانند آلودگی صوتی ایجاد شده برای سایرین، مشکلاتی از قبیل اتمام شارژ باطری خودرو و یا بالا رفتن ریسک سرغت خودرو یا تجهیزات جانبی آن، نیز برای صاحبان خودرو ایجاد می گردد که افراد می توانند با ارسال یک پیغام ساده مالک خودرو را از ایجاد چنین ضررهایی جلوگیری نمایند.
                                            همچنین در موارد دیگری مانند تصادف بعد از پارک خودرو یا روشن ماندن چراغ داخل یا بیرون خودرو نیز می توان راننده یا مالک خودرو را از وضعیتهای پیش آمده با استفاده از این ابزار مطلع نمود.
                                        </p>
                                        <br />
                                        
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
                                        <h1>مزایای استفاده از کارال</h1>
                                        <p>
                                        رفع دغدغه های فکری در زمان پارک های نا مناسب <br />
                                        کاهش چشم گیر درگیری های ناشی از پارک های نا مناسب <br />
                                        کاهش آلودگی صوتی در محل پارکینگ ها و مکان های عمومی <br />
                                        امکان ارتقاء جایگاه مسئولیت اجتماعی در حوزه حمل و نقل <br />
                                        امکان اطلاع رسانی به صاحبان خودرو تنها با استفاده از دوربین گوشی <br/>
                                        کاهش احتمال ضررهای مالی در زمان حواس پرتی بعد از ترک کردن خودرو <br />
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
                                        <h1>تماس با ما</h1>
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
                                                <textarea
                                                    name="message"
                                                    rows="6"
                                                    className="form-control"
                                                    id="comment"
                                                    dir='rtl'
                                                    placeholder="متن پیام ..."
                                                ></textarea>
                                                <button type="submit" className="btn btn-default">Send</button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 contact-form-right">
                                            <div className="form-group">
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="نام و نام خانوادگی"
                                                    dir='rtl'
                                                />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    id="mail"
                                                    placeholder="آدرس الکترونیکی"
                                                />
                                                <input
                                                    name="subject"
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder="موضوع"
                                                    dir='rtl'
                                                />
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
