import theme from './theme';
import { Box, Button, Chip, Paper } from "@mui/material";


interface persona{
    name: string;
    age?: string;
}

export default function Components({name, age}:persona) {

    return (
        <Box >
        <Paper sx={{ width:'200px', padding:'20px'}}>
            <Button>Click me</Button>
            <Chip label={name}/>
            <Chip label={age}/>
        <Paper>
            <div style={{color: theme.palette.primary.main}}>
                <h2>Color principal</h2>
            </div>
            <div style={{color: theme.palette.secondary.main}}>
                <h2>Color secundario</h2>
            </div>
            <div style={{color: theme.palette.error.main}}>
                <h2>error</h2>
            </div>
        </Paper>    
        </Paper>
        </Box>
    )
}
