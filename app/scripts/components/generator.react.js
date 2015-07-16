import React from 'react'

import StepOne from './generator-step-one.react'

import * as language from '../constants/language'

let localLanguage = language.getLanguage();

export default class Generator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="generator">
        <h1 className="generator__title">{language[localLanguage].generator.title}</h1>
        <p className="generator__subline">{language[localLanguage].generator.subline}</p>
        <StepOne />
      </div>
    )
  }
}
