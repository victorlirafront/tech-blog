import StyledPagination from "./Pagination.styled";
import Link from "next/link";
import { GlobalContext } from '../../Context/pagination';
import { useContext, useEffect } from "react";

interface IpropsPagination {
    pageLength: number
    page: number
    hasNextPage: boolean
    hasPreviousPage: boolean
}

const Pagination = function(props: IpropsPagination){
    let { setPage, page, setTotalPages } = useContext(GlobalContext);

    function setNextPage() {
        let nextPage = page += 1
        setPage(nextPage)
    }

    const setPreviowPage = function(){
        let nextPage = page -= 1
        setPage(nextPage)
    }


    const createNextPageArrow = function(){
        if(props.hasNextPage){
            return(
                <Link onClick={() => setNextPage()} href={`/Pagination/${page}`}>
                    <div className="icon-arrow icon-arrow-right"> 
                        <img src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow-right_eVbRRghk9.png?updatedAt=1696390413993" alt="" />
                    </div>
                </Link>
            )
        }
    }

    const createPreviousPageArrow = function(){
        if(props.hasPreviousPage){
            return(
                <Link onClick={() => setPreviowPage()} href={`/Pagination/${page -2}`} >
                    <div className="icon-arrow icon-arrow-left">
                        <img src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow-right_eVbRRghk9.png?updatedAt=1696390413993" alt="" />
                    </div>
                </Link>
            )
        }
    }

    return (
        <StyledPagination>
            <div className="pagination">

                {createPreviousPageArrow()}

                &nbsp; 
                    <p> {props.page} / {props.pageLength}  Pages</p>
                &nbsp; 
                
                {createNextPageArrow()}

            </div>
        </StyledPagination>
    )
}

export default Pagination;