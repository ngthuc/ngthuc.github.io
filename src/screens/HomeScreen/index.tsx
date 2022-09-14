import React, {useEffect, useState} from 'react';
import {collection, getDocs, query, where} from "firebase/firestore";
import {DB} from "../../firebase";
import HomePage from "../../components/HomePage";
import Intro from "../../components/Intro";
import Experience from "../../components/Experience";
import MyWork from "../../components/MyWork";
import LastWork from "../../components/LastWork";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const HomeScreen = () => {

    const [lastWorks, setLastWorks] = useState<Array<any>>([]);
    const [stickyPosition, setStickyPosition] = useState(0);
    const [homePageHeight, setHomePageHeight] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            let listItem: Array<any> = [];
            const querySnapshot = await getDocs(query(collection(DB, "portfolio"), where("type", "==", "lastwork")));
            await querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`, doc.data());
                listItem.push({...doc.data()});
            });
            setLastWorks(listItem.sort((a, b) => a.category - b.category));
        }
        fetchData();
        // @ts-ignore
        setHomePageHeight(document.getElementById('homepage').offsetHeight || 0);
    }, []);

    useEffect(() => {
        const onScroll = (e: any) => {
            setStickyPosition(e.target.documentElement.scrollTop);
            // @ts-ignore
            setHomePageHeight(document.getElementById('homepage').offsetHeight || 0);
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [stickyPosition]);

    return (
        <>
            <HomePage navBarClassName={(stickyPosition + 75) > homePageHeight ? 'fix-navigation' : 'fixed-bar'}/>
            <Intro/>
            <MyWork/>
            <Experience/>
            <LastWork lastWorks={lastWorks}/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default HomeScreen;