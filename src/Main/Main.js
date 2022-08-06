import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { HiOutlinePlusCircle } from 'react-icons/hi'
import EditModal from '../EditModal/EditModal';
import Modal from '../Modal/Modal';
import PostCard from '../PostCard/PostCard';

const Main = () => {
    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)


    const { isLoading, error, data: notes, refetch } = useQuery(['notes'], () =>
        fetch('http://localhost:5000/notes').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        <p>Loading...</p>
    }
    if(error){
        console.log(error);
    }

    const handleSubmit = event => {
        event.preventDefault()
        const title = event.target.title.value;
        const post = event.target.post.value;
        const data = { title: title, post: post }

        const requestOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        fetch('http://localhost:5000/notes', requestOptions)
            .then(res => res.json())
            .then(data =>{ 
                refetch()
                setOpen(false)
                setOpenEdit(false)
            })

    }

    // const handleSavePost = (event, id) => {
    //     event.preventDefault()
    //     const title = event.target.title.value;
    //     const post = event.target.post.value;
    //     const data = { title: title, post: post }
        
    //     // const requestOptions = {
    //     //     method: 'PUT',
    //     //     headers: { 'content-type': 'application/json' },
    //     //     body: JSON.stringify(data)
    //     // }
    //     console.log(id);
    //     // fetch(`http://localhost:5000/notes/id=${_id}`, requestOptions)
    //     //     .then(res => res.json())
    //     //     .then(data => console.log(data))
    // }
    return (
        <section className='relative'>
            <div className='writing-box-main'>
                <div onClick={() => setOpen(true)} className='writing-box'>
                    <HiOutlinePlusCircle />
                    <p>Add Note</p>
                </div>
            </div>
            <hr className='divider' />

            <div className='note-box'>
                {notes?.length === 0 && <p className='empty-box-text'>Your all note will appear here.</p>}
                <div className='all-notes'>
                    {
                        notes?.map((note, i) => <PostCard key={i} note={note} setOpenEdit={setOpenEdit} refetch={refetch}></PostCard>)
                    }
                </div>
            </div>
            {open && <Modal handleSubmit={handleSubmit}></Modal>
            }

            {openEdit && <EditModal openEdit={openEdit}  setOpenEdit={setOpenEdit} refetch={refetch}/>
            }
        </section>
    );
};

export default Main;