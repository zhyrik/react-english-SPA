import React from 'react'
import { connect } from 'react-redux'
import WordCard from '../card/WordCard'
import SmalWordCard from '../card/SmalWordCard'

class ThreeItems extends React.Component {
  state = {
    first: 0,
    second: 1,
    three: 2,
    answer: 1,
    showItemFlags: [true, true, true]
  }
  random = () => Math.floor(Math.random() * this.props.arrayWords.length)
  randomToThree = () => Math.floor(Math.random() * 3)
  checkSecond = (first, second) => {
    if (second === first) {
      second = this.random()
      return this.checkSecond(first, second)
    } else {
      return second
    }
  }
  checkThree = (first, second, three) => {
    if (three === first || three === second) {
      three = this.random()
      return this.checkThree(first, second, three)
    } else {
      return three
    }
  }
  generateWordNumber = () => {
    switch (this.randomToThree()) {
      case 0:
        this.setState({answer: this.state.first})
      break;
      case 1:
        this.setState({answer: this.state.second})
      break;
      default:
        this.setState({answer: this.state.three})
      break;
    }
  }
  generateCardNumbers = async () => {
    const first = this.random()
    let second = this.random()
    let three = this.random()
    second = this.checkSecond(first, second)
    three = this.checkThree(first, second, three)
    await this.setState({ first, second, three })
    this.generateWordNumber()
  }

  checkAnswer = (numCard, item) => {
    if (numCard === this.state.answer) {
      this.generateCardNumbers()
      this.setState({
        showItemFlags: [true, true, true]
      })
    } else {
      const showItemFlags = [...this.state.showItemFlags]
      showItemFlags[item] = false
      this.setState({
        showItemFlags
      })
    }
  }

  render () {
    // console.log(this.props, this.state)
    return <div>
      <div style={{display: 'flex'}}>
        {this.state.showItemFlags[0]
          ?<WordCard
            item={this.props.arrayWords[this.state.first]}
            action={this.checkAnswer.bind(this,this.state.first, 0)}
            flag={this.props.flag}
          />
          :null}
        {this.state.showItemFlags[1]
          ? <WordCard
            item={this.props.arrayWords[this.state.second]}
            action={this.checkAnswer.bind(this,this.state.second, 1)}
            flag={this.props.flag}
          />
          : null}
        {this.state.showItemFlags[2]
          ? <WordCard
            item={this.props.arrayWords[this.state.three]}
            action={this.checkAnswer.bind(this,this.state.three, 2)}
            flag={this.props.flag}
          />
          : null}
      </div>
      {this.props.flag[0]
        ?<SmalWordCard word={this.props.arrayWords[this.state.answer].native} />
        :<SmalWordCard word={this.props.arrayWords[this.state.answer].english} />
      }
    </div>
  }
}

function mapStateToProps (state) {
  return {
    arrayWords: state.learn.arrayWords,
    flag: state.learn.learnFlag
  }
}

export default connect(mapStateToProps)(ThreeItems)

