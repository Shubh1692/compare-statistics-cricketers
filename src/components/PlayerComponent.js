import React, { Component, Fragment } from 'react';
import AsyncSelect from 'react-select/async';
import { Button, ListGroup } from 'react-bootstrap';
export default class PlayerComponent extends Component {
  state = { inputValue: '', players: {}, compareData: [] };
  /**
   * @name loadOptions
   * This is used for load dropdown options based on filter string
   */
  loadOptions = async (search) => {
    const playerDropdownReq = await fetch(`api/players?search=${search}`);
    const { players } = await playerDropdownReq.json();
    return players;
  }

  /**
   * @name handleChange
   * This is used for store selected fields in state variables
   * @param fieldName Selected dropdown name
   * @param fieldValue Selected dropdown value
   */
  handleChange = async (fieldName, fieldValue) => {
    this.setState({
      players: {
        ...this.state.players,
        ...{
          [fieldName]: fieldValue.value
        }
      }
    })
  }

  /**
   * @name onCompare
   * This is used for get compare data of players
   */
  onCompare = async () => {
    const { players } = this.state;
    const playerCompareReq = await fetch(`api/compare/${Object.values(players).join(',')}`);
    const { compareData } = await playerCompareReq.json();
    await this.setState({
      compareData
    });
  }

  /**
  * @name render
  * This is used for render player component
  */
  render() {
    const { players = {}, compareData } = this.state;
    return (
      <Fragment>
        <div className="d-flex align-items-center">
          <div className="dropdown-group p-5">
            <AsyncSelect className="player-dropdown w-50 pr-5"
              cacheOptions
              onChange={(value) => this.handleChange('playerOne', value)}
              loadOptions={this.loadOptions}
              defaultOptions
              onInputChange={this.handleInputChange}
            />
            <AsyncSelect className="player-dropdown w-50 pl-5"
              cacheOptions
              onChange={this.handleChange}
              loadOptions={this.loadOptions}
              onChange={(value) => this.handleChange('playerTwo', value)}
              defaultOptions
              onInputChange={this.handleInputChange}
            />
          </div>
          <Button variant="secondary" disabled={!players.playerOne || !players.playerTwo || (players.playerOne === players.playerTwo)} onClick={() => this.onCompare()}>Compare</Button>
        </div>
        <div>
          {compareData.map(({ fieldName, playerDataArray = [], displayName }, index) => (<ListGroup key={fieldName} horizontal={'md'} className="my-2" >
            <ListGroup.Item className='w-100' variant={index % 2 === 0 ? 'dark' : 'light'}>{displayName}</ListGroup.Item>
            {playerDataArray.map((playerData, dataIndex) => (<ListGroup.Item variant={index % 2 === 0 ? 'secondary' : ''} className='w-100' key={dataIndex}>{playerData || 'N/A'}</ListGroup.Item>))}
          </ListGroup>))}
        </div>
      </Fragment>);
  }
}