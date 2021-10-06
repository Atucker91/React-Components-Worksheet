import React from 'react';

const AlertUser = (props) => {
    return(
        <div>
            <form onSubmit={props.alertButton}>
                <button type="submit"> Click Me</button>
            </form>
        </div>
    );
}

export default AlertUser;