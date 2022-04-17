import React, { useState } from 'react'

function Pagination(props) {
    let { cPage, changePage, maxPages, incrementPage, decrementPage, itemsInEachPage, changeItemsInEachPage, maxLen } = props;
    console.log(itemsInEachPage);
    const [items, setItems] = useState(itemsInEachPage);
    // console.log(items);

    let updateItems = (e) => {
        let newItems = Number(e.target.value);
        console.log(newItems);
        if (newItems <= 0 || newItems > maxLen) {

        } else {
            changeItemsInEachPage(newItems);
            setItems(newItems);
        }
    }
    console.log(maxPages);

    let pageArr = [];
    for (let i = 0; i < maxPages; i++) {
        pageArr[i] = i + 1;
    }

    let isAllowedToPrevious = cPage > 1;
    let isAllowedToNext = cPage < maxPages;
    return (
        <>
            <div>
                {isAllowedToPrevious == true ? <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 my-2' onClick={decrementPage}>Previous</button> : <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 my-2 cursor-not-allowed'>Previous</button>}
                {pageArr.map((page) => {
                    return (
                        <button id={page} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => changePage(page)}>{page}</button>
                    )
                })}
                {isAllowedToNext == true ? <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 my-2' onClick={incrementPage}>Next</button> : <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 my-2 cursor-not-allowed' >Next</button>}
            </div>
            <input type="number"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-1/2"
                value={items} onChange={updateItems} />
        </>
    )
}

export default Pagination