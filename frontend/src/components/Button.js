import React from 'react'

export default function Button({ label, value }) {
    return (
        <div style={styles.padding}>
            <button className="waves-effect waves-light btn" value={value}>
                {label}
            </button>
        </div>
    )
}

const styles = {
    padding: {
        padding: '5px'
    }
}


