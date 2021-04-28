import React from 'react';
import classnames from 'classnames';

import './FormField.css';

function FormField({ className, label, ...props }) {
    return (
        <div className={classnames('formField', {'formField--focused' : false }, className )}>
            <label className="FormField-label">
                <span>{label}</span>
                <input
                    className="formField-input"
                    autoComplete="off"
                    {...props}
                ></input>
            </label>
    </div>
    );
}

export default FormField;