import React from 'react';
import Product from './Products';
import Products from './Products';

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-black border-0">
                <img src={require('../assets/img01.webp')} className="card-img" alt="Background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0 lo">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2 text-primary fw-bolder">
                        CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
                <Products/>
            </div>

        </div>
    )
}
export default Home;