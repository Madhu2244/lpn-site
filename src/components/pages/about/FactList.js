import React from 'react'
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';


export const facts = [
    {
        answer: <Link component={RouterLink} to="/active-brothers" color="inherit" underline="none">185</Link>,
        title: "Active & Alumni Brothers",
    },
    {
        answer: <Link component={RouterLink} to="/campus-involvement" color="inherit" underline="none">8</Link>,
        title: "Business Orgs Founded",
    },
    {
        answer: <Link component={RouterLink} to="/campus-involvement" color="inherit" underline="none">67</Link>,
        title: "Current Leadership Positions",
    },
    {
        answer: <Link component={RouterLink} to="/campus-involvement" color="inherit" underline="none">6</Link>,
        title: "Current President Positions",
    },
    {
        answer: <Link component={RouterLink} to="/careers" color="inherit" underline="none">100%</Link>,
        title: "Internship Placement Rate",
    },
    {
        answer: <Link component={RouterLink} to="/careers" color="inherit" underline="none">2.9</Link>,
        title: "Average Internships Per Active",
    },
   
];

export default { facts };