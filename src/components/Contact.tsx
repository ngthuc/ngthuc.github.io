import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="contact-info">
                            <div className="contact-block">
                                <h3 className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">Social</h3>
                                {/*<p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">Fan Page: <a*/}
                                {/*    href="https://www.facebook.com/vn.ngthuc" aria-label="facebook-page" target="_blank"*/}
                                {/*    rel="noreferrer">https://www.facebook.com/vn.ngthuc</a></p>*/}
                                <p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">Facebook: <a
                                    href="https://www.facebook.com/lenguyenthuc" aria-label="facebook" target="_blank"
                                    rel="noreferrer">https://www.facebook.com/lenguyenthuc</a></p>
                                <p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">Messenger: <a
                                    href="https://m.me/lenguyenthuc" aria-label="messenger" target="_blank"
                                    rel="noreferrer">https://m.me/lenguyenthuc</a></p>
                                <p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">Twitter: <a
                                    href="https://twitter.com/pk_over" aria-label="twitter" target="_blank"
                                    rel="noreferrer">https://twitter.com/pk_over</a></p>
                                <p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.7s">Skype: <a
                                    href="skype:pkthuc?chat" aria-label="twitter" target="_blank"
                                    rel="noreferrer">pkthuc</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="contact-info">
                            <div className="contact-block">
                                <h3 className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">Work</h3>
                                {/*<p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">CV: <a*/}
                                {/*    href="https://www.topcv.vn/xem-cv/784390665ad2d053d6b4da4188386ff5?app-view=1"*/}
                                {/*    aria-label="vcard" target="_blank" rel="noreferrer"><i>Click to view or*/}
                                {/*    download!</i></a></p>*/}
                                <p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">GitHub: <a
                                    href="https://github.com/ngthucdotcom/" aria-label="github" target="_blank"
                                    rel="noreferrer">https://github.com/ngthucdotcom/</a></p>
                                <p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">LinkedIn: <a
                                    href="https://www.linkedin.com/in/nguyenthuc" aria-label="linkedin" target="_blank"
                                    rel="noreferrer"><i>Click to view!</i></a></p>
                            </div>
                            <div className="contact-block">
                                <h3 className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">Contact</h3>
                                <p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">Phone: (+84)
                                    378 911
                                    202</p>
                                <p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">Email: <a
                                    href="mailto:contact@ngthuc.com" aria-label="email">contact@ngthuc.com</a></p>
                                <p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">Website: <a
                                    href="https://ngthuc.com" aria-label="website">https://ngthuc.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </section>
    );
}

export default Contact;