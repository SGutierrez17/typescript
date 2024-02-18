import { Chip, Paper } from "@mui/material";


interface persona{
    name: string;
    age?: string;
    car: string;
}

export default function ConditionalRender({name, age, car}:persona) {
    return (
        <Paper sx={{width:'180px', padding:'20px', m:'12px'}}>
            <Chip label={name}/>
            <Chip label={age}/>
            <Chip label={car}/>
        </Paper>
    )
}
