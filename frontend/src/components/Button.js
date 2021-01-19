import React from 'react'

export default function Button({ label, value, selected, onChange }) {

    console.log(selected);
    console.log(value);

    const handleSelectChange = ({ target }) => {
        const newValue = target.value;
        onChange(newValue);
    }

    return (
        <div style={styles.padding}>
            <button className={`waves-effect waves-light btn ${parseInt(selected) === parseInt(value) ? 'red' : ''} `} value={value} onClick={handleSelectChange}>
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


