import React, { useEffect, useState, useMemo } from 'react'
// import { connect, useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
// import Player from '../Player/Player'

// import {addTask, deleteTask, addDoneTask} from '../../actions/taskActions'


// const PlayerList = ({ players, doAddTask, doDeleteTask, doAddDoneTask }) => {
const PlayerList = () => {
  // const items = useSelector(state => state.taskState.taskList)
  // const dispatch = useDispatch()

  const[players,setPlayers]=useState([])
  const [player, setPlayer] = useState('')

  const handleChange = (event) => {
    const { target: { value } } = event
    setPlayer(value)
  }

  const addPlayer = () => {
    console.log(player)
    // dispatch(addTask({value:item}))
    players.push({name:player})
    // console.log(newItems)
    setPlayers(players)
    // console.log(items)
    setPlayer('')
    document.getElementById("input_text").value = '';
  }

  const deleteItem = (val) => {
    // dispatch(addDoneTask({ value: val }))
    // dispatch(deleteTask({ value: val }))
    // // const {items}=this.state
    // const newItems = items.filter((it)=> it.value !== val )
    // setItems(newItems)
  }
  // const{newItems}=items
  return (
    <>
      <span>TASK LIST, FUNCTIONAL COMPONENT</span><br />
      <input id="input_text" type="text" placeholder="New Player..." onChange={handleChange} ></input>
      {/* {console.log({value:item})} */}
      <button onClick={addPlayer}>ADD PLAYER</button>
      {/* {console.log(items)} */}
      <select>
        {/* <option> */}
          {players.map((playerL, index) => (
          <option>{playerL.name}</option>
          ))}
        {/* </option> */}
      </select>


    </>
  )
}
PlayerList.propTypes = {
    players: PropTypes.array,
    player: PropTypes.string
}


//    WITHOUT useSelector---UNCOMMENT
// const mapStateToProps = state => ({
//   items: state.taskState.taskList,
// })

//    WITHOUT useSelector---UNCOMMENT
// const mapDispatchToProps = dispatch => ({
//   doAddTask: task =>
//     dispatch(addTask(task)),
//   doAddDoneTask: task =>
//     dispatch(addDoneTask(task)),
//   doDeleteTask: task =>
//     dispatch(deleteTask(task))
// })


// export default connect(mapStateToProps, mapDispatchToProps)(TaskListFunctional)
// export default connect(mapDispatchToProps)(TaskListFunctional)

export default PlayerList