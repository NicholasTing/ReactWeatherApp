import React, {Component} from 'react';

class GoogleMap extends Component{


    componentDidMount(){

        // this.ref.maps finds the html
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render(){

        // this.ref.map give reference to this div

        return <div ref="map" />;

    }
}

export default GoogleMap;