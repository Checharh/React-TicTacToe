import React from 'react'
// import { isEmpty } from 'lodash'
// import PropTypes from 'prop-types'



const Player = ({player}) => { 

    return (
    <>
        {player &&player.name &&
        <>
        <div className="playerStyle">
          <h1>{player.name}   {player.victories}</h1>
            <td>
                <p>{player.name}</p>
            </td>
            <td>
            {/* <button onClick={() =>onDelete(iteml.value)}>-</button> */}
            </td>
            <br/>
        </div>

        </>}
    </>
    )
}

// Player.propTypes = {
//     index: PropTypes.number,
//     Player: PropTypes.instanceOf(Object),
//     onDelete: PropTypes.func
// }

// Player.defaultProps = {
//     index: 0,
//     Player: null,
//     onDelete:() => {}
// }
export default Player