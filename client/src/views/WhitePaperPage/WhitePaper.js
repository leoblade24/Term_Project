import React from 'react';
import './WhitePaper.css';
import NavBar from '../../components/Header/NavBar';
import navItems from "../../utils/navItems";
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import data from '../../data/PDFS';

const WhitePaper = () => {
    var pdfViewers = []; 
    for (var key in data) {
        for (var i in data[key]) {
            //console.log(data[key][i]);
            //console.log(key);
            //console.log(i);
            //console.log(data[key][i].file);
            pdfViewers.push(              
                <div className={data[key][i].id + "-page"} id={data[key][i].id}>
                    {
                        //displaying a PDF file using the file name stored in a JSON file
                    }
                <PDFViewer file={data[key][i].file}/>
                </div>
            );
        }
    }

    return(
        <div className="main">
            <h1> Documents </h1>
            <NavBar items={navItems["home-bar"]}/>
            <a className="navbar-brand nav-item sticky-left" href="/home">
                <img src="/assets/home.png" width="30" height="30" alt=""/>
            </a>

            {pdfViewers}
        </div>
    )
};
export default WhitePaper;  
