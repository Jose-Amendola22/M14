import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import FirstQuestion from "../components/FirstQuestion";
import ThirdQuestion from "../components/ThirdQuestion";
import SecondQuestion from "../components/SecondQuestion";
import TheQuestion from "../components/TheQuestion";

function MainPage() {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);

    const handleNext = () => {
        setCurrentQuestion(prev => prev + 1);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: { xs: 2, sm: 3 },
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            overflowX: 'hidden',
            boxSizing: 'border-box',
            width: '100vw',
            maxWidth: '100%',
            margin: 0
        }}>
            {currentQuestion === 0 && (
                <Box sx={{
                    textAlign: 'center',
                    maxWidth: '500px',
                    width: '100%',
                    px: { xs: 2, sm: 3 },
                    boxSizing: 'border-box'
                }}>
                    <Typography variant="h3" sx={{
                        mb: 3,
                        color: '#8b85b1',
                        fontWeight: 'bold',
                        fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                        wordBreak: 'break-word'
                    }}>
                        ¡Hola Miri, aka mi amor, aka el amor de mi vida! 
                    </Typography>
                    <Typography variant="h6" sx={{
                        mb: 4,
                        fontSize: { xs: '1rem', sm: '1.25rem' }
                    }}>
                        Te traigo un pequeño juego... un quiz sobre nosotros, espero te guste
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => setCurrentQuestion(1)}
                        sx={{
                            background: '#8b85b1',
                            fontSize: { xs: '1rem', sm: '1.2rem' },
                            px: { xs: 4, sm: 6 },
                            py: 1.5,
                            '&:hover': {
                                background: '#8b85b1',
                                transform: 'scale(1.05)'
                            },
                            transition: 'all 0.3s ease',
                            width: { xs: '100%', sm: 'auto' }
                        }}
                    >
                        Empezar
                    </Button>
                </Box>
            )}

            {currentQuestion === 1 && (
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <FirstQuestion onNext={handleNext} />
                </Box>
            )}

            {currentQuestion === 2 && (
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <SecondQuestion onNext={handleNext} />
                </Box>
            )}

            {currentQuestion === 3 && (
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <ThirdQuestion onNext={handleNext} />
                </Box>
            )}

            {currentQuestion === 4 && (
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <TheQuestion />
                </Box>
            )}
        </Box>
    );
}

export default MainPage;