import {Router, Request, Response} from 'express';
import fs from 'fs';


const updateRouter = Router();

//will get the information in the req.body and use it to rewrite the JSON file that contains the information for the about page
updateRouter.post('/updateAbout', (req: Request, res: Response) => {
    const jsonString = JSON.stringify(req.body);

    fs.writeFileSync('../client/src/data/AboutPage.json', jsonString);
    res.send("hello")
});
//will get the information in the req.body and use it to rewrite the JSON file that contains the information for the product page
updateRouter.post('/updateProduct', (req: Request, res: Response) => {
    const jsonString = JSON.stringify(req.body);

    fs.writeFileSync('../client/src/data/ProductPage.json', jsonString);
    res.send("Product Page Updated")
});
//will get the information in the req.body and use it to rewrite the JSON file that contains the information for the home page
updateRouter.post('/updateHome', (req: Request, res: Response) => {
    const jsonString = JSON.stringify(req.body);

    fs.writeFileSync('../client/src/data/HomePage.json', jsonString);
    res.send("Home Page Updated")
});
//will get the information in the req.body and use it to rewrite the JSON file that contains the information for the footer
updateRouter.post('/updateFooter', (req: Request, res: Response) => {
    const jsonString = JSON.stringify(req.body);

    fs.writeFileSync('../client/src/data/Footer.json', jsonString);
    res.send("Footer Updated")
});
//will get the information in the req.body and use it to rewrite the JSON file that contains the information for the pdf
updateRouter.post('/updatePDFS', (req: Request, res: Response) => {
    const jsonString = JSON.stringify(req.body);

    fs.writeFileSync('../client/src/data/PDFS.json', jsonString);
    res.send("PDFS Updated")
});

export default updateRouter;
