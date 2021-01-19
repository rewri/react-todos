import React from 'react'

export default function Summary({ total, done }) {
    return (
        <div style={styles.flexRow}>
            <span style={styles.span}>Total de tarefas: { total } </span>
            <span style={styles.span}>Tarefas cumpridas: { done }</span>
            <span style={styles.span}>Tarefas não cumpridas: { total - done }</span>
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
