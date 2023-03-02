import React from 'react'
import style from "./Landing.module.css"

export const Landing = () => {
    return (
        <>
            <div className={`${style["diagonal"]}`}></div>
            <div className={`${style["grid-h"]}`}>
                <div className={`${style["grid-l"]}`}>
                    <h1>Discover What's Possible</h1>
                    <p>Join now to bring good startups to life, Experience the magic of innovative startups.</p>
                    <button>Explore Now</button>
                </div>
                <div className={`${style["grid-r"]}`}><img src= "../../assests/landingPage/heroImage.png" alt="meetingsss" /></div>
            </div>
            <div className={`${style["grid-h"]}`}>
                <div className={`${style["grid-l"]} ${style["about-us"]}`}>
                    <div className={`${style["about-us-img"]}`}>
                        <img src="../../../public/assests/landingPage/aboutUs.jpg" alt="About us" />
                    </div>
                    {/* <h1>Sdsdsdadasdasdasdsadasdasdassssssssssssssssssssssssss</h1> */}
                </div>
                <div className={`${style["grid-r"]} ${style["about-us"]}`}>
                    <p className={`${style["about-us-info"]}`}>
                        We believe in promoting
                        innovative startups, a
                        multifaceted platform
                        allowing user to review the
                        startups and get insight about creative discipline for a variety of projects. Opinions supported by facts and observations
                        will to build a market.
                    </p>
                </div>
            </div>
            <h1>asdasdasd</h1>
        </>
    )
}
