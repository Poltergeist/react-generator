import React from 'react';

import GeneratorPriorityRow from './generator-priority-row.react';

import {
  SET_FUNDS
} from '../constants/action-types';

import * as language from '../constants/language';

let localLanguage = language.getLanguage();

class GeneratorPriorityTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { funds, dispatch } = this.props;
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
        <GeneratorPriorityRow data={funds}
            setSelection = {select => {
              dispatch({
                type: SET_FUNDS,
                selected: select
              });}
            }
            title={"Funds"}
        />
      </tbody>
    </table>;
  }
}

GeneratorPriorityTable.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  funds: React.PropTypes.array.isRequired
};

export default GeneratorPriorityTable;
