import React, {useState} from 'react'

import Home from '../pages/home/Home'
import About from '../pages/about/About'
import ActiveBrothers from '../pages/brothers/ActiveBrothers'
import CampusInvolvement from '../pages/CampusInvolvement'
import Careers from '../pages/Careers'
import Rush from '../pages/Rush'
import FAQs from '../pages/FAQs'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import Footer from '../layouts/Footer'

import BckgrndSelector from './BckgrndSelector'
import { makeStyles } from '@material-ui/core/styles';

import {BrowserRouter as Router, Switch, Route, } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    app: {
        backgroundColor: "white",
        color: "black",
        flexGrow: 1,
        minHeight: "100vh"
        // alignItems: "center",
        // display: flex;
        // flex - direction: column;
    },
    appMain: {
        // minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // font - size: calc(10px + 2vmin);
    },
}));


export default function LPNSite() {
    const [pageNum, setPageNum] = useState(0);
    const classes = useStyles();

    const pages = new Map(
        [
            ['Home', 0], ['About', 1], ['Active Brothers', 2], ['Campus Involvement', 3],
            ['Careers', 4], ['Rush', 5], ['FAQs', 6], ['Gallery', 7], ['Contact', 8],
            ['About Me', 9]
        ]
    )

    const setPage = (page) => {
        setPageNum(pages.get(page))
    }

    return (
        <Router>
            <div>
                <div className={classes.app}>

                    <BckgrndSelector pageNum={pageNum}></BckgrndSelector>

                    <Switch>
                        <Route path="/about">
                            <About setPage={setPage}/>
                        </Route>

                        <Route path="/active-brothers">
                            <ActiveBrothers setPage={setPage} />
                        </Route>

                        <Route path="/campus-involvement">
                            <CampusInvolvement setPage={setPage} />
                        </Route>
                        <Route path="/careers">
                            <Careers setPage={setPage} />
                        </Route>

                        <Route path="/fall-rush-2020">
                            <Rush setPage={setPage} />
                        </Route>
                        <Route path="/faqs">
                            <FAQs setPage={setPage} />
                        </Route>

                        <Route path="/gallery">
                            <Gallery setPage={setPage} />
                        </Route>

                        <Route path="/contact">
                            <Contact setPage={setPage} />
                        </Route>

                        <Route path="/">
                            <Home setPage={setPage}/>
                        </Route>
                    </Switch>
                
                    <Footer></Footer>
                </div>
            </div>
           
        </Router>
    )
}