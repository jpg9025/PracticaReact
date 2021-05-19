import React from 'react';
import classnames from 'classnames';

// This component is a input that allow to include a label 
function FormField({ className, label, ...props }) {
    return (
        <div className={classnames('formField', {'formField--focused' : false }, className )}>
            <label className="FormField-label">
                <span>{label}</span>
                <br/>
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