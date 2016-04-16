const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery-browserify');


const Messages = React.createClass({
  getInitialState: function () {
    return ({ messages: [], username: 'Cuducos' });
  },

  componentDidMount: function () {
    this.loadMessages();
    setInterval(this.loadMessages, 1000);
  },

  loadMessages: function () {
    $.ajax({
      url: '/api/',
      dataType: 'json',
      success: function (data) {
        this.setState({ messages: data.messages });
      }.bind(this),

      error: function (xhr, status, err) {
        console.error(url, status, err.toString());
      },
    });
  },

  render: function () {
    return (
      <div>
        {this.state.messages.map(function (message) {
          return (
            <p key={message.pk} className="message">
              <span className="author">{message.author}</span>
              {message.content}
              <span className="time_ago">{message.time_ago}</span>
            </p>
          );
        })}
      </div>
    );
  },

});

ReactDOM.render(
  <Messages />,
  document.getElementById('messages')
);
