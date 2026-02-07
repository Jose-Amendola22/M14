import { Box, Typography, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { useState } from "react";

interface ThirdQuestionProps {
  onNext: () => void;
}

function ThirdQuestion({ onNext }: ThirdQuestionProps) {
  const [selected, setSelected] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (answer: string) => {
    setSelected(answer);
    
    if (answer === "all") {
      setIsCorrect(true);
      setTimeout(() => onNext(), 800);
    }
  };

  const options = [
    { value: "option1", label: "Tu sonrisa" },
    { value: "option2", label: "Tu forma de ver la vida" },
    { value: "option3", label: "Tu arte" },
    { value: "all", label: "Todo lo anterior y más" },
  ];

  return (
    <Box sx={{
      background: 'white',
      borderRadius: 3,
      padding: 4,
      boxShadow: '0 10px 30px #8b85b1',
      maxWidth: 500,
      width: '100%',
    }}>
      <Typography variant="h5" sx={{ 
        mb: 3, 
        textAlign: 'center',
        color: '#8b85b1',
        fontWeight: 'bold',
      }}>
        Pregunta #3
      </Typography>
      
      <Typography variant="h6" sx={{ mb: 3, textAlign: 'center' }}>
        ¿Cuál es mi parte favorita de ti?
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
              p: 1.5,
              borderRadius: 2,
              border: '1px solid',
              borderColor: selected === option.value 
                ? (option.value === "all" ? '#4CAF50' : '#F44336')
                : '#E0E0E0',
              backgroundColor: selected === option.value 
                ? (option.value === "all" ? 'rgba(76, 175, 80, 0.05)' : 'rgba(244, 67, 54, 0.05)')
                : 'transparent',
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
        }}>
          Correcto, todo lo que sea tú me encanta 
        </Typography>
      )}
    </Box>
  );
}

export default ThirdQuestion;