import { useState } from "react"
import { updatePost } from "../store/actions/post.actions"

export function PostEdit({ post, setIsUpdateModalOpen, setIsPostMenuOpen }) {
    const [postToEdit, setPostToEdit] = useState(post)

    function handleChange(ev) {
        const { target } = ev
        if (target.type === 'textarea') {
            setPostToEdit(prevState => ({ ...prevState, txt: target.value }))
        }
    }

    async function handleSubmit(ev) {
        ev.preventDefault()
        try {
            await updatePost(postToEdit)
        }
        catch (err) {
            console.log('Had a problem editing the post')
            throw err
        }
        finally {
            closeModal()
        }
    }

    function closeModal() {
        setIsUpdateModalOpen(false)
        setIsPostMenuOpen(false)
    }


    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content update-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header flex space-between">
                    <span className="back-btn" onClick={() => setIsUpdateModalOpen(false)}>Cancel</span>
                    <span className='fw600'>Edit info</span>
                    <a onClick={handleSubmit} className='share-btn'>Done</a>
                </div>
                <div className="edit-post-container flex space-between">
                    <section className="img-section">
                        <img src={postToEdit.imgUrl} />
                    </section>
                    <section className="post-info flex column">
                        <div className="post-user-info flex column">
                            <section className="flex">
                                <img className='user-avatar' src={postToEdit.by.imgUrl} />
                                <span className='fw600 fs14'>{postToEdit.by.username}</span>
                            </section>
                            <textarea onChange={handleChange} name="txt" id="txt" rows="10" placeholder='Write a caption...'>{post.txt}</textarea>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )

}