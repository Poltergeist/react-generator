import React from 'react';

import GeneratorPriorityRow from './generator-priority-row.react';

import {
  FUNDS,
  ATTRIBUTEPOINTS,
  SKILLPOINTS,
  SET_PRIORITY
} from '../constants/action-types';

import * as language from '../constants/language';

let localLanguage = language.getLanguage();

class GeneratorPriorityTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { attributePoints, funds, dispatch, skillPoints } = this.props,
      onClickHandler = row => {
        return select => {
          dispatch({
            type: SET_PRIORITY,
            subtype: row,
            selected: select
          });
        };
      },
      attributePointsData = attributePoints.map(item => {
        return {
          display: item.value,
          selected: item.selected === true
        };
      }),
      fundsData = funds.map(item => {
        return {
          display: item.value + ' ¥',
          selected: item.selected === true
        };
      }),
      skillPointsData = skillPoints.map(item => {
        return {
          display: item.skillPoints + ' / ' + item.skillGroupPoints,
          selected: item.selected === true
        };
      });

    return <table className="generator__priorities-table">
      <thead className="generator__priorities-header">
        <tr>
          <td>
            {language[localLanguage].generator.priorityTable.categories}
          </td>
          <td>A</td>
          <td>B</td>
          <td>C</td>
          <td>D</td>
          <td>E</td>
        </tr>
      </thead>
      <tbody>
        <GeneratorPriorityRow data={attributePointsData}
            setSelection = {onClickHandler(ATTRIBUTEPOINTS)}
            title={"Attributes"}
        />
        <GeneratorPriorityRow data={skillPointsData}
            setSelection = {onClickHandler(SKILLPOINTS)}
            title={"Skills"}
        />
        <GeneratorPriorityRow data={fundsData}
            setSelection = {onClickHandler(FUNDS)}
            title={"Funds"}
        />
      </tbody>
    </table>;
  }
}

GeneratorPriorityTable.propTypes = {
  attributePoints: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  funds: React.PropTypes.array.isRequired,
  skillPoints: React.PropTypes.array.isRequired
};

export default GeneratorPriorityTable;
