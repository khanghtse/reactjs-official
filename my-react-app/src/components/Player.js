import React, {Component} from "react";
import { players } from "../shared/ListOfPlayers";
export default class Player extends Component {
  render() {

    return (
      <div className='container'>
        <div className="row">
        {players.map((player) => (
          <div className='col-md-4' key={player.id}>
            <div className='card text-center'>
              <img src={player.img} />
              <h3>{player.name}</h3>
              <p className='title'>{player.club}</p>
              <p><button className="btn btn-primary">Detail</button></p>
            </div>
          </div>
        ))}
        </div>
      </div>
    )
  }
}