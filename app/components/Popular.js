var React = require('react');
var PropTypes = require('prop-types');
var axios

function SelectLanguage(props) {
  let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className='languages'>
        {languages.map((lang) => {
          return(
            <li
              style={lang === props.language ? {color:'#d0021b'} : null}
              onClick={props.onSelect.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          )
        })}
      </ul>
    )
  }


SelectLanguage.propTypes = {
  language: PropTypes.string.isRequired,
  onSelect:PropTypes.func.isRequired
};


class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang,
      }
    });
  }

  render() {
    return (
      <SelectLanguage
        language={this.state.selectedLanguage}
        onSelect={this.updateLanguage} />
    )
  }
}

module.exports = Popular;
