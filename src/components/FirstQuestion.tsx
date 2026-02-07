import { Box, Typography, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { useState } from "react";

interface FirstQuestionProps {
  onNext: () => void;
}

function FirstQuestion({ onNext }: FirstQuestionProps) {
  const [selected, setSelected] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (answer: string) => {
    setSelected(answer);
    
    if (answer === "correct") {
      setIsCorrect(true);
      setTimeout(() => onNext(), 800);
    }
  };

  const options = [
    { value: "option1", label: "Después (Wiplash)" },
    { value: "correct", label: "Color your night (PURSE SONA 3)" },
    { value: "option3", label: "Luther (Kendrick Lamar)" },
    { value: "option4", label: "Baile Inolvidable (Bad Bunny)" },
  ];

  return (
    <Box sx={{
      background: 'white',
      borderRadius: 3,
      padding: { xs: 2, sm: 3, md: 4 },
      boxShadow: '0 10px 30px #8b85b1',
      maxWidth: 500,
      width: '90%',
      mx: 'auto',
    }}>
      <Typography variant="h5" sx={{ 
        mb: 3, 
        textAlign: 'center',
        color: '#8b85b1',
        fontWeight: 'bold',
        fontSize: { xs: '1.25rem', sm: '1.5rem' }
      }}>
        Pregunta #1
      </Typography>
      
      <Typography variant="h6" sx={{ 
        mb: 3, 
        textAlign: 'center',
        fontSize: { xs: '1rem', sm: '1.25rem' }
      }}>
        ¿Cuál es nuestra canción? (Según nosotros)
      </Typography>
      
      <RadioGroup value={selected}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio disabled={isCorrect} />}
            label={option.label}
            sx={{
              mb: 2,
              p: { xs: 1, sm: 1.5 },
              borderRadius: 2,
              border: '1px solid',
              borderColor: selected === option.value 
                ? (option.value === "correct" ? '#4CAF50' : '#F44336')
                : '#E0E0E0',
              backgroundColor: selected === option.value 
                ? (option.value === "correct" ? 'rgba(76, 175, 80, 0.05)' : 'rgba(244, 67, 54, 0.05)')
                : 'transparent',
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
            onClick={() => handleAnswer(option.value)}
          />
        ))}
      </RadioGroup>

      {isCorrect && (
        <Typography sx={{ 
          mt: 2, 
          p: 2, 
          backgroundColor: 'rgba(76, 175, 80, 0.1)', 
          borderRadius: 2,
          color: '#2E7D32',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: { xs: '0.875rem', sm: '1rem' }
        }}>
          ¡Correcto! 
        </Typography>
      )}
    </Box>
  );
}

export default FirstQuestion;