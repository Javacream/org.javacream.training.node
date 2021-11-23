import React from 'react'
import './Books.css'
import BooksContentComponent from './content/BooksContentComponent'
import BooksHeaderComponent from './BooksHeaderComponent'
import BooksFooterComponent from './BooksFooterComponent'
function BooksAppComponent(){
    return (
        <>
            <BooksHeaderComponent />
            <BooksContentComponent />
            <BooksFooterComponent />

        </>
    )
}

export default BooksAppComponent