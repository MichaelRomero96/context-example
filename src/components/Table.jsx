import { Paper, Typography } from '@material-ui/core'
import React from 'react'

function Table({ title }) {
    return (
        <Paper
            style={{
                width: 200
            }}
            elevation={15}
            square
        >
            <Typography align='center'>
                {title}
            </Typography>
        </Paper>
    )
}

export default Table
