import React, { Component } from 'react';
import './Stickers.css'

import { IconButton,
         Grow
       } from '@material-ui/core';
import { Mood } from '@material-ui/icons';

export default class Stickers extends Component {
  constructor() {
    super();
    this.state = {
      showStickers: true,
      stickers: [
        { id: 1, src: require('../assets/261910552003202.png'), title: 'hannahmontana' },
        { id: 2, src: require('../assets/295962751228211.png'), title: 'acidsmile' },
        { id: 3, src: require('../assets/297359063039211.png'), title: 'spicegirls' },
        { id: 4, src: require('../assets/310868699136211.png'), title: 'sailormoon' },
        { id: 5, src: require('../assets/311835845046211.png'), title: 'rainbow' },
        { id: 6, src: require('../assets/296601226182211.png'), title: 'tamagochi' },
        { id: 7, src: require('../assets/303432332011211.png'), title: 'rainbowsmile' },
      ]
    }
  }

  toggleStickers() {
    this.setState({
      showStickers: !this.state.showStickers
    })
  }

  // onStop = (event) => {
  //   event.target.hidden = true;
  //   let dropTarget = document.elementFromPoint(event.clientX, event.clientY)
  //   console.log(dropTarget);
  //   event.target.hidden = false;
  //
  //   if (dropTarget.classList.contains('page')) this.setState({
  //     stickers: this.state.stickers.filter(sticker => sticker.title !== event.target.alt)
  //   })
  // }

  render() {
    return (
      <div>
        <IconButton
          type="button"
          component="span"
          onClick={() => this.toggleStickers()}
        >
          <Mood />
        </IconButton>
        <Grow in={this.state.showStickers}>
          <div className="stickers-container">
            {this.state.stickers.map(({id, src, title}) =>
                <img className='sticker' key={id} src={src} alt={title} />
            )}
          </div>
        </Grow>
      </div>
    )
  }
}
