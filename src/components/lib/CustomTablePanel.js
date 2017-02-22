// Created by snov on 22.02.2017.
//

import React, { Component } from 'react';

export default class CustomPanel extends Component {

  static propTypes = {
    list: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    header: React.PropTypes.array,
    RowElement: React.PropTypes.func.isRequired,
    remove: React.PropTypes.func.isRequired,
    update: React.PropTypes.func.isRequired,
    add: React.PropTypes.func.isRequired
  }

  static defaultProps = {
    list: []
  }

  render() {
    const { list, dispatch, RowElement, remove, update, add } = this.props;
    let index = 0, headerKey = 0;

    return (
      <div>
        <table className='table'>
          <thead>
          <tr>
            {this.props.header.map(h => {
              return <th key={headerKey++}>{h}</th>
            })}
          </tr>
          </thead>

          <tbody>

          {list && list.length > 0 &&
            list.map((item) => {
              const { id } = item;
              return <RowElement {...item} index={index++} key={id}
                                 onRemove={() => { dispatch(remove(id)); }}
                                 onSave={(data) => { dispatch(update(id, data)); }}
            />})
          }

          </tbody>
        </table>
        <p className='jumbotron'>
          <button className='btn btn-success' onClick={() => { dispatch(add()); }}>New</button>
        </p>
      </div>
    )
  }
}