import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SingleProdukts from '../pages/SingleProdukt'

function Routest() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/:id' element={<SingleProdukts/>} />
            </Routes>
        </>
    )
}

export default Routest