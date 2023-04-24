import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'

import { Home } from './Home-page'
import { AboutMe } from './About-me'

export const AppRoutes = () => (
    <BrowserRouter>
        <Header />
        <Container>
            <Routes>
                <Route element={<Home />} exact path='/' />
                <Route element={<AboutMe />} path='/about-me' />
                <Route element={<h1>Projects</h1>} path='/projects' />
                <Route element={<h1>Skills</h1>} path='/skills' />
                <Route element={<h1>Contact</h1>} path='/contact' />
            </Routes>
        </Container>
    </BrowserRouter>
)

const Container = styled.main`
    width: 100%;
    height: 100%;
    padding: 5%;

    display: grid;
    overflow-x: hidden;
`