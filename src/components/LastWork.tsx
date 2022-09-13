import React, {useState} from 'react';
import LastWorkItem from "./LastWorkItem";
import LastWorkModal from "./LastWorkModal";

const LastWork = (props: { lastWorks: Array<any> }) => {
    const {lastWorks} = props;
    const [lastWorkSelected, setLastWorkSelected] = useState<any>(null);
    const [visibleModal, setVisibleModal] = useState(false);

    const handleShowModal = (visible: boolean, data: any = null) => {
        setLastWorkSelected(data);
        setVisibleModal(visible);
    }

    return (
        <section id="last-work">
            <div className="container">
                {lastWorkSelected && <LastWorkModal lastWork={lastWorkSelected} visible={visibleModal} onClose={handleShowModal}/>}
                <div className="lw-heading text-center">
                    <h3 className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s"> My Last Works</h3>
                    <p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">My collection of
                        products</p>
                </div>
                <div className="lw-body">
                    <div className="row" id="lastwork">
                        <div className="clearfix"></div>
                        {
                            lastWorks.length > 0 && lastWorks.map((lastWork: any) => (
                                <LastWorkItem lastWork={lastWork} key={lastWork.key} onClick={(item: any) => handleShowModal(true, item)}/>)
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LastWork;