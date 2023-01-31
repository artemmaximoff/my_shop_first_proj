import React from "react";


export const Sort = ({ defaultvalue, options, value, onChange }) => {
    return (
        <div>
            <select value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option value="value">{defaultvalue}</option>
                {options.map(option =>
                    <option value={option.value} key={option.value}>{option.name}</option>
                )}
            </select>
        </div>
    )
}