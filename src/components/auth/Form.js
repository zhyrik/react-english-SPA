import React from 'react'

const style = {
  form: {
    margin: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: 300
  }
}

export default props => <form style={style.form}>{props.children}</form>