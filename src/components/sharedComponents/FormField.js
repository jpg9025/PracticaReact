import React from 'react';
import classnames from 'classnames';

// This component is a input that allow to include a label 
function FormField({ className, autofocus, label, ...props }) {

    // With React.useRef it is possible to get all HTML props like focus, many of them are not availables in React withour that
    const inputRef = React.useRef(null);

    // Must to create an useEffect to render the effects of use useRef after first render of the page
    React.useEffect(() => {
        if (autofocus) {
            inputRef.current.focus();
        };   
    } ,[]);

    return (
        <div className={classnames('formField', className )}>
            <label className="FormField-label">
                <span>{label}</span>
                <br/>
                <input
                    ref={inputRef}
                    className="formField-input"
                    autoComplete="off"
                    {...props}
                ></input>
            </label>
    </div>
    );
}

export default FormField;