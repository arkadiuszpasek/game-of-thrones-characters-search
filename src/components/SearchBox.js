import React from 'react';
import PropTypes from 'prop-types';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChange(e) {
    const { onChange } = this.props;
    const input = e.target.value;
    this.setState({ value: input });
    onChange(input);
  }

  render() {
    const { value } = this.state;
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              id="search"
              className="form-control form-control-lg"
              placeholder="Enter character's name"
              value={value}
              onChange={this.onChange.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
