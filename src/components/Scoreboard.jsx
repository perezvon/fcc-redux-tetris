import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {...state}
}

const Scoreboard = ({score}) => (
  <h3>Score: {score}</h3>
)

export default connect(mapStateToProps)(Scoreboard)