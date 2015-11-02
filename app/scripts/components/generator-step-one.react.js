import React from 'react';
import GeneratorPriorityTable from './generator-priority-table.react';

import * as language from '../constants/language';

let localLanguage = language.getLanguage();

export default class StepOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className = 'generator__step-one'>
        <h2>{language[localLanguage].generator.stepOne}</h2>
        <GeneratorPriorityTable />
      </div>;
  }
}
