import React from 'react';

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="experience">
                            <div className="ex-block wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.7s">
                                <div className="ex-block-heading">
                                    <h3>Work Experience</h3>
                                </div>
                                <div className="ex-block-body">
                                    <div className="ex-block-item">
                                        <p className="heading">VNG Corp</p>
                                        <p className="time">Mar 2020 - present</p>
                                        <p className="desc">
                                            Associate Software Engineer - Frontend Developer with React.js at ZaloPay
                                        </p>
                                    </div>
                                    <div className="ex-block-item">
                                        <p className="heading">TMA Solutions</p>
                                        <p className="time">Jan 2019 - Mar 2020</p>
                                        <p className="desc">
                                            Software Engineer - Backend Web Development with Java Spring MVC
                                        </p>
                                    </div>
                                    <div className="ex-block-item">
                                        <p className="heading">Can Tho University Student Sciences Research</p>
                                        <p className="time">Jun 2017 - Dec 2017</p>
                                        <p className="desc">
                                            Project Manager - Fullstack Developer with RFID, CodeIgniter, RestAPI.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="education">
                            <div className="ex-block wow bounceInDown" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div className="ex-block-heading">
                                    <h3>Education</h3>
                                </div>
                                <div className="ex-block-body">
                                    <div className="ex-block-item">
                                        <p className="heading">Can Tho University</p>
                                        <p className="time">Sep 2014 - Dec 2018</p>
                                        <p className="desc">
                                            Software Engineering
                                        </p>
                                    </div>
                                    <div className="ex-block-item">
                                        <p className="heading">Cantho University Software Center</p>
                                        <p className="time">Dec 2017 - Mar 2018</p>
                                        <p className="desc">
                                            Learn Advanced Web Development (Laravel & AngularJS module)
                                        </p>
                                    </div>
                                    <div className="ex-block-item">
                                        <p className="heading">Self learning</p>
                                        <p className="time">Aug 2015 - present</p>
                                        <p className="desc">
                                            Learn web
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </section>
    );
}

export default Experience;