import StyledPost from './Post.styled';
import Link from 'next/link';
import { removeEspecialChars } from '../../helperFunctions/removeEspecialChars'
import dateFormatter from '@/helperFunctions/dateFormatter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { motion } from "framer-motion"

interface Iprops {
    date: string
    style?: {}
    post_image: string
    title: string
    content: string
    author: string
    id: string
    category: string
    meta_tag_title: string
    meta_tag_description: string
    className?: string
    aos_delay: string
    aos_type: string
    hover_animation: number
}

const Post = function (props: Iprops) {
    const dateObject = new Date(props.date);
    const formattedDate = dateObject.toLocaleDateString();

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <StyledPost
            data-aos-delay={props.aos_delay}
            data-aos={props.aos_type}
            style={props.style} >
            <motion.div whileHover={{ y: props.hover_animation }} className='motion-box'>
                <div
                    className="post-image"
                    style={{ backgroundImage: `url(${props.post_image})` }}
                ></div>
                <div className="post-body">
                    <div className="category-wrapper">
                        <p className="post-date">{dateFormatter(formattedDate)}</p>
                        <p className="post-category">{props.category}</p>
                    </div>

                    <h1 className="post-title">{props.title}</h1>
                    <p className="post-content">
                        {props.content.length > 100
                            ? removeEspecialChars(props.content.substring(0, 100)) + ' ...'
                            : removeEspecialChars(props.content)}
                    </p>

                    <ul className="post-author">
                        <li>Autor: {props.author}</li>
                    </ul>

                    <Link
                        href={`/Posts/${props.id}`}
                        style={{ textDecoration: 'none' }}
                    >
                        <div className="read-more-wrapper">
                            <p>Read more</p>
                            <img src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow-right_eVbRRghk9.png?updatedAt=1696390413993" />
                        </div>
                    </Link>
                </div>
            </motion.div>
        </StyledPost>
    );
};

export default Post;
