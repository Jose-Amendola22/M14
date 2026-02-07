import { Box } from "@mui/material"
import MainPage from "./pages/MainPage"

function App() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <MainPage />
    </Box>
  )
}

export default App
