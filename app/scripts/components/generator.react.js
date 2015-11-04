import React from 'react';
import { connect } from 'react-redux';

import { SET_TITLE } from '../constants/action-types';

import StepOne from './generator-step-one.react';

import * as language from '../constants/language';

let localLanguage = language.getLanguage();

export class Generator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, title } = this.props;
    return <div className="generator">
        <h1 className="generator__title">
          {language[localLanguage].generator.title}</h1>
        <p className="generator__subline">
          {language[localLanguage].generator.subline}
        </p>
        <p onClick={() => dispatch({
          type: SET_TITLE,
          title: new Date() * 1
        })}
        >
          {title}
        </p>
        <StepOne />
      </div>;
  }
}

Generator.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired
};

function select(state) {
  return {
    title: state.title
  };
}

export default connect(select)(Generator);
