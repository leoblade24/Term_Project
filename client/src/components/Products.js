import React from 'react';
import PDFViewer from '../components/PDFViewer/PDFViewer';
import {HashLink as Link} from "react-router-hash-link";
import data from "../data/PDFS";

const ProductsInfo = () => {
    let getKey;
    for (let key in data) {
        getKey = key;
        break;
    }

    return (
        <div>
            <Link className='' to="/whitepages#top" style={{ textDecoration: 'none',color:"black" }}>
                <h1>Our Documents:</h1>
            </Link>
            <div>
                <h2>Preview</h2>
                <div className='position-relative'>
                    {
                        //displaying a single pdf for a preview
                    }
                    <PDFViewer file={data[getKey][0].file}/>
                </div>
                <div className='border border-info'>
                    <p>
                        For more Information:
                    </p>
                    <p>
                        {
                            //Linking to the documents page
                        }
                        <Link to="/whitepages">See All Documents</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductsInfo;