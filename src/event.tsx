import React from 'react'

import { Paper, Button } from '@mui/material';

export default function Event() {
    const [view, setView] = React.useState<boolean>();

    function showText() {
        setView(true)
    }

    function hideText() {
        setView(false)
    }

    return (
    <div>
        <Paper sx={{width:'180px', padding:'16px', margin:'16px'}}>
            <h3>Event Component</h3>
                {view ? (
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eaque accusantium nisi saepe! Debitis unde distinctio repellat illum voluptatibus ipsum impedit! Consectetur nam minus accusantium facere. Necessitatibus architecto veniam voluptatum.</p>
                        <Button onClick={hideText}>Hide text</Button>
                    </div>
                ) : (
                    <Button onClick={showText}>Show text</Button>
                )}
        </Paper>
    </div>
    
    )
}
