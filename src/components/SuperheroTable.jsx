import React from 'react';

const SuperheroTable = (props) => {
    return(
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Primary Ability</th>
                    <th>Secondary Ability</th>
                </tr>
                
                {props.superheroList.map(function(superhero){
                        return <tr>
                            <td>{superhero.superheroId}</td>
                            <td>{superhero.name}</td>
                        <td>{superhero.primaryAbility}</td>
                        <td>{superhero.secondaryAbility}</td>
                        </tr>
                    })}
                
            </table>
        </div>
    );
}

export default SuperheroTable;