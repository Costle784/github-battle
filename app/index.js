var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types')
require('./index.css');

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt='Avatar'
          style={{width:100, height:100;}}
        />
        <h1>Name: {this.props.name} </h1>
        <h3>username: {this.props.username} </h3>
      </div>
    )
  }
}

class Users extends React.Component {
  render() {
    let friends = this.props.list.filter((user) => {
        return user.friend;
      });
    let notFriends = this.props.list.filter((user) => {
        return !user.friend;
      });
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map((user) => {
            return <li>{user.name}</li>
          });}
        </ul>
        <hr />
        <h1> Non Friends </h1>
        <ul>
          {notFriends.map((user) => {
            return <li>{user.name}</li>
          });}
        </ul>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Users list={this.props.list} />
        <Badge
          name='Tyler McGinnis'
          username='tyler mcginnis'
          img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'/>
      </div>
    )
  }
}

let folks = [
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ];

ReactDOM.render(
  <App list={folks}/>,
  document.getElementById('app')
);
