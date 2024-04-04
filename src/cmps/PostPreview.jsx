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
                </div>
            </section>

        </article>
    )
}