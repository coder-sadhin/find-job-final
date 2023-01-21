import { createBrowserRouter } from "react-router-dom";
import Contact from "../Component/Contact/Contact";
import Error from "../Component/Error";
import FindJob from "../Component/FindJob/FindJob";
import Home from "../Component/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Login/Register";
import ChangePassword from "../DashBoard/ChangePassword";
import AllCandidates from "../DashBoard/AdminPage/AllCandidates";
import AllJobs from "../DashBoard/AdminPage/AllJobs";
import DashBoard from "../DashBoard/DashBoard";
import DashBoardLayout from "../Layout/DashBoardLayout/DashBoardLayout";
import Main from "../Layout/Main";
import Recruiters from "../DashBoard/AdminPage/AllRecruiters";
import ReportedCandidate from "../DashBoard/AdminPage/Reported/ReportedCandidate";
import ReportedRecruiters from "../DashBoard/AdminPage/Reported/ReportedRecruiters";
import ReportedJobs from "../DashBoard/AdminPage/Reported/ReportedJobs";
import NewsLetter from "../DashBoard/AdminPage/NewsLetter";
import MailingLayout from "../Layout/MailingLayout/MailingLayout";
import InboxContainer from "../DashBoard/Message/InboxContainer";
import SendBoxContainer from "../DashBoard/Message/SendBoxContainer";
import CheckOut from "../Component/Payment/CheckOut";
import Verification from "../Component/Login/Verification";
import AddAJobs from "../DashBoard/RecruiterPage/AddAJobs/AddAJobs";
import JobsDetails from "../Component/FindJob/JobsDetails";
import AllProfile from "../Component/FindJob/RecruiterProfile/AllProfile";
import { ServerApi } from "../AllApi/MainApi";
import BuildCV from './../Component/BuildCV/BuildCV';
import MyJobs from './../DashBoard/CandidatePage/MyJobs';
import RecruiterJobs from './../DashBoard/RecruiterPage/Recruiterjobs/RecruiterJobs';
import Applicants from "../DashBoard/RecruiterPage/Recruiterjobs/Applicants";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/findJob',
                element: <FindJob />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/buildcv',
                element: <BuildCV />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/payment',
                element: <CheckOut />
            },
            {
                path: '/verification',
                element: <Verification />
            },
            {
                path: '/allfrofile',
                element: <AllProfile></AllProfile>
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`${ServerApi}/jobs/jobDetails/${params.id}`),
                element: <JobsDetails />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/dashboard',
                element: <DashBoard />
            },
            {
                path: '/dashboard/newsLetter',
                element: <NewsLetter />
            },
            {
                path: '/dashboard/changePass',
                element: <ChangePassword />
            },
            {
                path: '/dashboard/recruiters',
                element: <Recruiters />
            },
            {
                path: '/dashboard/candidates',
                element: <AllCandidates />
            },
            {
                path: '/dashboard/allJobs',
                element: <AllJobs />
            },
            {
                path: '/dashboard/reportedJobs',
                element: <ReportedJobs />
            },
            {
                path: '/dashboard/reportedCandidate',
                element: <ReportedCandidate />
            },
            {
                path: '/dashboard/reportedRecruiters',
                element: <ReportedRecruiters />
            },
            {
                path: '/dashboard/addAJobs',
                element: <AddAJobs />
            },
            {
                // this route is for candidate
                path: '/dashboard/my-jobs',
                element: <MyJobs />
            },
            {
                // this route is for recruiter
                path: '/dashboard/myJobs',
                element: <RecruiterJobs />
            },
            {
                path: '/dashboard/myJobs/details/:id',
                loader: ({ params }) => fetch(`${ServerApi}/jobs/jobDetails/${params.id}`),
                element: <Applicants />
            }
        ]
    },
    {
        path: '/message',
        element: <MailingLayout />,
        children: [
            {
                path: '/message',
                element: <InboxContainer />
            },
            {
                path: '/message/inbox',
                element: <InboxContainer />
            },
            {
                path: '/message/sendbox',
                element: <SendBoxContainer />
            }
        ]
    }
])


export default router;
