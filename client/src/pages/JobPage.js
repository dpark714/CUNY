import React from 'react';
import NavBar from '../components/NavBar';
import '../pages/style/JobPage.css'; // Ensure the CSS file is correctly referenced
import PostFormPage from "../pages/PostFormPage";
import PostsListPage from "../pages/PostsListPage"

function JobPage() {
    return (
        <div className="job-page">
        <NavBar/>
            <div className="career-connect">
                <h1>CareerConnect</h1>
                 {/* Add content for CareerConnect here  */}
                 {/* <PostFormPage />
                 <PostsListPage /> */}
            </div>
            <div className="career-crafters">
                <h1>CareerCrafters</h1>
                {/* Add content for CareerCrafters here  */}
            </div>
        </div>
    );
}

export default JobPage;