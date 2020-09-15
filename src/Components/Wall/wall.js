import React from 'react';

import './style.css';

import Brick from '../Brick/brick.js';


class Wall extends React.Component{

    
    constructor(props){

        super(props);
        this.state = {
            bricks: []
        }
    }

    addMoreBricks = () => {

        const newBricksArray = [...this.state.bricks];
        newBricksArray.push(newBricksArray.length + 1);

        // this.state.bricks.push(5);
        this.setState({
            bricks: newBricksArray
        }
            
        )

    }

    render = () => {
        return (

            <div className='wall-container' >

                {
                    this.state.bricks.map( (brick) => {
                        return<Brick key={brick} name={brick} />;
                    } )
                }

                <button className='btn' onClick={this.addMoreBricks}>Add more</button>

            </div>

        )


    }


}

export default Wall;
