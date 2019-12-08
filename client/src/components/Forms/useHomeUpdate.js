import React, {useState} from 'react';
import axios from 'axios';
import data from '../../data/HomePage'
const useHomePage = () => {
    const [inputs, setInputs] = useState(data);
    const [section,setSection]=useState({id:"",name:"", text:"",type:"info"});
    //update the name/title of one of the info cards in the homepage
    const setInfoName=(index,index2,info)=>{
        let temporary=inputs;
        temporary.data[index].info[index2].title=info;
        setInputs(inputs=>({...inputs,data:temporary.data}));
    };
    //update the subtitle of one of the info cards in the homepage
    const setInfoSub=(index,index2,info)=>{
        let temporary=inputs;
        temporary.data[index].info[index2].subtitle=info;
        setInputs(inputs=>({...inputs,data:temporary.data}));
    };
    //update the text of one of the info cards in the homepage
    const setInfoCardText=(index,index2,info)=>{
        let temporary=inputs;
        temporary.data[index].info[index2].information=info;
        setInputs(inputs=>({...inputs,data:temporary.data}));
    };
    //removing the section from the JSON object which will in turn remove it from front end page
    const deleteSection=(index,event)=>{
        let temporary=inputs;
        //removing the array object
        temporary.data.splice(index,1);
        setInputs(inputs=>({...inputs,data:temporary.data}));
        //updating the JSON object
        handleSubmit(event);
    };
    //updating elements in a new section
    const handleNewSectionChange=(event)=>{
        event.persist();
        setSection({...section, [event.target.name]: event.target.value});
    };
    //adding a new section/object to the array and then calling handleSubmit
    const handleNewSection=(event)=>{
        let temporary=inputs;
        temporary.data.push(section);
        setInputs(inputs=>({...inputs,data:temporary.data}));
        handleSubmit(event);
    };
    //sending the request to the server to update the Home Page
    const handleSubmit = async(event) => {
        event.preventDefault();
        axios.post("/api/update/updateHome", inputs)
            .then(res => {
                
        });
    };
    //updating the text of an existing section
    const setText=(index,information)=>{
        let temporary=inputs;
        temporary.data[index].text=information;
        setInputs(inputs=>({...inputs, data:temporary.data}));
    };
    //updating the name/title of an existing section
    const setName=(index,information)=>{
        let temporary=inputs;
        temporary.data[index].name=information;
        setInputs(inputs=>({...inputs, data:temporary.data}));
    };

    return {
        handleSubmit,
        inputs,
        setText,
        setName,
        handleNewSection,
        handleNewSectionChange,
        section,
        deleteSection,
        setInfoCardText,
        setInfoName,
        setInfoSub
    };
};
export default useHomePage;