import React from 'react';

function SearchBar() {

    return (
        <div>
            <input type="text" placeholder="Izlash ..."/>
            <p>
                <input type="checkbox" id="onlyInStock" name="onlyInStock" />
                <label htmlFor="onlyInStock">Faqat omborda mavjud bo'lgan maxsulotlar</label>
            </p>
        </div>
    );
}

export default SearchBar;