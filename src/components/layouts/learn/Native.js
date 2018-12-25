import React from 'react'
import {connect} from 'react-redux'
import WordCard from '../card/WordCard'
import SmalWordCard from '../card/SmalWordCard'

class ThreeItems extends React.Component {
  state = {
    first: 0,
    second: 1,
    three: 2
  }
  random = () => {
    const i = Math.floor(Math.random() * this.props.arrayWords.length)
    return i
  }
  generateCardNumbers = () => {
    console.log(this.random)
    const first = Math.floor(Math.random() * this.props.arrayWords.length)
    const second = Math.floor(Math.random() * this.props.arrayWords.length)
    const three = Math.floor(Math.random() * this.props.arrayWords.length)
    this.setState({
      first,
      second,
      three
    })
  }

  render () {
    return <div>
      <div style={{display: 'flex'}}>
        <WordCard item={this.props.arrayWords[this.state.first]} action={this.generateCardNumbers} />
        <WordCard item={this.props.arrayWords[this.state.second]}/>
        <WordCard item={this.props.arrayWords[this.state.three]}/>
      </div>
      <SmalWordCard word={this.props.arrayWords[0].native} />
    </div>
  }
}

function mapStateToProps (state) {
  return {
    arrayWords: state.learn.arrayWords
  }
}

export default connect(mapStateToProps)(ThreeItems)
