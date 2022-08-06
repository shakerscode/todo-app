import React from 'react';

const EditModal = ({openEdit, setOpenEdit, refetch}) => {
    const {_id, title, post} = openEdit;
    const handleSavePost = (e, id) => {
        e.preventDefault()   
        const title = e.target.title.value;
        const post = e.target.post.value;
        const data = { title: title, post: post }
        
        const requestOptions = {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }
        fetch(`http://localhost:5000/notes/${id}`, requestOptions)
            .then(res => res.json())
            .then(data =>{
                setOpenEdit(false)
                refetch()
            })
    }
     
    return (
        <div className='editor-box'>
                    <div className='main-editor'>
                        <form 
                        onSubmit={(e) => handleSavePost(e, _id)}
                        className='editor-form'>
                            <input name='title' type="text" placeholder='Title here' defaultValue={title} />
                            <textarea name='post' placeholder='Start writing...' cols="30" rows="10" defaultValue={post}></textarea>
                            <input type="submit" value="Save" className='save-btn'/>
                        </form>
                    </div>
                </div>
    );
};

export default EditModal;