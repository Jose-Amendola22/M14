import { Box, Typography, Button, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import im2 from '../assets/im2.png';
import im3 from '../assets/im3.png';
import im4 from '../assets/im4.png'
import yes from '../assets/yes.jpg'

function TheQuestion() {
  const [currentImage, setCurrentImage] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const memeImages = [im4, im2, im3, yes];

  const captions = [
    "#1",
    "#2", 
    "#3",
    "4"
  ];

  // Handle window resize for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % memeImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + memeImages.length) % memeImages.length);
  };

  const handleYes = () => {
    setHasAnswered(true);
    setShowConfetti(true);
    
    // Stop confetti after 10 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
  };

  const handleNo = () => {
    alert(":c")
  }

  return (
    <>
      {/* Confetti component */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={200}
          gravity={0.1}
          colors={['#FF69B4', '#FF1493', '#FFC0CB', '#FFB6C1', '#DB7093']}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}
        />
      )}
      
      <Box sx={{
        background: 'white',
        borderRadius: 3,
        padding: 4,
        boxShadow: '0 10px 30px #8b85b1',
        maxWidth: 600,
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <Box sx={{ position: 'relative', mb: 3 }}>
          <Box sx={{
            height: 300,
            background: '#FFF0F5',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            mb: 2,
          }}>
            <img 
              src={memeImages[currentImage]} 
              alt={captions[currentImage]} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                display: 'block'
              }}
            />
            
            <IconButton 
              onClick={prevImage}
              sx={{ position: 'absolute', left: 10, top: '80%', background: 'white' }}
            >
              <ArrowBackIcon />
            </IconButton>
            
            <IconButton 
              onClick={nextImage}
              sx={{ position: 'absolute', right: 10, top: '80%', background: 'white' }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>

        {!hasAnswered ? (
          <>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
              ¿Quieres ser mi Valentine?
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                variant="contained"
                onClick={handleYes}
                sx={{
                  background: '#4CAF50',
                  fontSize: '1.2rem',
                  padding: '10px 40px',
                  '&:hover': { 
                    background: '#388E3C',
                    transform: 'scale(1.05)',
                    transition: 'transform 0.2s'
                  }
                }}
              >
                ¡SÍ!
              </Button>
              
              <Button
                variant="outlined"
                onClick={handleNo}
                sx={{
                  borderColor: '#8b85b1',
                  color: '#8b85b1',
                  fontSize: '1.2rem',
                  padding: '10px 40px',
                }}
              >
                No
              </Button>
            </Box>
          </>
        ) : (
          <Box sx={{ 
            animation: 'fadeIn 0.5s',
            position: 'relative',
            zIndex: 1,
          }}>
            <Typography variant="h4" sx={{ 
              color: '#4CAF50', 
              mb: 2, 
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              ¡FELÍZ SAN VALENTÍN!
            </Typography>
            <Typography sx={{ mb: 3, fontSize: '1.1rem' }}>
              Aunque no vamos a estar juntos, que sepas que te amo y estaré contigo en alma este 14 desde NUEVAYOL
            </Typography>
            <Button 
              variant="contained" 
              sx={{ 
                background: '#8b85b1',
                '&:hover': {
                  background: '#716c9c'
                }
              }}
              onClick={() => window.location.reload()}
            >
              Jugar de nuevo
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
}

export default TheQuestion;