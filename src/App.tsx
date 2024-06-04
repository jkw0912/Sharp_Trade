import HomePage from './pages/homePage';
import './App.css';
import { Box } from '@mui/material';

function App() {
    return (
        <Box sx={{width: '100%', height: '100vh', overflow: 'hidden'}}>
            <HomePage name='next' />
        </Box>
    );
}

export default App;