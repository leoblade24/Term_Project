import React, {useState, useEffect} from 'react';
import {Document, Page} from 'react-pdf';

const PDFViewer = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    //used to change the page
    useEffect(() => {
        setPageNum(pageNum);
        setNumPages(numPages);
    }, [numPages, pageNum, props]);

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    };
    //move to previous page
    const goToPrevPage = () => {
        if (pageNum === 1)
            setPageNum(numPages);
        else
            setPageNum(pageNum - 1);
    };
    //move to the next page
    const goToNextPage = () => {
        if (pageNum === numPages)
            setPageNum(1);
        else
            setPageNum(pageNum + 1);
    };
    //setting which file appears in the pdf viewer
    const defaultPDF = (
        <div className='pdf'>
        <Document
            file={props.file}
            onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNum}/>
        </Document>
        </div>
    )
    //displaying number pages and which page the user is on
    const pageBar = (
        <div className='border border-info'>
            <p align="center">
                Page <span className='font-weight-bolder'>{pageNum}</span> of <span
                className='font-weight-bolder'>{numPages}</span>
            </p>
        </div>
    )
    //creating the button that will allow the user to navigate between the pdf pages
    const buttonChanger = (
        <div align="center">
            <button onClick={goToPrevPage} className='m-3 btn btn-dark'>
                Prev
            </button>
            <button onClick={goToNextPage} className='btn btn-dark'>
                Next
            </button>
        </div>
    )
    //doesn't diplay the page changer is there is only one page
    if (numPages === 1)  {
        return (
            <div>
                {defaultPDF}
                {pageBar}
            </div>
        )
    } else {
        return (
            <div>
                {defaultPDF}
                    {buttonChanger}
                {pageBar}
            </div>
        )
    }
};

export default PDFViewer;
