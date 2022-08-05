import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Background() {
    const particlesInit = async (main) => {
        // console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        // console.log(container);
    };
    return (
        <Particles
            style={{ zIndex: '-1', position: 'absolute' }}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        // value: "#000f11",
                        value: '#111C18',
                    },
                },
                fpsLimit: 90,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: 'push',
                        },
                        onHover: {
                            enable: false,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        // value: "#00c0fa", // màu của chấm tròn điểm nối giữa các đường
                        value: '#6ff9fd50',
                    },
                    links: {
                        // color: "#2b56f5", // màu của đường nối
                        color: '#4cb4b730', // màu của đường nối
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: false,
                            area: 800,
                        },
                        value: 40,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
