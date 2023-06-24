import { StyledPost } from './Post.styled';
import Link from 'next/link';

const Post = function (props: any) {
    return (
        <Link href={`Posts/${props.id}`} style={{textDecoration: 'none'}}>
            <StyledPost>
                <h1>{props.title}</h1>
                <p>{props.post_text}</p>
                <h4>{props.user_name}</h4>
            </StyledPost>
        </Link>
    );
};

export default Post;
