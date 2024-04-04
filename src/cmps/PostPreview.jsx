import { Link } from "react-router-dom";

export function PostPreview({ post }) {
    return (
        <article className="post-preview flex column">
            <section className="post-header flex align-center">
                <img className="user-avatar" src={post.by.imgUrl} />
                <Link className="clean-link">{post.by.username}</Link>
                <div className="post-time">1h</div>
            </section>
            <img className="post-img" src={post.imgUrl} alt="" />
            <section className="post-footer flex column">
                <div className="btn-container flex">
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-comment"></i>
                    <i className="fa-regular fa-paper-plane"></i>
                    <i className="fa-regular fa-bookmark save-btn" aria-hidden="true"></i>
                </div>
                <div>
                    <Link className="clean-link">{post.by.username}</Link>
                    <span className="story-text">{post.txt}</span>
                </div>
                {post.comments.length && <span>view {post.comments.length} {post.comments.length === 1 ? 'comment' : 'comments'}</span>}
            </section>

        </article>
    )
}