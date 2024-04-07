
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import Modal from 'react-modal';

import { cloudinaryService } from '../services/cloudinary-service.js';
import { postService } from '../services/post.service.js';
import { utilService } from '../services/util.service.js';
import { addPost } from '../store/actions/post.actions.js';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.643'
    }
};

export function AddPost({ isModalOpen, onAddPost, onCloseModal }) {
    const loggedinUser = useSelector(storeState => storeState.userModule.loggedinUser)

    const [newPost, setNewPost] = useState(postService.getEmptyPost())
    const [image, setImage] = useState('')

    useEffect(() => {
        const { _id, fullname, username, imgUrl } = loggedinUser
        setNewPost(prevState => ({ ...prevState, by: {...prevState.by, _id, fullname, username, imgUrl }}))
    }, [])

    function handleChange(ev) {
        const { target } = ev
        // const { _id, fullname, username, imgUrl } = loggedinUser
        console.log('loggedinUser: ', loggedinUser)
        if (target.type === 'textarea') {
            setNewPost(prevState => ({ ...prevState, txt: target.value }))
        }
        else if (target.type === 'file') {
            cloudinaryService.uploadImg(ev)
                .then(url => {
                    setImage(url)
                    setNewPost(prevState => ({ ...prevState, imgUrl: url }))
                })
                .catch(console.log('cannot upload image'))
        }
    }

    async function handleSubmit(ev) {
        console.log('new post: ', newPost)
        ev.preventDefault()
        if (!newPost.txt || !newPost.imgUrl) return
        await addPost(newPost)
        onCloseModal()
    }


    return (
        <div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={onCloseModal}
                style={customStyles}
            >
                <section className="add-modal">
                    <div className="modal-header flex space-between">
                        <a onClick={onCloseModal} className="back-btn">
                            <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
                        </a>
                        <span className='fw600'>Create new post</span>
                        <a onClick={handleSubmit} className='share-btn'>Share</a>
                    </div>
                    <div className="create-post-container flex space-between">
                        <section className="img-section">
                            {image ? <img src={image} /> :
                                <div className="upload-preview flex column">
                                    <i className="fa-regular fa-image"></i>
                                    <label for="imgUpload">Upload Image</label>
                                    <input type="file" accept="img/*" id="imgUpload" onChange={handleChange}></input>
                                </div>
                            }
                        </section>
                        <section className="post-info flex column">
                            <div className="post-user-info flex column">
                                <section className="flex">
                                    <img className='user-avatar' src={loggedinUser.imgUrl} />
                                    <span className='fw600 fs14'>{loggedinUser.username}</span>
                                </section>
                                <textarea onChange={handleChange} name="txt" id="txt" placeholder='Write a caption...'></textarea>
                            </div>
                            <div className="post-info-footer"></div>
                        </section>
                    </div>
                </section>
            </Modal>
        </div>
    );
}
