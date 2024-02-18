import { Paper } from "@mui/material";

interface info{
    ubication: string | number;
}
export default function AliasesUnion({ubication}: info){
    const value = () => {
        if (typeof ubication === 'string') {
            return(`Tu ubicación es ${ubication}`);
        }
        if (typeof ubication === 'number') {
            return(`Tu codigo postal es ${ubication}`);
        }
    }
    return (
    <Paper sx={{width:'180px', padding:'16px', margin:'16px'}}>
        <h2>TypeOf</h2>
        {value()}
    </Paper>
    )
};
