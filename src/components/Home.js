import React from 'react'

function Home() {
    return (<>
        <div className="full_bg">
            <div className="slider_main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="carouselExampleIndicators" className="carousel slide">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="carousel-caption relative">
                                            <div className="row d_flex">
                                                <div className="col-md-5">
                                                    <div className="board">
                                                        <i><img src={process.env.PUBLIC_URL + `assets/images/top_icon.png`} alt="#" /></i>
                                                        <h3>
                                                            NSS<br /> Management<br /> System
                                                        </h3>
                                                        <div className="link_btn">
                                                            <a className="read_more" href="Javascript:void(0)">Read More <span></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="banner_img">
                                                        <figure><img className="img_responsive" src={process.env.PUBLIC_URL + "assets/images/banner_img.png"} /></figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="carousel-caption relative">
                                            <div className="row d_flex">
                                                <div className="col-md-5">
                                                    <div className="board">
                                                        <i><img src={process.env.PUBLIC_URL + "assets/images/top_icon.png"} alt="#" /></i>
                                                        <h3>
                                                            NSS<br /> Management<br /> System
                                                        </h3>
                                                        <div className="link_btn">
                                                            <a className="read_more" href="Javascript:void(0)">Read More <span></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="banner_img">
                                                        <figure><img className="img_responsive" src={process.env.PUBLIC_URL + "assets/images/banner_img.png"} /></figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="carousel-caption relative">
                                            <div className="row d_flex">
                                                <div className="col-md-5">
                                                    <div className="board">
                                                        <i><img src={process.env.PUBLIC_URL + "assets/images/top_icon.png"} alt="#" /></i>
                                                        <h3>
                                                        Features
                                                        </h3>
                                                        <div className="link_btn">
                                                            <a className="read_more" href="Javascript:void(0)">Read More <span></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="banner_img">
                                                        <figure><img className="img_responsive" src={process.env.PUBLIC_URL + "assets/images/banner_img.png"} /></figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="class">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage text_align_center">
                            <h2>Features</h2>
                            <p>There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 margi_bottom">
                        <div className="class_box text_align_center">
                            <i><img src={process.env.PUBLIC_URL + "assets/images/class1.png"} alt="#" /></i>
                            <h3>Mark Attendance</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alterationThere are many variations </p>
                        </div>
                        <a className="read_more" href="Javascript:void(0)">Read More</a>
                    </div>
                    <div className="col-md-4 margi_bottom">
                        <div className="class_box blue text_align_center">
                            <i><img src={process.env.PUBLIC_URL + "assets/images/class2.png"} alt="#" /></i>
                            <h3>Upload Events</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alterationThere are many variations </p>
                        </div>
                        <a className="read_more" href="Javascript:void(0)">Read More</a>
                    </div>
                    <div className="col-md-4 margi_bottom">
                        <div className="class_box text_align_center">
                            <i><img src={process.env.PUBLIC_URL + "assets/images/class3.png"} alt="#" /></i>
                            <h3>Manage Students</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alterationThere are many variations </p>
                        </div>
                        <a className="read_more" href="Javascript:void(0)">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="about">
            <div className="container-fluid">
                <div className="row d_flex">
                    <div className="col-md-6">
                        <div className="titlepage text_align_left">
                            <h2>About <br />Skating <br /> school</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alterationThere are many variatioThere are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alterationThere are many variationsns
                            </p>
                            <div className="link_btn">
                                <a className="read_more" href="about.html">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about_img text_align_center">
                            <figure><img src={process.env.PUBLIC_URL + "assets/images/about.png"} alt="#" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="skating">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage text_align_center">
                            <h2>Skating Video</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="skating-box ">
                            <figure><img src={process.env.PUBLIC_URL + "assets/images/sakt1.png"} alt="#" /></figure>
                            <div className="link_btn">
                                <a className="read_more" href="Javascript:void(0)">See More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="skating-box">
                            <figure><img src={process.env.PUBLIC_URL + "assets/images/sakt2.png"} alt="#" /></figure>
                            <div className="link_btn">
                                <a className="read_more" href="Javascript:void(0)">See More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="skating-box">
                            <figure><img src={process.env.PUBLIC_URL + "assets/images/sakt3.png"} alt="#" /></figure>
                            <div className="link_btn">
                                <a className="read_more" href="Javascript:void(0)">See More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="shop">
            <div className="container-fluid">
                <div className="row d_flex d_grid">
                    <div className="col-md-7">
                        <div className="shop_img text_align_center" data-aos="fade-right">
                            <figure><img className="img_responsive" src={process.env.PUBLIC_URL + "assets/images/shop.png"} alt="#" /></figure>
                        </div>
                    </div>
                    <div className="col-md-5 order_1_mobile">
                        <div className="titlepage text_align_left ">
                            <h2>Our Skate <br />Shop</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alterationThere are many variatioThere are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alterationThere are many variationsns
                            </p>
                            <a className="read_more" href="shop.html">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="titlepage text_align_center">
                            <h2>Testimonial</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container-fluid">
                                        <div className="carousel-caption relative">
                                            <div className="row d_flex">
                                                <div className="col-md-3">
                                                    <div className="test_box text_align_center">
                                                        <span><img src={process.env.PUBLIC_URL + "assets/images/test1.png"} alt="#" /></span>
                                                        <h4>Jone Lo</h4>
                                                        <img className="img_responsive" src={process.env.PUBLIC_URL + "assets/images/te.png"} alt="#" />
                                                        <p>humour, or randomised words which don't look even slightly believable. If you
                                                            are</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="test_box white_bg text_align_center">
                                                        <span><img src={process.env.PUBLIC_URL + "assets/images/test2.png"} alt="#" /></span>
                                                        <h4>Michale</h4>
                                                        <img className="img_responsive" src={process.env.PUBLIC_URL + "assets/images/te2.png"} alt="#" />
                                                        <p>humour, or randomised words which don't look even slightly believable. If you
                                                            are going to use a passage of Lorem Ipsum, you need to be sure</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="test_box text_align_center">
                                                        <span><img src={process.env.PUBLIC_URL + "assets/images/test3.png"} alt="#" /></span>
                                                        <h4>Disol</h4>
                                                        <img className="img_responsive" src={process.env.PUBLIC_URL + "assets/images/te.png"} alt="#" />
                                                        <p>humour, or randomised words which don't look even slightly believable. If you
                                                            are</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="container-fluid">
                                        <div className="carousel-caption relative">
                                            <div className="row d_flex">
                                                <div className="col-md-3">
                                                    <div className="test_box text_align_center">
                                                        <span><img src={process.env.PUBLIC_URL + "assets/images/test2.png"} alt="#" /></span>
                                                        <h4>Michale</h4>
                                                        <img className="img_responsive" src={process.env.PUBLIC_URL + "assets/images/te.png"} alt="#" />
                                                        <p>humour, or randomised words which don't look even slightly believable. If you
                                                            are</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="test_box white_bg text_align_center">
                                                        <span><img src={process.env.PUBLIC_URL + "assets/images/test3.png"} alt="#" /></span>
                                                        <h4>Disol</h4>
                                                        <img className="img_responsive" src={process.env.PUBLIC_URL + "assets/images/te2.png"} alt="#" />
                                                        <p> humour, or randomised words which don't look even slightly believable. If you
                                                            are going to use a passage of Lorem Ipsum, you need to be sure</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="test_box text_align_center">
                                                        <span><img src={process.env.PUBLIC_URL + "assets/images/test1.png"} alt="#" /></span>
                                                        <h4>Jone Lo</h4>
                                                        <img className="img_responsive" src={process.env.PUBLIC_URL + "assets/images/te.png"} alt="#" />
                                                        <p>humour, or randomised words which don't look even slightly believable. If you
                                                            are</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="container-fluid">
                                        <div className="carousel-caption relative">
                                            <div className="row d_flex">
                                                <div className="col-md-3">
                                                    <div className="test_box text_align_center">
                                                        <span><img src={process.env.PUBLIC_URL + "assets/images/test3.png"} alt="#" /></span>
                                                        <h4>Disol</h4>
                                                        <img className="img_responsive" src={process.env.PUBLIC_URL + "assets/images/te.png"} alt="#" />
                                                        <p>humour, or randomised words which don't look even slightly believable. If you
                                                            are</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="test_box  white_bg text_align_center">
                                                        <span><img src={process.env.PUBLIC_URL + "assets/images/test1.png"} alt="#" /></span>
                                                        <h4>Jone Lo</h4>
                                                        <img className="img_responsive" src={process.env.PUBLIC_URL + "assets/images/te2.png"} alt="#" />
                                                        <p> humour, or randomised words which don't look even slightly believable. If you
                                                            are going to use a passage of Lorem Ipsum, you need to be sure</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="test_box text_align_center">
                                                        <span><img src={process.env.PUBLIC_URL + "assets/images/test2.png"} alt="#" /></span>
                                                        <h4>Michale</h4>
                                                        <img className="img_responsive" src={process.env.PUBLIC_URL + "assets/images/te.png"} alt="#" />
                                                        <p>humour, or randomised words which don't look even slightly believable. If you
                                                            are</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                                <i className="fa fa-angle-left" aria-hidden="true"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 ">
                            <div class="infoma">
                                <h3>Contact Us</h3>
                                <ul class="conta">
                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>Locations
                                    </li>
                                    <li><i class="fa fa-phone" aria-hidden="true"></i>Call +01 1234567890</li>
                                    <li> <i class="fa fa-envelope" aria-hidden="true"></i><a href="Javascript:void(0)">
                                        demo@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="row border_left">
                                <div class="col-md-12">
                                    <div class="infoma">
                                        <h3>Newsletter</h3>
                                        <form class="form_subscri">
                                            <div class="row">
                                                <div class="col-md-12">
                                                </div>
                                                <div class="col-md-4">
                                                    <input class="newsl" placeholder="Enter your email" type="text"
                                                        name="Enter your email" />
                                                </div>
                                                <div class="col-md-4">
                                                    <input class="newsl" placeholder="Enter your email" type="text"
                                                        name="Enter your email" />
                                                </div>
                                                <div class="col-md-4">
                                                    <button class="subsci_btn">subscribe</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="infoma">
                                        <h3>Useful Link</h3>
                                                <ul className="permalinks">
                                                <li>Home</li>
                                                <li>About</li>
                                                <li>Contact</li>
                                            </ul>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="infoma text_align_left">
                                        <ul class="social_icon">
                                            <li><a href="Javascript:void(0)"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="Javascript:void(0)"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="Javascript:void(0)"><i class="fa fa-linkedin-square"
                                                aria-hidden="true"></i></a></li>
                                            <li><a href="Javascript:void(0)"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <p> <small>Copyright &copy; Rohini Pedamkar</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>)
}

export default Home
