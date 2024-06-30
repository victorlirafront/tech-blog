import StyledPost from './Post.styled';
import { removeEspecialChars } from '../../helperFunctions/removeEspecialChars';
import dateFormatter from '@/helperFunctions/dateFormatter';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';
import { useAddToFavoritsContext } from '@/Context/addToFavorits';
import { useSignInContext } from '@/Context/signIn';
import { IProps } from './Interface';

const Post: React.FC<IProps> = props => {
  const { addToFavoritsHandler } = useAddToFavoritsContext();
  const { isloggedIn, handleClick } = useSignInContext();

  const dateObject = new Date(props.date);
  const formattedDate = dateFormatter(dateObject.toLocaleDateString());
  const router = useRouter();

  const handleLinkClick = async (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains('favorits--trigger')) {
      if (!isloggedIn) {
        handleClick();
        return;
      }
      addToFavoritsHandler(e);
      return;
    }

    router.push({
      pathname: `/Posts/${props.id}`,
      query: {},
    });
  };

  return (
    <StyledPost
      data-aos-delay={props.aos_delay}
      data-aos={props.aos_type}
      style={props.style}
      onClick={handleLinkClick}
      data-id={props.id}
    >
      <motion.div whileHover={{ y: props.hover_animation }} className="motion-box">
        <div className="post-image-wrapper">
          <div className="add-to-favorits__wrapper favorits--trigger">
            <Image
              className="add-to-favorits favorits--trigger"
              width={40}
              height={40}
              alt="add to favorits"
              src={props.onUpdateFavoritSource}
            />
          </div>
          <div className="post-image-wrapper">
            <div
              className="post-image"
              style={{ backgroundImage: `url(${props.post_image})` }}
            ></div>
          </div>
        </div>
        <div className="post-body">
          <div className="category-wrapper">
            <p className="post-date">{formattedDate}</p>
            <p className="post-category">{props.category}</p>
          </div>

          <h1 className="post-title">{props.title}</h1>
          <p className="post-content">
            {props.content.length > 100
              ? removeEspecialChars(props.content.substring(0, 100)) + ' ...'
              : removeEspecialChars(props.content)}
          </p>

          <ul className="post-author">
            <li>Author: {props.author}</li>
          </ul>

          <div className="read-more-wrapper">
            <p>Read more</p>
            <Image
              width={20}
              height={20}
              alt=""
              loading="lazy"
              src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow-right_eVbRRghk9.png?updatedAt=1696390413993"
            />
          </div>
        </div>
      </motion.div>
    </StyledPost>
  );
};

export default Post;
