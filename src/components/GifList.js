import React, {Component} from 'react'
class GifList extends Component{

    render(){
        return(
            <ul>
                {this.props.gifs.map((gif => 
                <li><img key={gif.id} src={gif.url} alt=""/></li>))}
            </ul>
        )
    }
}

export default GifList