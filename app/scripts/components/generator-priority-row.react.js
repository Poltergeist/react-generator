import React from 'react';

// import * as language from '../constants/language';

// let localLanguage = language.getLanguage();

export class GeneratorPriorityRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, data, setSelection } = this.props;
    let dataCells = data.map((item, index) => {
      const className = item.selected ?
        'generator__priorities-table__row ' +
          'generator__priorities-table__row--selected' :
        'generator__priorities-table__row';
      return <td className = {className}
          key = {index}
          onClick = {() => {
            setSelection(index);
          }
        }
             >
        {item.display}
      </td>;
    });
    return <tr>
          <td>
            {title}
          </td>
          {dataCells}
        </tr>;
  }
}

GeneratorPriorityRow.propTypes = {
  data: React.PropTypes.array.isRequired,
  setSelection: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired
};

export default GeneratorPriorityRow;
