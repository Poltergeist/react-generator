import React from 'react';

import GeneratorPriorityRow from './generator-priority-row.react';

import { setPriority } from '../actions/actions';

import {
  FUNDS,
  ATTRIBUTEPOINTS,
  METATYPES,
  MAGICORRESONANCE,
  SKILLPOINTS
} from '../constants/action-types';

import * as language from '../constants/language';

let localLanguage = language.getLanguage();

class GeneratorPriorityTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
        attributePoints,
        funds,
        dispatch,
        magicOrResonance,
        metaTypes,
        skillPoints
      } = this.props,
      onClickHandler = row => {
        return select => {
          dispatch(setPriority(row, select));
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
      magicOrResonanceData = magicOrResonance.map(item => {
        if (item.archeTypes.length === 0) {
          return {
            display: '–',
            selected: item.selected === true
          };
        }
        return {
          display: <ul>
            {item.archeTypes.map((archeType, index) => {
              return <li key = {index}>
                {archeType.archeType}
              </li>;
            })}
            </ul>,
          selected: item.selected === true
        };
      }),
      metaTypesData = metaTypes.map(item => {
        return {
          display: <ul>
            {item.metaTypes.map((metaType, index) => {
              return <li key = {index}>
                {metaType.metaType} ({metaType.specialAttributePoints})
              </li>;
            })}
            </ul>,
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
        <GeneratorPriorityRow data={metaTypesData}
            setSelection = {onClickHandler(METATYPES)}
            title={"MetaType"}
        />
        <GeneratorPriorityRow data={attributePointsData}
            setSelection = {onClickHandler(ATTRIBUTEPOINTS)}
            title={"Attributes"}
        />
        <GeneratorPriorityRow data={magicOrResonanceData}
            setSelection = {onClickHandler(MAGICORRESONANCE)}
            title={"Magic or Resonance"}
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
  magicOrResonance: React.PropTypes.array.isRequired,
  metaTypes: React.PropTypes.array.isRequired,
  skillPoints: React.PropTypes.array.isRequired
};

export default GeneratorPriorityTable;
