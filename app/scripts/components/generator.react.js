import React from 'react';
import { connect } from 'react-redux';

import StepOne from './generator-step-one.react';

import * as language from '../constants/language';

let localLanguage = language.getLanguage();

export class Generator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, priorityTable } = this.props;
    return <div className="generator">
        <h1 className="generator__title">
          {language[localLanguage].generator.title}</h1>
        <p className="generator__subline">
          {language[localLanguage].generator.subline}
        </p>
        <StepOne dispatch={dispatch}
            priorityTable={priorityTable}
        />
      </div>;
  }
}

Generator.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  priorityTable: React.PropTypes.object
};

function select(state) {
  return {
    priorityTable: state.priorityTable
  };
}

export default connect(select)(Generator);
