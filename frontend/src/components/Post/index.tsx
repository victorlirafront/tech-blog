import { StyledPost } from './Post.styled';
import Link from 'next/link';

const Post = function (props: any) {
    return (
        <Link href={`Posts/${props.id}`} style={{textDecoration: 'none'}}>
            <StyledPost>
                <h1>{props.title}</h1>
                <p>{props.content.length > 500 ? props.content.substring(0,500) + ' ...' : props.content}</p>
                <h4>{props.author}</h4>
            </StyledPost>
        </Link>
    );
};

export default Post;
