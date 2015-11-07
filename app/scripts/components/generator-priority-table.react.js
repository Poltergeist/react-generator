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

  magicOrResonanceMap(item, key) {
    if (item.archeTypes.length === 0) {
      return {
        display: '–',
        onClick: this.onClickHandler(MAGICORRESONANCE, key).bind(this),
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
      onClick: this.onClickHandler(MAGICORRESONANCE, key).bind(this),
      selected: item.selected === true
    };
  }

  attributePointsMap(item, key) {
    return {
      display: item.value,
      onClick: this.onClickHandler(ATTRIBUTEPOINTS, key).bind(this),
      selected: item.selected === true
    };
  }

  fundsMap(item, key) {
    return {
      display: item.value + ' ¥',
      onClick: this.onClickHandler(FUNDS, key).bind(this),
      selected: item.selected === true
    };
  }

  metaTypesMap(item, key) {
    return {
      display: <ul>
        {item.metaTypes.map((metaType, index) => {
          return <li key = {index}>
            {metaType.metaType} ({metaType.specialAttributePoints})
          </li>;
        })}
        </ul>,
      onClick: this.onClickHandler(METATYPES, key).bind(this),
      selected: item.selected === true
    };
  }

  skillPointsMap(item, index) {
    return {
      display: item.skillPoints + ' / ' + item.skillGroupPoints,
      onClick: this.onClickHandler(SKILLPOINTS, index).bind(this),
      selected: item.selected === true
    };
  }
  onClickHandler(row, select) {
    const { dispatch } = this.props;
    return () => {
      dispatch(setPriority(row, select));
    };
  }
  render() {
    const {
        attributePoints,
        funds,
        magicOrResonance,
        metaTypes,
        skillPoints
      } = this.props,
      attributePointsData = attributePoints.map(
        this.attributePointsMap.bind(this)
      ),
      fundsData = funds.map(this.fundsMap.bind(this)),
      magicOrResonanceData = magicOrResonance.map(
        this.magicOrResonanceMap.bind(this)
      ),
      metaTypesData = metaTypes.map(
        this.metaTypesMap.bind(this)
      ),
      skillPointsData = skillPoints.map(
        this.skillPointsMap.bind(this)
      ),
      tableData = [
        [
          {
            display: language[localLanguage].generator.priorityTable.priorities
          },
          {
            display: 'A'
          },
          {
            display: 'B'
          },
          {
            display: 'C'
          },
          {
            display: 'D'
          },
          {
            display: 'E'
          }
        ],
        [{ display: 'Metatype' }].concat(metaTypesData),
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
        <GeneratorPriorityRow data = {transposeData[0]} />
      </thead>
      <tbody>
        <GeneratorPriorityRow data = {transposeData[1]} />
        <GeneratorPriorityRow data = {transposeData[2]} />
        <GeneratorPriorityRow data = {transposeData[3]} />
        <GeneratorPriorityRow data = {transposeData[4]} />
        <GeneratorPriorityRow data = {transposeData[5]} />
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
