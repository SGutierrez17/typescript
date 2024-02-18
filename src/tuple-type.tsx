import React from 'react';

import { Paper } from '@mui/material';

type StateTuple = [boolean, string];

export default function Tuple() {
    const [state, setState] = React.useState<StateTuple>([false, 'Initial Value']);
    const toggleBoolean = () => {
        setState([!state[0], state[1]]);
    };
    const updateString = () => {
        setState([state[0], 'Updated Value']);
    };
    return (
        <Paper sx={{width:'180px', padding:'16px', margin:'16px'}}>
            <h2>Tuple</h2>
            <p>Boolean Value: {state[0].toString()}</p>
            <p>String Value: {state[1]}</p>
            <button onClick={toggleBoolean}>Toggle Boolean</button>
            <button onClick={updateString}>Update String</button>
        </Paper>
    );
}
