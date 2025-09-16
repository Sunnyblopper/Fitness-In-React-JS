import React from "react";
import styles from "./copyrightfooter.module.css";

const CopyrightFooter = () => {
    return (
        <div className={`container-fluid py-4 ${styles.copyright}`}>
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-md-0">
                        <span className="text-body" style={{ fontFamily: "Roboto, sans-serif", fontSize: "16px"}}>
                            <a href="#" className="border-bottom text-white">
                                <i className="fas fa-copyright text-light me-2"></i>
                                Your Site Name
                            </a>
                            , All rights reserved.
                        </span>
                    </div>
                    <div className="col-md-6 text-center text-md-end text-body" style={{ fontFamily: "Roboto, sans-serif", fontSize: "16px"}}>
                        Designed By <a className="border-bottom text-white" href="#">HTML Codex</a> &nbsp;
                        Distributed By <a className="text-primary" href="#">ThemeWagon</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CopyrightFooter;
