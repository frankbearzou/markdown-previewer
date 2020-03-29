import React from 'react';
import marked from 'marked';
import './bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n',
    };

  }

  getMarkDown = () => {
    console.log(this.state.value);
    let md = marked(this.state.value, {sanitize: true});
    return {__html: md};
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <textarea rows="30" cols="80" value={this.state.value} onChange={this.handleChange}></textarea>

          </div>
          <div className="col-md-6">
            <div dangerouslySetInnerHTML={this.getMarkDown()} />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
