import React from 'react';
import GeneratorPriorityTable from './generator-priority-table.react';
import GeneratorFunds from './generator-funds.react';
import GeneratorMeta from './generator-meta.react';
import GeneratorAttributePoints from './generator-attribute-points.react';
import GeneratorSkillPoints from './generator-skill-points.react';
import GeneratorArcheTypes from './generator-arche-types.react';

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
        <GeneratorMeta metaTypes = {priorityTable.metaTypes} />
        <GeneratorAttributePoints
            attributePoints = {priorityTable.attributePoints}
        />
        <GeneratorArcheTypes
            magicOrResonance = {priorityTable.magicOrResonance}
        />
        <GeneratorSkillPoints
            skillPoints = {priorityTable.skillPoints}
        />
        <GeneratorFunds funds = {priorityTable.funds} />
      </div>;
  }
}

StepOne.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  priorityTable: React.PropTypes.object
};

export default StepOne;
