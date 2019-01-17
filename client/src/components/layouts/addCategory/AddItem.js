import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addItems} from '../../../store/actions/add'
import {TextField, Button} from '@material-ui/core'
import Form from '../card/Form'

class Item {
  constructor (native, english, url) {
    this.native = native
    this.english = english
    this.url = url
  }
}

class AddItem extends Component {
  state = {
    native: '',
    english: '',
    url: ''
  }

  linkToTranslate (e) {
    e.preventDefault()
    window.open(`https://translate.google.com.ua/?hl=ru&authuser=0#view=home&op=translate&sl=uk&tl=en&text=${this.state.native}`, '_blank')
  }
  getUrl (e) {
    e.preventDefault()
    window.open(`https://www.google.com/search?q=${this.state.native}&tbs=isz:m&tbm=isch&source=lnt&sa=X&ved=0ahUKEwjdyKH9_LHfAhUEfywKHSIiDesQpwUIHQ&biw=1366&bih=626&dpr=1`, '_blank')
  }
  createItem (e) {
    e.preventDefault()

    const item = new Item(this.state.native, this.state.english, this.state.url)

    this.props.addItems(item)

    this.setState({
      native: '',
      english: '',
      url: ''
    })
  }

  render () {
    return (
      <Form>
        <TextField
          id="native-input"
          label="Native word"
          type="text"
          name="native"
          margin="normal"
          variant="filled"
          value={this.state.native}
          onChange={(e) => { this.setState({native: e.target.value}) }}
        />
        <TextField
          id="english-input"
          label="English word"
          type="text"
          name="english"
          margin="normal"
          variant="filled"
          value={this.state.english}
          onChange={(e) => { this.setState({english: e.target.value}) }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{marginBottom: 8}}
          onClick={this.linkToTranslate.bind(this)}
        >
          google translate
        </Button>
        <TextField
          id="img-url-input"
          label="Image URL (www.photo.jpg)"
          type="text"
          name="img"
          margin="normal"
          variant="filled"
          value={this.state.url}
          onChange={(e) => { this.setState({url: e.target.value}) }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{marginBottom: 16}}
          onClick={this.getUrl.bind(this)}
        >
          get URL
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{marginBottom: 8}}
          onClick={this.createItem.bind(this)}
          disabled={ !this.state.english ||
          !this.state.native || !this.state.url }
        >
          Add
        </Button>
      </Form>
    )
  }
}

function mapStateToProps (state) {
  return {
    items: state.add.items
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addItems: (item) => {
      return dispatch(addItems(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
