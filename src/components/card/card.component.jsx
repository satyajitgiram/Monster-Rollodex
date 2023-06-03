import { Component } from "react";
import './card.styles.css'

class Card extends Component{
    render(){
        const {id, name, email } = this.props.monster

        return(
            <div className='card-container' key={id}>
            <img alt={`${name}`} src={`https://robohash.org/${id}?set2?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        )
    }
}

export default Card;