import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'

import { Home } from './Home'

export const AppRoutes = () => (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route element={<Home />} exact path='/' />
            <Route element={<h1>About me</h1>} path='/about-me'/>
            <Route element={<h1>Projects</h1>} path='/projects'/>
            <Route element={<h1>Skills</h1>} path='/skills'/>
            <Route element={<h1>Contact</h1>} path='/contact'/>
        </Routes>
    </BrowserRouter>
)