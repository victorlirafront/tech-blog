import StyledPagination from "./Pagination.styled";
import React from 'react';
import { GlobalContext } from '../../Context/pagination';
import { useContext, useState, useEffect } from "react";
import { useRouter } from 'next/router';

interface IpropsPagination {
    pageLength: number
    page: number
    hasNextPage: boolean
    hasPreviousPage: boolean
    previousPage: number
    nextPage: number
}

const Pagination = function (props: IpropsPagination) {
    let { setPage, page } = useContext(GlobalContext);
    const router = useRouter();
    let category = router.query.category;

    if (category === undefined) {
        category = "all"
    }

    function setNextPage(route: any, category: any) {
        let nextPage = page += 1
        setPage(nextPage)
        
        router.push({
            pathname: router.pathname,
            query: { 
                page: route,
                category: category, 
            },
        });
    }

    const setPreviowPage = function (route: any, category: any) {
        let nextPage = page -= 1
        setPage(nextPage)

        router.push({
            pathname: router.pathname,
            query: { 
                page: route,
                category: category, 
            },
        });
    }

    const createNextPageArrow = function () {
        if (props.hasNextPage) {
            return (
                <li onClick={() => setNextPage(props.nextPage, category)}>
                    <div className="icon-arrow icon-arrow-right">
                        <img src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow-right_eVbRRghk9.png?updatedAt=1696390413993" alt="" />
                    </div>
                </li>
            )
        }
    }

    const createPreviousPageArrow = function () {
        if (props.hasPreviousPage) {
            return (
                <li onClick={() => setPreviowPage(props.previousPage, category)} >
                    <div className="icon-arrow icon-arrow-left">
                        <img src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow-right_eVbRRghk9.png?updatedAt=1696390413993" alt="" />
                    </div>
                </li>
            )
        }
    }

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
            return "";
        }
    };

    return (
        <StyledPagination>
            <div className="pagination-wrapper">
                {displayPagesCount()}
            </div>
        </StyledPagination>
    )
}

export default Pagination;