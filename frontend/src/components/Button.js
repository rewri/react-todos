import React from 'react'

export default function Button({ label, value, selected, selectDate }) {

    return (
        <div style={styles.padding}>
            <button className={`waves-effect waves-light btn ${selected === value ? 'red' : ''} `} value={value} onClick={() => selectDate(value)}>
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


