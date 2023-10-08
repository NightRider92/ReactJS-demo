import React, { useState } from 'react'

var dataArray = ["apples", "pears", "watermelons", "avocados", "bananas", "cherries", "apricots", "plums", "peaches", "limes", "blackberries"];

function Search() {
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);

    function search(input) {
        if (input == null || input === "") {
            return [];
        }

        const temp = input.trim().toLowerCase();
        const filteredResults = dataArray.filter(element => element.includes(temp));
        return filteredResults;
    }

    const onChangeEvent = (event) => {
        setInput(event.target.value);
    }

    const buttonOnClick = () => {
        setResults(search(input));
    }

    return render(input, onChangeEvent, buttonOnClick, results);
}

function render(input, onChangeEvent, buttonOnClick, results) {
    return (
        <div className='SearchPage'>
            <div className='header'><h2>SEARCH</h2></div>
            <div className="text"><p>This is a data search example.</p></div>
            <hr></hr>
            <div className='search-field'>
                <p>Search data:</p><input type='text' maxLength={32} value={input} onChange={onChangeEvent}></input>
                <button onClick={buttonOnClick}>Search</button>
                <div>
                    {results && results.map((res, index) => (
                        <p key={index}>{res}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search
