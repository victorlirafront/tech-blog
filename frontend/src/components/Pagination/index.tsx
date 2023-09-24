import StyledPagination from "./Pagination.styled";

const Pagination = function(){
    return (
        <StyledPagination>
            <div className="pagination">
                <div className="icon-arrow icon-arrow-left">
                    <img src="./arrow-right.png" alt="" />
                </div>

                &nbsp; 
                <p>Pagination</p>
                &nbsp; 
                
                <div className="icon-arrow icon-arrow-right"> 
                    <img src="./arrow-right.png" alt="" />
                </div>
            </div>
        </StyledPagination>
    )
}

export default Pagination;