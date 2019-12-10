import React from 'react';
import './Home.css';
import "react-pdf/dist/Page/AnnotationLayer.css";
import ProductInfo from "../../components/Products"
import NavBar from "../../components/Header/NavBar";
import Slideshow from "../../components/Slideshow";
import InfoCard from "../../components/Home/Cards/InfoCard";
import navItems from "../../utils/navItems";
import {HashLink as Link} from "react-router-hash-link";
import data from "../../data/HomePage"

const Home = (props) => {
    return (
        document.body.style = 'background: white',
            <div className="text-center m-auto">
                <header id="top" className="Welcome">{data.data[0].text}</header>
                <div className="page-element m-auto" style={{"padding": "0px",}}>
                    <Slideshow/>
                </div>
                <NavBar items={navItems["home-bar"]}/>
                <div className='infocards' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                     data-aos-mirror="true">
                    <InfoCard title={data.data[1].info[0].title} subtitle={data.data[1].info[0].subtitle}
                              info={
                                    //this will separate out the paragraph based on newlines and put the sections in new lines
                                    data.data[1].info[0].information.split("\n").map((i, key) => {
                                  return <div key={key}>{i}</div>
                              })}
                              data-aos-offset='100' to="/product#standard"/>
                    <InfoCard title={data.data[1].info[1].title} subtitle={data.data[1].info[1].subtitle} info={
                                    //this will separate out the paragraph based on newlines and put the sections in new lines
                                    data.data[1].info[1].information.split("\n").map((i, key) => {
                                  return <div key={key}>{i}</div>
                              })} data-aos-offset='200'
                              to="/product#aa_me"/>
                    <InfoCard title={data.data[1].info[2].title} subtitle={data.data[1].info[2].subtitle} info={
                                    //this will separate out the paragraph based on newlines and put the sections in new lines
                                    data.data[1].info[2].information.split("\n").map((i, key) => {
                                  return <div key={key}>{i}</div>
                              })} data-aos-offset='300' to="/product#ss"/>
                </div>
                <div id='about' className='mb-5 section-bg'>
                    <Link className='' to="/about#top" style={{textDecoration: 'none', color: "black"}}>
                        <div data-aos='fade-right' data-aos-duration="1000" className='AboutUs' id='home'>
                            <h1>{data.data[2].name}</h1>
                            <p>
                                {//this will separate out the paragraph based on newlines and put the sections in new lines
                                data.data[2].text.split("\n").map((i, key) => {
                                    return <div key={key}>{i}</div>
                                })}
                            </p>
                        </div>
                    </Link>
                </div>
                <div id='product' className='mb-5 section-bg' data-aos="fade" data-aos-duration='1000'>
                    <ProductInfo/>
                </div>
                <div id='contact' className='mb-5 section-bg'>
                    <Link className='' to="/contact#top" style={{textDecoration: 'none', color: "black"}}>
                        <div data-aos="fade-left" data-aos-duration='1000'>
                            <h1>{data.data[3].name}</h1>
                            <p>
                                {
                                //this will separate out the paragraph based on newlines and put the sections in new lines
                                data.data[3].text.split("\n").map((i, key) => {
                                    return <div key={key}>{i}</div>
                                })}
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
    );
};

export default Home;
