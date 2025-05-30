import React, { useEffect, useMemo, useState, useCallback } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import particlesConfig from './utils/particlesConfig';
import Layout from './components/layout/Layout';
import {Route, Routes} from "react-router-dom";
import ProjectDetailPage from "./components/sections/ProjectDetailPage.jsx";
import CookiePolicyPage from "./pages/CookiePolicyPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";

function App() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log('Particles container loaded', container);
    }, []);

    const options = useMemo(() => (particlesConfig), []);

    if (init) {
        return (
            <>
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
                <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                </Routes>
            </>
        );
    }

    return null;
}

export default App;