import React from 'react';

const Intro = () => {
    return (
        <section id="intro">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4 hidden-xs">

                    </div>
                    <div className="col-md-8 col-sm-8 col-xs-12">
                        <div className="intro-content wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                            <h4>Hi, I'm Nguyen Thuc, a web developer in Ho Chi Minh City.</h4>
                            <p>Now, I'm a engineer at VNG Corporation, and a front-end web developer with React.js and
                                Angular.
                                My favorite is music, cuisine and travel.</p>
                            <p>If you have love for something, you will do it. And I'm trying to do that with what I
                                love.</p>
                            {/*<a href="#contact" className="btn btn-danger btn-hire-me"> Hire me!</a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;