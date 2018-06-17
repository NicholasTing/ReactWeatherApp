import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{

    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>

                    </tr>
                </thead>

                <tbody>

                </tbody>
            </table>
        )
    }
}

// Because index.js in reducer
function mapStateToProps(state){
    return  {weather : state.weather }
}

// Because index.js in reducer
function mapStateToPropsES6({weather}){
    return ({weather});
}

export default connect(mapStateToProps)(WeatherList);