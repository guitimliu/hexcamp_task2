// Pagination.jsx
import React, { useState } from 'react';

function Pagination() {
  const pageNum = 3;
  const [ currentPage, setCurrentPage ] = useState<number>(1);

  return (
    <ul className="flex">
      {
        Array.from({ length: pageNum }, (_, page) => (
          <li>
            <button
              type="button"
              onClick={() => setCurrentPage(page + 1)}
              className={`${currentPage === page + 1 ? 'bg-black text-white' : ''} px-3 py-1`}
            >
              { page + 1 }
            </button>
          </li>
        ))
      }
      
    </ul>
  );
}

export default Pagination;
