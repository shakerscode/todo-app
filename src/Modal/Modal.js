import React from 'react';

const Modal = ({handleSubmit}) => {
    return (
        <div className='editor-box'>
                    <div className='main-editor'>
                        <form 
                        onSubmit={handleSubmit}
                        className='editor-form'>
                            <input name='title' type="text" placeholder='Title here'/>
                            <textarea name='post' placeholder='Start writing...' cols="30" rows="10"></textarea>
                            <input type="submit" value="Save" className='save-btn'/>
                        </form>
                    </div>
                </div>
    );
};

export default Modal;