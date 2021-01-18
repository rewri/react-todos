import React from 'react'

export default function ButtonContainer({ children }) {
    return (
        <div style={styles.flexRow}>
            {children}
        </div>
    )
}

const styles = {
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '15px'
    }
}