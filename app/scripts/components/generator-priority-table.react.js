import React from 'react';

import GeneratorPriorityRow from './generator-priority-row.react';

import {
  FUNDS,
  ATTRIBUTES,
  SET_PRIORITY
} from '../constants/action-types';

import * as language from '../constants/language';

let localLanguage = language.getLanguage();

class GeneratorPriorityTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { attributes, funds, dispatch } = this.props;
    const onClickHandler = row => {
      return select => {
        dispatch({
          type: SET_PRIORITY,
          subtype: row,
          selected: select
        });
      };
    };
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
        <GeneratorPriorityRow data={attributes}
            setSelection = {onClickHandler(ATTRIBUTES)}
            title={"Attributes"}
        />
        <GeneratorPriorityRow data={funds}
            setSelection = {onClickHandler(FUNDS)}
            title={"Funds"}
        />
      </tbody>
    </table>;
  }
}

GeneratorPriorityTable.propTypes = {
  attributes: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  funds: React.PropTypes.array.isRequired
};

export default GeneratorPriorityTable;
