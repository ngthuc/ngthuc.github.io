import React from 'react';

const MyWork = () => {
    return (
        <section id="my-work">
            <div className="container">
                <div className="my-work-heading text-center">
                    <h3 className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">Workflow</h3>
                    <p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">This is the way I build my
                        application...</p>
                </div>
                <div className="my-work-body">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="work-item wow bounceInLeft" data-wow-duration="2s" data-wow-delay="1.1s">
                                <div className="wi-content text-center">
                                    <i className="material-icons">aspect_ratio</i>
                                    <p>Requirements Analysis</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="work-item wow bounceInLeft" data-wow-duration="2s" data-wow-delay="1.0s">
                                <div className="wi-content text-center">
                                    <i className="material-icons">mode_edit</i>
                                    <p>Development</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="work-item wow bounceInLeft" data-wow-duration="2s" data-wow-delay="0.9s">
                                <div className="wi-content text-center">
                                    <i className="material-icons">done_all</i>
                                    <p>Quality Assurance</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="work-item wow bounceInLeft" data-wow-duration="2s" data-wow-delay="0.8s">
                                <div className="wi-content text-center">
                                    <i className="material-icons">launch</i>
                                    <p>Release and Deployment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyWork;