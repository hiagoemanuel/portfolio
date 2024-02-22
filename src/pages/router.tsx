import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Header } from '../components/Header'
import { Home } from './Home-page'
import { AboutMe } from './About-me'
import { Contact } from './Contact'
import { Projects } from './Projects'
import { ProjectDetails } from './Projects/ProjectDetails'
import { Skills } from './Skills'

import styled from 'styled-components'

export const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <MainContainer>
                <Routes>
                    <Route element={<Home />} path='/' />
                    <Route element={<AboutMe />} path='/about-me' />
                    <Route element={<Projects />} path='/projects' />
                    <Route element={<Skills />} path='/skills' />
                    <Route element={<Contact />} path='/contact' />

                    <Route element={<ProjectDetails />} path='/projects/:id' />
                </Routes>
            </MainContainer>
        </Router>
    )
}

const MainContainer = styled.main`
    width: calc(100% - 150px);
    height: 100%;
    padding: 5%;
    margin: 0 0 0 150px;

    display: grid;
    
    @media (max-width: 1000px) {
        width: 100%;
        height: calc(100% - 100px);
        margin: 0;

    }
    @media (max-width: 400px) {
        height: calc(100 - 60px);
    }
`