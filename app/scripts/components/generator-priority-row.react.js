import React from 'react';

// import * as language from '../constants/language';

// let localLanguage = language.getLanguage();

export class GeneratorPriorityRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, data, setSelection } = this.props;
    let dataCells = Object.keys(data).map(item => {
      const className = data[item].selected ?
        'generator__priorities-table__row ' +
          'generator__priorities-table__row--selected' :
        'generator__priorities-table__row';
      return <td className = {className}
          key = {item}
          onClick = {() => {
            setSelection(item);
          }
        }
             >
        {data[item].value}
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
  data: React.PropTypes.object,
  setSelection: React.PropTypes.func.isRequired,
  title: React.PropTypes.string
};

export default GeneratorPriorityRow;
