import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    
    componentDidMount() {
        this.fetchGIF()
    }
    

    fetchGIF = (query = "dolphins") => {
        const endPoint = 'https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=kt8adN07pHY8VpLFkit9EN4M3l6OZ6zo&rating=g&limit=3'

        fetch(endPoint)
        .then(res => res.json())
        .then(({data}) => {
          this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }

    render() {
        return(
          <div>
            <GifSearch fetchGIF={this.fetchGIF} />
            <GifList gifs={this.state.gifs} />
          </div>
        )
      }
}
export default GifListContainer