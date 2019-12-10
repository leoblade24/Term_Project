import React, {useState} from 'react';
import axios from 'axios';
import data from '../../data/Footer'
const useHomePage = () => {
    const [inputs, setInputs] = useState(data);
    //when the submit button is pressed it will send a request to the server with new information to write to the file containing the respective data
    const handleSubmit = async(event) => {
        event.preventDefault();
        axios.post("/api/update/updateFooter", inputs)
            .then(res => {
                
        });
    };
    //updating the text for the respective object at index in inputs
    const setText=(index,information)=>{
        let temporary=inputs;
        temporary.data[index].text=information;
        setInputs(inputs=>({...inputs, data:temporary.data}));
    };
    //updating the name/title for the respective object at index in inputs
    const setName=(index,information)=>{
        let temporary=inputs;
        temporary.data[index].name=information;
        setInputs(inputs=>({...inputs, data:temporary.data}));
    };

    return {
        handleSubmit,
        inputs,
        setText,
        setName
    };
};
export default useHomePage;