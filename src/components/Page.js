import React from 'react';
import './Page.css'

export default class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      stickers: undefined
    }
  }

  getDate() {
    //today
  	let date = new Date();
  	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];

  	return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  }

  render() {
      return (
        <div className="page">
          <p className='date'>{this.getDate()}</p>
            <textarea onChange={(e) => console.log(e.target.value)} rows="18" name="text" defaultValue='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, cum consequuntur praesentium cupiditate quis nam, inventore commodi magnam veritatis ea rerum soluta sint officiis pariatur accusantium laborum ratione provident ex velit? Fugit autem consequatur, hic possimus sint nam voluptatum! Temporibus officiis repudiandae exercitationem, est ea, recusandae quasi alias earum repellat!'></textarea>
          {this.props.imageUrl &&
            <img className='pic' src={this.props.imageUrl} alt="Uploaded images" height="250" />
          }
        </div>
    )
  }
}
