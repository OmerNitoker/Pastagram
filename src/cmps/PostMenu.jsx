
export function PostMenu({ post, setIsPostMenuOpen, onRemovePost }) {

    function onHandleRemove() {
        console.log('post', post)
        onRemovePost(post._id)
    }


    return (
        <div className="modal-overlay" onClick={() => setIsPostMenuOpen(false)}>
            <div className="modal-content post-menu" onClick={(e) => e.stopPropagation()}>
                <button className="delete-btn clean-btn" onClick={onHandleRemove}>Delete</button>
                <button className="upgate-post-btn clean-btn">Update</button>
            </div>
        </div>
    )
}