import React, {Component} from "react";
import { players } from "../shared/ListOfPlayers";
import PlayersPresentation from "./PlayersPresentation";
import Player from "./Player";
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            player: players
        };
    }
    render() {
        return <PlayersPresentation players={this.state.players}/>
    }
}
export default Main