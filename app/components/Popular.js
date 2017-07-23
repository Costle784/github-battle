var React = require('react');

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.State = {
      selectedLanguage:'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang
      }
    });
  }

  render() {
    let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <div>
        <ul className='languages'>
          {languages.map(function (lang){
            return (
              <li
                onClick={this.updateLanguage}
                key={lang}>
                {lang}
              </li>
            )
          }, this)}
        </ul>
      </div>
    )
  }
}

module.exports = Popular;
