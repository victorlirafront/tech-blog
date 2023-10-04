import StyledPagination from "./Pagination.styled";
import Link from "next/link";

const Pagination = function(){
    function gerarNumeroAleatorio() {
        const numeroAleatorio = Math.floor(Math.random() * 4) + 1;
        return numeroAleatorio;
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
                
                <Link href={`/Pagination/${gerarNumeroAleatorio()}`}>
                    <div className="icon-arrow icon-arrow-right"> 
                        <img src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow-right_eVbRRghk9.png?updatedAt=1696390413993" alt="" />
                    </div>
                </Link>
            </div>
        </StyledPagination>
    )
}

export default Pagination;