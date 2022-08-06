import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'

const PostCard = ({ note, setOpenEdit, refetch }) => {
    const { _id, title, post } = note;
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this note?')
        if (proceed) {
            fetch(`https://powerful-garden-20229.herokuapp.com/notes/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    refetch();
                })
        }
    }
    const handleEdit = (id) => {
        setOpenEdit(note)
    }

    return (
        <div className='post-card'>
            <div className='text-box'>
                <h1>{title}</h1>
                <p>{post.slice(0, 100)}...</p>
            </div>
            <div className='card-icon'>
                <RiDeleteBin6Line onClick={() => handleDelete(_id)} className='icon-color' />
                <FiEdit onClick={() => handleEdit(_id, note)} className='icon-color' />
            </div>
        </div>
    );
};

export default PostCard;