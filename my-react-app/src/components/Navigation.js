import React, {Component} from 'react'
export default class Navigation extends Component {
    render(){
        return (
            <div className='navBoard'>
                <nav>
                    <ul className='navClass'>
                        <li><a className='active' href='#home'>Home</a></li>
                        <li><a className='active' href='#news'>News</a></li>
                        <li><a className='active' href='#about'>About</a></li>
                        <li><a className='active' href='#contact'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}