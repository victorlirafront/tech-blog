import { StyledPost } from './Post.styled';
import Link from 'next/link';

const Post = function (props: any) {
    const dateObject = new Date(props.date);
    const formattedDate = dateObject.toLocaleDateString();

    return (
        <StyledPost>
            <div
                className="post-image"
                style={{ backgroundImage: `url(${props.post_image})` }}
            ></div>
            <div className="post-body">
                <div className="category-wrapper">
                    <p className="post-date">{formattedDate}</p>
                    <p className="post-category">javascript</p>
                </div>

                <h1 className="post-title">{props.title}</h1>
                <p className="post-content">
                    {props.content.length > 100
                        ? props.content.substring(0, 100) + ' ...'
                        : props.content}
                </p>

                <ul className="post-author">
                    <li>Autor: {props.author}</li>
                </ul>

                <Link
                    href={`Posts/${props.id}`}
                    style={{ textDecoration: 'none' }}
                >
                    <div className="read-more-wrapper">
                        <p>Read more</p>
                        <img src="./arrow-right.png?v=2" />
                    </div>
                </Link>
            </div>
        </StyledPost>
    );
};

export default Post;
