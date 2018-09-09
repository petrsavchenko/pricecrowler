import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {

  constructor(props) {
    super(props);

    this.onSubmitBtnClick = this.onSubmitBtnClick.bind(this);
  }

  componentDidMount() {
    var element = ReactDOM.findDOMNode(this);
    var $ = window.$;
    $(element).modal('show');
    $(element).on('hidden.bs.modal', this.props.onClose);
  }

  onSubmitBtnClick() {
    var $ = window.$;
    $('.modal').modal('toggle');
  }

  render() {
    return (
      <div className="modal fade">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{this.props.title}</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            <div className="modal-footer">
              <button type="submit" form={this.props.formId} onClick={this.onSubmitBtnClick} className="btn btn-primary btn-lg">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
