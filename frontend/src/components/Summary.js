import React from 'react'

export default function Summary() {
    return (
        <div style={styles.flexRow}>
            <span style={styles.span}>Total de tarefas: 0</span>
            <span style={styles.span}>Tarefas cumpridas: 0</span>
            <span style={styles.span}>Tarefas não cumpridas: 0</span>
        </div>
    )
}

const styles = {
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    span: {
        fontSize: '1.2em',
        padding: '25px'
    }
}
