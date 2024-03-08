import StyledPagination from './Pagination.styled';
import { GlobalContext } from '../../Context/pagination';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';

interface IpropsPagination {
  pageLength: number;
  page: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  previousPage: number;
  nextPage: number;
}

const Pagination = function (props: IpropsPagination) {
  const { setPage, page } = useContext(GlobalContext);
  const router = useRouter();
  let currentCategory = router.query.category;

  if (currentCategory === undefined) {
    currentCategory = 'all';
  }

  function setNextPage(route: number) {
    let currentPage = page;
    const nextPage = (currentPage += 1);
    setPage(nextPage);

    router.push({
      pathname: router.pathname,
      query: {
        page: route,
        category: currentCategory,
      },
    });
  }

  const setPreviowPage = function (route: number) {
    let currentPage = page;
    const nextPage = (currentPage -= 1);
    setPage(nextPage);

    router.push({
      pathname: router.pathname,
      query: {
        page: route,
        category: currentCategory,
      },
    });
  };

  const createNextPageArrow = function () {
    if (props.hasNextPage) {
      return (
        <li onClick={() => setNextPage(props.nextPage)}>
          <div className="icon-arrow icon-arrow-right">
            <Image
              width={20}
              height={20}
              loading="lazy"
              src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow-right_eVbRRghk9.png?updatedAt=1696390413993"
              alt=""
            />
          </div>
        </li>
      );
    }
  };

  const createPreviousPageArrow = function () {
    if (props.hasPreviousPage) {
      return (
        <li onClick={() => setPreviowPage(props.previousPage)}>
          <div className="icon-arrow icon-arrow-left">
            <Image
              width={20}
              height={20}
              loading="lazy"
              src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow-right_eVbRRghk9.png?updatedAt=1696390413993"
              alt=""
            />
          </div>
        </li>
      );
    }
  };

  const displayPagesCount = function () {
    if (props.hasNextPage || props.hasPreviousPage) {
      return (
        <div className="pagination">
          {createPreviousPageArrow()}
          &nbsp;
          <p>
            {props.page} / {props.pageLength} Pages
          </p>
          &nbsp;
          {createNextPageArrow()}
        </div>
      );
    } else {
      return '';
    }
  };

  return (
    <StyledPagination>
      <div className="pagination-wrapper">{displayPagesCount()}</div>
    </StyledPagination>
  );
};

export default Pagination;
