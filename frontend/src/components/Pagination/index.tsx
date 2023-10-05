import StyledPagination from "./Pagination.styled";
import Link from "next/link";
import { GlobalContext } from '../../Context/pagination';
import { useContext } from "react";

const Pagination = function(){
    let { setpage, page } = useContext(GlobalContext);

    function setNextPage() {
        let nextPage = page += 1
        setpage(nextPage)
      }

    return (
        <StyledPagination>
            <div className="pagination">
                <div className="icon-arrow icon-arrow-left">
                    <img src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow-right_eVbRRghk9.png?updatedAt=1696390413993" alt="" />
                </div>

                &nbsp; 
                    <p>Pagination</p>
                &nbsp; 
                
                <Link onClick={() => setNextPage()} href={`/Pagination/${page}`}>
                    <div className="icon-arrow icon-arrow-right"> 
                        <img src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow-right_eVbRRghk9.png?updatedAt=1696390413993" alt="" />
                    </div>
                </Link>
            </div>
        </StyledPagination>
    )
}

export default Pagination;