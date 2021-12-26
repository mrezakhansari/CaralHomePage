import React from 'react';
import { toast } from 'react-toastify';
import "./assets/css/custom.css";
import 'react-toastify/dist/ReactToastify.css';
import { Check } from 'react-feather';
import { BrowserRouter, Link, NavLink, Router, Route, Routes, Redirect } from 'react-router-dom';

toast.configure({ bodyClassName: "customFont" });

export default class App extends React.Component {
    handleSendFeedBack = () => {
        return toast.success('با سپاس از نظر شما. در اولین فرصت نظر شما به اطلاع همکارانمان خواهد رسید')
    }

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
                            <ul className="nav navbar-nav" dir="rtl">
                                <li>
                                    <a
                                        href="http://caralapp.ir/registerDriver"
                                        className="external"
                                        title="سفارش"
                                        target="_blank"
                                    >سفارش محصول</a>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="#section4">
                                        تماس با ما
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="#section3">
                                        مزایا
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="#section2">
                                        درباره ی ما
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="#section1">
                                        خانه
                                    </NavLink>
                                </li>
                                {/* <li><a href="#section4">تماس با ما</a></li>
                                <li><a href="#section3">مزایا</a></li>
                                <li><a href="#section2">درباره ی ما</a></li>
                                <li><a href="#section1">خانه</a></li> */}

                            </ul>
                        </div>
                    </div>
                </nav>

                <div id="section1">
                    <header id="header-area" className="intro-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-right">
                                    <div className="header-content">
                                        <h1>کارال</h1>
                                        <h4 style={{ color: "red" }}>ارتباط با راننده خودرو</h4>
                                        <h4 style={{ color: "red" }}>با حفظ حریم شخصی</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                <div id="section2">
                    <section id="feature-area" className="about-section">
                        <div className="container">
                            <div className="row text-center">
                                <div className="col-lg-12 col-xs-12">
                                    <div className="tm-box">
                                        <img src="img/4-5.png" alt="Image" className="img-responsive" />
                                        <div className="tm-box-description">
                                            <h2 className="tm-box-p">

                                                شرکت نوآوران مسیر شهر نوین کارا، توسعه دهنده راهکارهای حوزه شهر هوشمند برای شهروندان جهت تسهیل امور و رویه های معمول زندگی

                                            </h2>
                                            {/* <a href="#" className="content-link">Read More</a> */}
                                        </div>
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
                                        <div className="row">
                                            <div className="col-xs-6 col-md-6 col-xs-offset-2 col-md-offset-2">
                                                <p style={{ textAlign: 'right', color: 'white', direction: 'rtl' }}> <Check color="green" size={20} /> رفع دغدغه های فکری در زمان پارک های نا مناسب </p>
                                                <p style={{ textAlign: 'right', color: 'white', direction: 'rtl' }}> <Check color="green" size={20} /> کاهش چشم گیر درگیری های ناشی از پارک های نا مناسب </p>
                                                <p style={{ textAlign: 'right', color: 'white', direction: 'rtl' }}> <Check color="green" size={20} /> کاهش آلودگی صوتی در محل پارکینگ ها و مکان های عمومی </p>
                                                <p style={{ textAlign: 'right', color: 'white', direction: 'rtl' }}> <Check color="green" size={20} /> امکان ارتقاء جایگاه مسئولیت اجتماعی در حوزه حمل و نقل </p>
                                                <p style={{ textAlign: 'right', color: 'white', direction: 'rtl' }}> <Check color="green" size={20} /> امکان اطلاع رسانی به صاحبان خودرو تنها با استفاده از دوربین گوشی </p>
                                                <p style={{ textAlign: 'right', color: 'white', direction: 'rtl' }}> <Check color="green" size={20} /> کاهش احتمال ضررهای مالی در زمان حواس پرتی بعد از ترک کردن خودرو </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="testimornial-area">
                        <div className="container">
                            <div className="row text-center">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                                    {/* <div className="testimonial-content">
                                        
                                    </div> */}
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
                                                <p style={{ textAlign: "right" }}>
                                                    ما مشتاق هستیم، از نظرات شما جهت بهبود خدمات و محصولاتمان آگاه شده و در جهت بهبود آنها از دیدگاه شما باخبر شویم.<br />
                                                    ما را از ارسال نظرات و دیدگاه خود بی بهره ننمایید
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
                                                <button type="button" onClick={this.handleSendFeedBack} className="btn btn-default">ارسال</button>
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
                                    <h1>آدرس ما</h1>
                                    <p>
                                        “تهران ، تهرانپارس، خیابان 196
                                        غربی، پلاک 190 واحد 5
                                        شماره تماس 021-77291340
                                        شماره همراه: 09903838648”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <p className="copy">Copyright © 2084 Your Company Name</p>
                            </div>
                        </div>
                    </div> */}
                </footer>
            </div>
        );
    }
}
