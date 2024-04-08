import { useState } from "react"
import { PostEdit } from "./PostEdit"

export function PostMenu({ post, setIsPostMenuOpen, onRemovePost }) {
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)

    function onHandleRemove() {
        console.log('post to remove: PostMenu', post)
        onRemovePost(post._id)
    }

    function onHandleUpdate() {
        setIsUpdateModalOpen(true)
    }


    return (
        <section>
            <div className="modal-overlay" onClick={() => setIsPostMenuOpen(false)}>
                <div className="modal-content post-menu" onClick={(e) => e.stopPropagation()}>
                    <button className="delete-btn clean-btn" onClick={onHandleRemove}>Delete</button>
                    <button className="upgate-post-btn clean-btn" onClick={onHandleUpdate}>Update</button>
                </div>
            </div>
            {isUpdateModalOpen &&
                <PostEdit 
                post={post} 
                setIsUpdateModalOpen={setIsUpdateModalOpen}
                setIsPostMenuOpen={setIsPostMenuOpen}
                />}
        </section>
    )
}