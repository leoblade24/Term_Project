import React from "react"
import NavBar from "../../components/Header/NavBar";
import navItems from "../../utils/navItems";
import data from "../../data/ProductPage"
import "./ProductPage.css"
function ProductPage() {
    return (
        <div className="product">
            <header id="welcome" className="Welcome">Products</header>

            <div className='nav mb-3'>
                <NavBar items={navItems['product-bar']}/>
            </div>
            {
                data.data.map(stuff=>{
                    //if the content type is info will deplay a product info sections else it will display the external link section
                    if(stuff.type==="info"){
                        console.log(stuff.text);
                        return(
                        <div id={stuff.id} className='cards mb-5'>
                            <div data-aos='fade-right' data-aos-duration="1000" className='standard' id='productpage'>
                                <h1>{stuff.name}</h1>
                                <p>
                                    {
                                    //this will separate out the paragraph based on newlines and put the sections in new lines
                                    stuff.text.split("\n").map((i,key)=>{
                                        return <div key={key}>{i}</div>
                                    })}
                                </p>
                            </div>
                        </div>
                    )
                    }
                    else{
                        return(
                            <div id={stuff.id} className='cards' >
                                <div data-aos='fade-left' data-aos-duration="1000">
                                    <h1>{stuff.name}</h1>
                                    <a href={stuff.text}>External Link </a>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}

export default ProductPage
// after header div <div className="page-element m-auto" style={{"padding": "0px",}}></div>