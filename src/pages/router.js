import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'

import { Home } from './Home-page'
import { AboutMe } from './About-me'
import { Projects } from './Projects'
import { ProjectDetails } from './Projects/ProjectDetails'
import { Skills } from './Skills'
import { Contact } from './Contact'

export const AppRoutes = () => (
    <BrowserRouter>
        <Header />
        <MainContainer>
            <Routes>
                <Route element={<Home />} exact path='/' />
                <Route element={<AboutMe />} path='/about-me' />
                <Route element={<Projects />} path='/projects' />
                <Route element={<Skills/>} path='/skills' />
                <Route element={<Contact />} path='/contact' />

                <Route element={<ProjectDetails />} path='/projects/:id' />
            </Routes>
        </MainContainer>
    </BrowserRouter>
)

const MainContainer = styled.main`
    width: calc(100vw - 150px);
    height: 100vh;
    padding: 5%;
    margin: 0 0 0 150px;

    display: grid;
    position: relative;
    overflow-x: hidden;

    background-color: var(--secondary-color);

    @media (max-width: 1000px) {
        width: 100vw;
        height: calc(100vh - 100px);
        margin: 100px 0 0 0;
    }
    @media (max-width: 400px) {
        height: calc(100vh - 60px);
        margin: 60px 0 0 0;
    }
`