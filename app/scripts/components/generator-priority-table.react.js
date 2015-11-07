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

  magicOrResonanceMap(item) {
    if (item.archeTypes.length === 0) {
      return {
        display: '–',
        selected: item.selected === true
      };
    }
    return {
      display: <ul>
        {item.archeTypes.map((archeType, index) => {
          let text;
          switch (archeType.type) {
            case 'magic':
            case 'aspectedMagician':
              text = <span>
                Magic {archeType.magic},{' '}
                {(() => {
                  if (archeType.magicSkillCount) {
                    return `${archeType.magicSkillCount} Rating, ` +
                    `${archeType.magicSkillRating} Magical skills, `;
                  }
                })()}
                {(() => {
                  if (archeType.spells) {
                    return `${archeType.spells} spells`;
                  }
                })()}
              </span>;
              break;
            case 'technomancer':
              text = <span>
                Resonance {archeType.resonance},{' '}
                {(() => {
                  if (archeType.resonanceSkillCount) {
                    return `${archeType.resonanceSkillCount} Rating ` +
                    `${archeType.resonanceSkillRating} Resonance skills, `;
                  }
                })()}
                {(() => {
                  if (archeType.complexForms) {
                    return `${archeType.complexForms} complex forms`;
                  }
                })()}
              </span>;
              break;
            case 'adept':
              text = <span>
                Magic {archeType.magic},{' '}
                {(() => {
                  if (archeType.activeSkillCount) {
                    return `${archeType.activeSkillCount} Rating ` +
                    `${archeType.acticeSkillRating} Active skills, `;
                  }
                })()}
                {(() => {
                  if (archeType.complexForms) {
                    return `${archeType.complexForms} complex forms`;
                  }
                })()}
              </span>;
              break;
            default:
              break;
          }
          return <li key = {index}>
            {archeType.archeType}: {text}
          </li>;
        })}
        </ul>,
      selected: item.selected === true
    };
  }

  attributePointsMap(item) {
    return {
      display: item.value,
      selected: item.selected === true
    };
  }

  fundsMap(item) {
    return {
      display: item.value + ' ¥',
      selected: item.selected === true
    };
  }

  metaTypesMap(item) {
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
  }

  skillPointsMap(item) {
    return {
      display: item.skillPoints + ' / ' + item.skillGroupPoints,
      selected: item.selected === true
    };
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
      attributePointsData = attributePoints.map(this.attributePointsMap),
      fundsData = funds.map(this.fundsMap),
      magicOrResonanceData = magicOrResonance.map(this.magicOrResonanceMap),
      metaTypesData = metaTypes.map(this.metaTypesMap),
      skillPointsData = skillPoints.map(this.skillPointsMap),
      tableData = [
        [1, 2, 3, 4, 5, 6],
        [{ display: 'MetaType' }].concat(metaTypesData),
        [{ display: 'Attribute' }].concat(attributePointsData),
        [{ display: 'Magic Or Resonance' }].concat(magicOrResonanceData),
        [{ display: 'Skills' }].concat(skillPointsData),
        [{ display: 'resources' }].concat(fundsData)
      ],
      transposeData = tableData.map((item, index) => {
        return item.map((node, nodeIndex) => {
          return tableData[nodeIndex][index];
        });
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
