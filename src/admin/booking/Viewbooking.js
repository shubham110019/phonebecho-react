import React from 'react'
import Menu from "../cmp/Menu";
import Topmenu from "../cmp/Topmenu";

const Viewbooking = () => {
    return (
        <>


            <Menu />

            <section className="home-section">
                <Topmenu />

                <div className="home-content">
                    <div className="container px-4">
                        <h2>view booking</h2>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Viewbooking
