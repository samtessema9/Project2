import React from 'react';
import Filter from './Filter';
import './index.css'

const Search = () => {
    let filters = ['Syntax', 'Errors', 'Formatting', 'Efficency']

    let filtersJsx = filters.map(filter => {
        return <Filter key={filter} text={filter} name={filter}/>
    })

    return ( 
        <div id="search">
            {filtersJsx}
        </div>
     );
}
 
export default Search;