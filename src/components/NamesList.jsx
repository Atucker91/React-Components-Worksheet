import React from 'react';

const NamesList = (props) => {
    return(
        <div>
            {props.names.map(function(name){
                return <ul><li>{name}</li></ul>
            })}
            
        </div>
    );
}

export default NamesList;