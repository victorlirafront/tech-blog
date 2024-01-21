import StyledPagination from "./Pagination.styled";
import Link from "next/link";
import { GlobalContext } from '../../Context/pagination';
import { useContext } from "react";
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

    function setNextPage() {
        let nextPage = page += 1
        setPage(nextPage)
    }

    const setPreviowPage = function () {
        let nextPage = page -= 1
        setPage(nextPage)
    }

    const createNextPageArrow = function () {
        if (props.hasNextPage) {
            return (
                <Link onClick={() => setNextPage()} href={`/Pagination/${props.nextPage}?category=${category}`}>
                    <div className="icon-arrow icon-arrow-right">
                        <img src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow-right_eVbRRghk9.png?updatedAt=1696390413993" alt="" />
                    </div>
                </Link>
            )
        }
    }

    const createPreviousPageArrow = function () {
        if (props.hasPreviousPage) {
            return (
                <Link onClick={() => setPreviowPage()} href={`/Pagination/${props.previousPage}?category=${category}`} >
                    <div className="icon-arrow icon-arrow-left">
                        <img src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow-right_eVbRRghk9.png?updatedAt=1696390413993" alt="" />
                    </div>
                </Link>
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
            return ""; // ou outro valor padrão
        }
    };

    return (
        <StyledPagination>

            <div className="pagination">
                {displayPagesCount()}
            </div>
        </StyledPagination>
    )
}

export default Pagination;