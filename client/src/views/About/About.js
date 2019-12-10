import React from 'react';
import './About.css';
import NavBar from '../../components/Header/NavBar';
import InfoCard from "../../components/Home/Cards/InfoCard";
import navItems from "../../utils/navItems";
import {data} from "../../data/AboutPage"

const About = () => {
    return (
        <div className="text-center m-auto">
            <NavBar items={navItems['about-bar']}/>
            {
                data.map(stuff=>{
                    //if the array object is of type section, it will display it as a normal section with a name/title and text 
                    if(stuff.type==="section"){
                        console.log(stuff.text);
                        return(
                        <div className='row mb-5' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                        data-aos-mirror="true" id={stuff.id}>
                        <h1>{stuff.name}</h1>
                        <p>
                            {
                                //breaking up the text into newlines when a new paragraph is needed
                            }
                            {stuff.text.split("\n").map((i,key)=>{
                                return <div key={key}>{i}</div>
                            })}
                        </p>
                        </div>
                    )
                    }
                    else{
                        return(
                            <div className='mb-5-nobox' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                                data-aos-mirror="true" id='team'>
                                <h1>{stuff.name}</h1>
                                <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}} >
                                    {stuff.team.map((information,index)=>{
                                        {
                                            //if the amount of employees is odd it will place the last employee in its own flex box that will be centered in the page
                                            if((stuff.team.length%2) && index===(stuff.team.length-1)){
                                                return <div className="row"><div style={{display: 'flex', flexDirection: 'row', justifyContent:"",alignItems:"stretch",width:"500px"}}className="text-center">
                                                    <InfoCard title={information.personName} subtitle='' info={information.info.split("\n").map((i,key)=>{
                                                    return <div key={key}>{i}</div>})} data-aos-offset='0' style={{flex: 1}}
                                                className='row mb-5 '/> </div></div>
                                            }
                                            else{
                                                //this will get the information from the objects in the previous index and the current one and put them into two equal sized columns next to each other
                                                //it skips the even numbers so that no duplicates happen and it does not try to get objects that are not before or after the array (no negative index)
                                                return index % 2 ?
                                                    <div className="row">
                                                    <view style={{display: 'flex', flexDirection: 'row', justifyContent:"",alignItems:"stretch",width:"1000px"}} className="text-center" key={index}>
                                                        <InfoCard title={stuff.team[index-1].personName} subtitle='' info={stuff.team[index-1].info.split("\n").map((i,key)=>{
                                                            return <div key={key}>{i}</div>})} data-aos-offset='0' margin ="mr-3" style={{flex: 1}}
                                                            className='row mb-5 '/>  
                                                        <InfoCard title={information.personName} subtitle='' info={information.info.split("\n").map((i,key)=>{
                                                            return <div key={key}>{i}</div>})} data-aos-offset='0' style={{flex: 1}}
                                                            className='row mb-5 '/> 
                                                    </view>
                                                    </div>
                                                    :'';
                                                    }
                                                }
                                            }
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    );

};
export default About;  
