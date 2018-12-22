import React, {Component} from 'react'
import {TextField, Button} from '@material-ui/core'
import Form from '../../auth/Form'

class Item {
  constructor (native, english, url) {
    this.native = native
    this.english = english
    this.url = url
  }
}

export default class extends Component {
  state = {
    items: [],
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
    const items = [...this.state.items]
    const item = new Item(this.state.native, this.state.english, this.state.url)
    items.push(item)
    this.setState({
      items,
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
        >
          Add
        </Button>
      </Form>
    )
  }
}
