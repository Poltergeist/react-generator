import React from 'react';
import GeneratorPriorityTable from './generator-priority-table.react';

import * as language from '../constants/language';

let localLanguage = language.getLanguage();

class StepOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { priorityTable, dispatch } = this.props;
    return <div className = "generator__step-one">
        <h2>{language[localLanguage].generator.stepOne}</h2>
        <GeneratorPriorityTable {...priorityTable}
            dispatch = {dispatch}
        />
      </div>;
  }
}

StepOne.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  priorityTable: React.PropTypes.object
};

export default StepOne;
