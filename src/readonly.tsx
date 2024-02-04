import { Paper } from "@mui/material"

type ReadOnlyProps = {
    name: readonly string[],
}
export default function ReadOnly({name}: ReadOnlyProps) {
    return (
        <Paper sx={{width:'180px', padding:'16px', margin:'16px'}}>
            <h2>Read Only</h2>
            {name}
        </Paper>
    )
}
