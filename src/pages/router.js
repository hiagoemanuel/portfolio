import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'

import { Home } from './Home-page'
import { AboutMe } from './About-me'
import { Projects } from './Projects'
import { ProjectDetails } from './Projects/ProjectDetails'

export const AppRoutes = () => (
    <BrowserRouter>
        <Header />
        <MainContainer>
            <Routes>
                <Route element={<Home />} exact path='/' />
                <Route element={<AboutMe />} path='/about-me' />
                <Route element={<Projects />} path='/projects' />
                <Route element={<h1>Skills</h1>} path='/skills' />
                <Route element={<h1>Contact</h1>} path='/contact' />

                <Route element={<ProjectDetails />} path='/projects/:id' />
            </Routes>
        </MainContainer>
    </BrowserRouter>
)

const MainContainer = styled.main`
    height: 100%;
    padding: 5%;
    margin: 0 0 0 150px;

    display: grid;
    position: relative;
    overflow-x: hidden;

    @media (max-width: 1000px) { margin: 100px 0 0 0; }
    @media (max-width: 400px) { margin: 60px 0 0 0; }
`