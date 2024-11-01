import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

function Category () {
    const categoryList = useSelector((store) => store.categoryReducer);
console.log('categoryList:', categoryList);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type:'FETCH_CATEGORY'});
      },[dispatch]);


return(

    <div>
        <h1>This is category page</h1>
        {categoryList.map((item) => {
         return(
         <ul key={item.id}>
            <li>{item.category_name}</li>

         </ul>

         )

        })}
    </div>
)




}

export default Category;