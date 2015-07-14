import React from 'react'

import StepOne from './generator-step-one.react'

export default class Generator extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    title: 'Shadowrun Generator',
    subline: 'This is a web-based Shadowrun Generator'
  }

  render() {
    return (
      <div className="generator">
        <h1 className="generator__title">{this.props.title}</h1>
        <p className="generator__subline">{this.props.subline}</p>
        <StepOne />
      </div>
    )
  }
}
