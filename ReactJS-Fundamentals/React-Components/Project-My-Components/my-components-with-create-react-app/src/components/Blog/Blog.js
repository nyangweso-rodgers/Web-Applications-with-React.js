import React from "react";
import './Blog.css';

const Blog = () => {
    return (
        <section className="section blog-section border border-warning">
            <div className='container'>
                <div className='row border'>
                    <h2>Blog Section!</h2>
                </div>
                <div className='row border p-5'></div>
            </div>
            <div className='row border'>
                <div className="col">
                    <button className='btn btn-lg btn-primary'>More Articles</button>
                </div>
            </div>
        </section>
    )
};

export default Blog;