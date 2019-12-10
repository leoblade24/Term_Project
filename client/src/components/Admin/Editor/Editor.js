import React, { useState } from 'react';
import './Editor.css';
import HomeForm from '../../Forms/HomeForm';
import UpdateAboutForm from "../../About/UpdateAboutForm"
import UpdateProductForm from "../../Product/UpdateProductForm"
import UpdateFooterForm from "../../Footer/UpdateFooterForm"
import UpdatePDFS from "../../PDFViewer/UpdatePDFS"


const Editor = () => {
    
    const [home, setHome] = useState(true);
    const [about, setAbout] = useState(false);
    const [product, setProduct] = useState(false);
    const [footer, setFooter] = useState(false);
    const [pdfs, setPDFs] = useState(false);
    
    return (

        <div data-aos="fade-up" data-aos-duration='1000'>
            <hr/>

            <div className="row sticky-top">
                <h1>Website Editor</h1>
            </div>


            <div className="row">
                <div className="column left col-lg-2 col-sm-8 col-md-4">
                    <div className="vertical-menu sticky-top" style={{top: '10%'}}>

                       {
                           //options for the menu to be able to select with page's editing form appears to the user
                       }
                       <a onClick={() => {setHome(true); setAbout(false); setProduct(false); setFooter(false); setPDFs(false)}}
                        href="/dashboard#Home">
                            Home
                        </a>
                        
                        <a onClick={() => {setHome(false); setAbout(true); setProduct(false); setFooter(false); setPDFs(false)}}
                        href="/dashboard#About">
                            About
                        </a>
                        
                        <a onClick={() => {setHome(false); setAbout(false); setProduct(true); setFooter(false); setPDFs(false)}}
                        href="/dashboard#Product">
                            Product
                        </a>
                        
                        <a onClick={() => {setHome(false); setAbout(false); setProduct(false); setFooter(true); setPDFs(false)}}
                        href="/dashboard#Footer">
                            Footer
                        </a>
                       
                        <a onClick={() => {setHome(false); setAbout(false); setProduct(false); setFooter(false); setPDFs(true)}}
                        href="/dashboard#PDFS">
                            PDFS
                        </a>
                    </div>
                </div>

                <div className="column right col-lg-10 col-sm-5 col-md-8 pl-5">
                    {
                    //will display the form to edit the home page
                    home ?
                        <div data-aos="fade-up" data-aos-duration='1000'>
                            <HomeForm/>
                        </div> 
                        : null
                    }

                    {
                    //will display the form to edit the about page
                    about ?
                        <div data-aos="fade-up" data-aos-duration='1000'>
                            <UpdateAboutForm/>
                        </div> 
                        : null
                    }

                    {
                    //will display the form to edit the product page
                    product ?
                        <div data-aos="fade-up" data-aos-duration='1000'>
                            <UpdateProductForm/>
                        </div> 
                        : null
                    }

                    {
                    //will display the form to edit the footer
                    footer ?
                        <div data-aos="fade-up" data-aos-duration='1000'>
                            <UpdateFooterForm/>
                        </div> 
                        : null
                    }

                    {
                    //will display the form to edit the whitepages/documents page
                    pdfs ?
                        <div data-aos="fade-up" data-aos-duration='1000'>
                            <UpdatePDFS/>
                        </div> 
                        : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Editor;
