import React from 'react'
import { withStyle } from '@material-ui/core/styles'
import { Typography, InputBase, Button } from '@material-ui/core'
import { Search } from '@material-ui/icons'

const styles = {
  appBar: {
    display: 'flex',
    justifyContent: 'center'
  },
  inputWrap: {
    borderRadius: 5,
    border: '1px solid black',
    padding: '5px 20px',
    display: 'flex',
    alignItems: 'center'
  },
  search: {
    marginRight: 10
  },
  button: {
    padding: '13px 30px',
    marginLeft: 50
  },
  items: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
}

class MySearch extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div>
        <Typography style={{ flexGrow: 1 }}> </Typography>
        <div className={ classes.inputWrap }>
          <Search className={ classes.search }/>
          <InputBase
            placeholder="Search…"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          className={ classes.button }
        >
          Search
        </Button>
      </div>
    )
  }
}

export default withStyle(styles)(MySearch)