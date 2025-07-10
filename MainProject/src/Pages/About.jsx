function About()
{
    return(  
        <>
        
  <div className="wrap">
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <p className="mb-0 phone pl-md-2">
            <a href="#" className="mr-2">
              <span className="fa fa-phone mr-1" /> +00 1234 567
            </a>
            <a href="#">
              <span className="fa fa-paper-plane mr-1" /> youremail@email.com
            </a>
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-md-end">
          <div className="social-media">
            <p className="mb-0 d-flex">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-facebook">
                  <i className="sr-only">Facebook</i>
                </span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-twitter">
                  <i className="sr-only">Twitter</i>
                </span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-instagram">
                  <i className="sr-only">Instagram</i>
                </span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-dribbble">
                  <i className="sr-only">Dribbble</i>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div className="container">
      <a className="navbar-brand" href="index.html">
        <span className="flaticon-pawprint-1 mr-2" />
        Pet sitting
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fa fa-bars" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="index.html" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a href="about.html" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="vet.html" className="nav-link">
              Veterinarian
            </a>
          </li>
          <li className="nav-item">
            <a href="services.html" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="gallery.html" className="nav-link">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a href="pricing.html" className="nav-link">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="blog.html" className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="contact.html" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
  <section
    className="hero-wrap hero-wrap-2"
    style={{ backgroundImage: 'url("images/bg_2.jpg")' }}
    data-stellar-background-ratio="0.5"
  >
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text align-items-end">
        <div className="col-md-9 ftco-animate pb-5">
          <p className="breadcrumbs mb-2">
            <span className="mr-2">
              <a href="index.html">
                Home <i className="ion-ios-arrow-forward" />
              </a>
            </span>{" "}
            <span>
              About us <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-0 bread">About Us</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-no-pt ftco-no-pb">
    <div className="container">
      <div className="row d-flex no-gutters">
        <div className="col-md-5 d-flex">
          <div
            className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0"
            style={{ backgroundImage: "url(images/about-1.jpg)" }}
          ></div>
        </div>
        <div className="col-md-7 pl-md-5 py-md-5">
          <div className="heading-section pt-md-5">
            <h2 className="mb-4">Why Choose Us?</h2>
          </div>
          <div className="row">
            <div className="col-md-6 services-2 w-100 d-flex">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-stethoscope" />
              </div>
              <div className="text pl-3">
                <h4>Care Advices</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </div>
            </div>
            <div className="col-md-6 services-2 w-100 d-flex">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-customer-service" />
              </div>
              <div className="text pl-3">
                <h4>Customer Supports</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </div>
            </div>
            <div className="col-md-6 services-2 w-100 d-flex">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-emergency-call" />
              </div>
              <div className="text pl-3">
                <h4>Emergency Services</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </div>
            </div>
            <div className="col-md-6 services-2 w-100 d-flex">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-veterinarian" />
              </div>
              <div className="text pl-3">
                <h4>Veterinary Help</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-counter" id="section-counter">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
          <div className="block-18 text-center">
            <div className="text">
              <strong className="number" data-number={50}>
                0
              </strong>
            </div>
            <div className="text">
              <span>Customer</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
          <div className="block-18 text-center">
            <div className="text">
              <strong className="number" data-number={8500}>
                0
              </strong>
            </div>
            <div className="text">
              <span>Professionals</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
          <div className="block-18 text-center">
            <div className="text">
              <strong className="number" data-number={20}>
                0
              </strong>
            </div>
            <div className="text">
              <span>Products</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
          <div className="block-18 text-center">
            <div className="text">
              <strong className="number" data-number={50}>
                0
              </strong>
            </div>
            <div className="text">
              <span>Pets Hosted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section bg-light ftco-faqs">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 order-md-last">
          <div
            className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0"
            style={{ backgroundImage: "url(images/about.jpg)" }}
          >
            <a
              href="https://vimeo.com/45830194"
              className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
            >
              <span className="fa fa-play" />
            </a>
          </div>
          <div className="d-flex mt-3">
            <div
              className="img img-2 mr-md-2"
              style={{ backgroundImage: "url(images/about-2.jpg)" }}
            />
            <div
              className="img img-2 ml-md-2"
              style={{ backgroundImage: "url(images/about-3.jpg)" }}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="heading-section mb-5 mt-5 mt-lg-0">
            <h2 className="mb-3">Frequently Asks Questions</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div
            id="accordion"
            className="myaccordion w-100"
            aria-multiselectable="true"
          >
            <div className="card">
              <div className="card-header p-0" id="headingOne">
                <h2 className="mb-0">
                  <button
                    href="#collapseOne"
                    className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                    data-parent="#accordion"
                    data-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <p className="mb-0">How to train your pet dog?</p>
                    <i className="fa" aria-hidden="true" />
                  </button>
                </h2>
              </div>
              <div
                className="collapse show"
                id="collapseOne"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="card-body py-3 px-0">
                  <ol>
                    <li>Far far away, behind the word mountains</li>
                    <li>Consonantia, there live the blind texts</li>
                    <li>
                      When she reached the first hills of the Italic Mountains
                    </li>
                    <li>Bookmarksgrove, the headline of Alphabet Village</li>
                    <li>Separated they live in Bookmarksgrove right</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-0" id="headingTwo" role="tab">
                <h2 className="mb-0">
                  <button
                    href="#collapseTwo"
                    className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                    data-parent="#accordion"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <p className="mb-0">How to manage your pets?</p>
                    <i className="fa" aria-hidden="true" />
                  </button>
                </h2>
              </div>
              <div
                className="collapse"
                id="collapseTwo"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="card-body py-3 px-0">
                  <ol>
                    <li>Far far away, behind the word mountains</li>
                    <li>Consonantia, there live the blind texts</li>
                    <li>
                      When she reached the first hills of the Italic Mountains
                    </li>
                    <li>Bookmarksgrove, the headline of Alphabet Village</li>
                    <li>Separated they live in Bookmarksgrove right</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-0" id="headingThree" role="tab">
                <h2 className="mb-0">
                  <button
                    href="#collapseThree"
                    className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                    data-parent="#accordion"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <p className="mb-0">
                      What is the best grooming for your pets?
                    </p>
                    <i className="fa" aria-hidden="true" />
                  </button>
                </h2>
              </div>
              <div
                className="collapse"
                id="collapseThree"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="card-body py-3 px-0">
                  <ol>
                    <li>Far far away, behind the word mountains</li>
                    <li>Consonantia, there live the blind texts</li>
                    <li>
                      When she reached the first hills of the Italic Mountains
                    </li>
                    <li>Bookmarksgrove, the headline of Alphabet Village</li>
                    <li>Separated they live in Bookmarksgrove right</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-0" id="headingFour" role="tab">
                <h2 className="mb-0">
                  <button
                    href="#collapseFour"
                    className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                    data-parent="#accordion"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <p className="mb-0">
                      What are those requirements for sitting pets?
                    </p>
                    <i className="fa" aria-hidden="true" />
                  </button>
                </h2>
              </div>
              <div
                className="collapse"
                id="collapseFour"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="card-body py-3 px-0">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="ftco-section testimony-section"
    style={{ backgroundImage: 'url("images/bg_2.jpg")' }}
  >
    <div className="overlay" />
    <div className="container">
      <div className="row justify-content-center pb-5 mb-3">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <h2>Happy Clients &amp; Feedbacks</h2>
        </div>
      </div>
      <div className="row ftco-animate">
        <div className="col-md-12">
          <div className="carousel-testimony owl-carousel ftco-owl">
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-left" />
                </div>
                <div className="text">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Roger Scott</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-left" />
                </div>
                <div className="text">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_2.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Roger Scott</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-left" />
                </div>
                <div className="text">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_3.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Roger Scott</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-left" />
                </div>
                <div className="text">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Roger Scott</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-left" />
                </div>
                <div className="text">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_2.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Roger Scott</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb img"
    style={{ backgroundImage: "url(images/bg_3.jpg)" }}
  >
    <div className="overlay" />
    <div className="container">
      <div className="row d-md-flex justify-content-end">
        <div className="col-md-12 col-lg-6 half p-3 py-5 pl-lg-5 ftco-animate">
          <h2 className="mb-4">Free Consultation</h2>
          <form action="#" className="appointment">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <div className="form-field">
                    <div className="select-wrap">
                      <div className="icon">
                        <span className="fa fa-chevron-down" />
                      </div>
                      <select name="" id="" className="form-control">
                        <option value="">Select services</option>
                        <option value="">Cat Sitting</option>
                        <option value="">Dog Walk</option>
                        <option value="">Pet Spa</option>
                        <option value="">Pet Grooming</option>
                        <option value="">Pet Daycare</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Vehicle number"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <div className="input-wrap">
                    <div className="icon">
                      <span className="fa fa-calendar" />
                    </div>
                    <input
                      type="text"
                      className="form-control appointment_date"
                      placeholder="Date"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <div className="input-wrap">
                    <div className="icon">
                      <span className="fa fa-clock-o" />
                    </div>
                    <input
                      type="text"
                      className="form-control appointment_time"
                      placeholder="Time"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={7}
                    className="form-control"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="submit"
                    defaultValue="Send message"
                    className="btn btn-primary py-3 px-4"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">Petsitting</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <ul className="ftco-footer-social p-0">
            <li className="ftco-animate">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Twitter"
              >
                <span className="fa fa-twitter" />
              </a>
            </li>
            <li className="ftco-animate">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Facebook"
              >
                <span className="fa fa-facebook" />
              </a>
            </li>
            <li className="ftco-animate">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Instagram"
              >
                <span className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">Latest News</h2>
          <div className="block-21 mb-4 d-flex">
            <a
              className="img mr-4 rounded"
              style={{ backgroundImage: "url(images/image_1.jpg)" }}
            />
            <div className="text">
              <h3 className="heading">
                <a href="#">
                  Even the all-powerful Pointing has no control about
                </a>
              </h3>
              <div className="meta">
                <div>
                  <a href="#">
                    <span className="icon-calendar" /> April 7, 2020
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon-person" /> Admin
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon-chat" /> 19
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="block-21 mb-4 d-flex">
            <a
              className="img mr-4 rounded"
              style={{ backgroundImage: "url(images/image_2.jpg)" }}
            />
            <div className="text">
              <h3 className="heading">
                <a href="#">
                  Even the all-powerful Pointing has no control about
                </a>
              </h3>
              <div className="meta">
                <div>
                  <a href="#">
                    <span className="icon-calendar" /> April 7, 2020
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon-person" /> Admin
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon-chat" /> 19
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="py-2 d-block">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="py-2 d-block">
                About
              </a>
            </li>
            <li>
              <a href="#" className="py-2 d-block">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="py-2 d-block">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="py-2 d-block">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="py-2 d-block">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">Have a Questions?</h2>
          <div className="block-23 mb-3">
            <ul>
              <li>
                <span className="icon fa fa-map" />
                <span className="text">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </li>
              <li>
                <a href="#">
                  <span className="icon fa fa-phone" />
                  <span className="text">+2 392 3929 210</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon fa fa-paper-plane" />
                  <span className="text">info@yourdomain.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <p className="copyright">
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with{" "}
            <i className="fa fa-heart" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib.com
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
</>

        
    )

}
export default About;