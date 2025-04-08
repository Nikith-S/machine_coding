import React from 'react'

const pagination = ({products , page, setPage, total}) => {

const handlePagination =(selectedPage) => {
    if(selectedPage > 1 && selectedPage <= total / 10){
        setPage(selectedPage)
    }

}

  return (
<>


{
products.length ? 
(<div className="pagination">
<span onClick={() => handlePagination(page + 1)}  className={page >= total / 10 ? "pagination-disabled" : ""}>next</span>


<span>
{[...Array(total/ 10)].map((_, i) => {
<span onClick={() => handlePagination(i + 1)}
> {i + 1}</span>
 })}
</span>


<span onClick={() => handlePagination(page - 1)} className={page <= 1 ? "pagination-disabled" : ""}>prev</span>
</div> ) : null
}

</>
  )
}

export default pagination
