import React from 'react';
import useProductPage from './useProductPage';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UpdateProductForm = () => {
    let {
        inputs, handleSubmit, setText, setName, handleNewSection,
        handleNewSectionChange, section, deleteSection
    } = useProductPage();
    return (
        <div className='border-primary border p-4 m-3'>
            <h2>Update or Delete Sections on Product Page</h2>
            {
                //will use each object in data to decide which form is created
                inputs.data.map((stuff, index) => {
                    //if the section type is info will return form where they can edit the Title and the Text of the section about a product; they can also delete the section
                    //else it displays a form where they can change the link to the external ordering and update the test of the ordering section.
                    if (stuff.type === "info") {
                        return (
                            <Form className='border-primary border p-4 m-3' key={stuff + index}>
                                <Form.Label column=''>Title of Section {index + 1}:</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Name to Update"
                                              value={inputs.data[index].name}
                                              onChange={event => setName(index, event.target.value)}
                                              required/>
                                <Form.Label column=''>Text of Section {index + 1}</Form.Label>
                                <Form.Control as="textarea" type="text" rows="5"
                                              placeholder="Text to Update"
                                              value={inputs.data[index].text}
                                              onChange={event => setText(index, event.target.value)}
                                              required/>
                                <div className='mt-3 mb-3'>
                                    <Button className='mr-3' type="submit" onClick={handleSubmit}> Update
                                        Section {index + 1}</Button>
                                    <Button type="submit" onClick={event => deleteSection(index, event)}>Delete
                                        Section {index + 1}</Button>
                                </div>
                            </Form>
                        )
                    } else {
                        return (
                            <div className='border-primary border p-4 m-3' key={index}>
                                <h2>Update Order Link</h2>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Label column=''>Title of Section {index + 1}:</Form.Label>
                                    <Form.Control type="text"
                                                  placeholder="Name to Update"
                                                  value={stuff.name}
                                                  onChange={event => setName(index, event.target.value)}
                                    />
                                    <Form.Label column=''>Input the Link</Form.Label>
                                    <Form.Control type="text"
                                                  placeholder="Link to Update"
                                                  value={stuff.text}
                                                  onChange={event => setText(index, event.target.value)}
                                    />
                                </Form>
                            </div>
                        )
                    }
                })
            }
            <div className='border-primary border p-4 m-3'>
                {
                    //allowing for the creation of a new Product section
                }
                <h2>Add new section</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Label column=''>Section Title:</Form.Label>
                    <Form.Control type="text" placeholder="Name for New Section" name="name" value={section.name}
                                  onChange={handleNewSectionChange} required/>
                    <Form.Label column=''>Section Information:</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="Text for New Section" name="text"
                                  value={section.text} onChange={handleNewSectionChange} required/>
                    <Form.Label column=''>Section Unique id:</Form.Label>
                    <Form.Control type="text" placeholder="ID for New Section" name="id" value={section.id}
                                  onChange={handleNewSectionChange} required/>
                    <Button className='mr-3 mb-3 mt-3' type="submit" onClick={handleNewSection}>Make new
                        Section</Button>
                </Form>
            </div>
        </div>
    );
};


export default UpdateProductForm;
