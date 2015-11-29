import React from 'react';

// import * as language from '../constants/language';

// let localLanguage = language.getLanguage();

export class GeneratorSkillPoints extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { skillPoints } = this.props,
      skillPointsText = skillPoints.filter(item => item.selected === true)
        .map(item => `${item.skillPoints} / ${item.skillGroupPoints}`);
    return <div>
      {skillPointsText}
      </div>;
  }
}

GeneratorSkillPoints.propTypes = {
  skillPoints: React.PropTypes.array
};

export default GeneratorSkillPoints;
