import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { HashRouter, Switch, Route, } from "react-router-dom";

import BckgrndSelector from './utils/BckgrndSelector'
import ScrollToTop from './utils/ScrollToTop'
import Home from './pages/home/Home'
import About from './pages/about/About'
import ActiveBrothers from './pages/brothers/ActiveBrothers'
import Profile from './pages/brothers/profile/Profile'
import CampusInvolvement from './pages/campusInvolvements/CampusInvolvement'
import Careers from './pages/careers/Careers'
import Recruitment from './pages/rush/Recruitment'
import FAQs from './pages/faqs/FAQs'
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contact/Contact'
import Footer from './layouts/Footer'


let theme = createTheme({
    // typography: {
    //     fontFamily: "Source Sans Pro,sans-serif"
    // },
});

theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    app: {
        backgroundColor: "white",
        color: "black",
        flexGrow: 1,
        minHeight: "100vh",
    },
}));


export default function LPNSite() {
    const [pageNum, setPageNum] = useState(0);
    const classes = useStyles();

    const pages = new Map(
        [
            ['Home', 0], ['About', 1], ['Active Brothers', 2], ['Campus Involvement', 3],
            ['Careers', 4], ['Recruitment', 5], ['FAQs', 6], ['Gallery', 7], ['Contact', 8],
            ['Profile', 9]
        ]
    )

    const setPage = (page) => {
        setPageNum(pages.get(page))
    }

    return (
       <HashRouter>
           <ScrollToTop></ScrollToTop>
                      
            <div className={classes.app}>
                <ThemeProvider theme={theme}>
                <BckgrndSelector pageNum={pageNum}></BckgrndSelector>

                <Switch>
                    <Route exact path="/about">
                        <About setPage={setPage} />
                    </Route>

                    <Route exact path="/active-brothers">
                        <ActiveBrothers setPage={setPage} />
                    </Route>
                    <Route exact path="/active-brothers/:name"
                        render={(props) => <Profile {...props} setPage={setPage} />}>
                    </Route>

                    <Route exact path="/campus-involvement">
                        <CampusInvolvement setPage={setPage} />
                    </Route>

                    <Route exact path="/careers">
                        <Careers setPage={setPage} />
                    </Route>

                    <Route exact path="/recruitment">
                        <Recruitment setPage={setPage} />
                    </Route>
                   
                    <Route exact path="/faqs">
                        <FAQs setPage={setPage} />
                    </Route>

                    <Route exact path="/gallery">
                        <Gallery setPage={setPage} />
                    </Route>

                    <Route exact path="/contact">
                        <Contact setPage={setPage} />
                    </Route>

                    <Route path="/">
                        <Home setPage={setPage} />
                    </Route>

                </Switch>
    
                <Footer></Footer>
                </ThemeProvider>
            
            </div>
        </HashRouter>
    );
}