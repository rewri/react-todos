import React from 'react'

export default function Todo({ id, date, description, status }) {
    return (
        <div className="col s12 m12">
            <div className={`card ${status ? 'teal' : 'red'} `}>
                <div className="card-content white-text">
                    <span className="card-title">{date}</span>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
