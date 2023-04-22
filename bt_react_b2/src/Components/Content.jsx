import React, { Component } from 'react';
import '../Style/style.css';

export default class Content extends Component {
    state = {
        srcBackground: "./img/background.jpg",
        srcModel: './img/model.jpg',
        srcGlassesModel: './img/v1.png',
        srcGlasses1: './img/v1.png',
        srcGlasses2: './img/v2.png',
        srcGlasses3: './img/v3.png',
        srcGlasses4: './img/v4.png',
        srcGlasses5: './img/v5.png',
        srcGlasses6: './img/v6.png',
        srcGlasses7: './img/v7.png',
        srcGlasses8: './img/v8.png',
        srcGlasses9: './img/v9.png',
    }

    changeGlasses = (number) => {
        this.setState({
            srcGlassesModel: `./img/v${number}.png`,
        })
    }

    render() {

        return (
            <div className='container'>
                <div style={{position:'relative', width: '500px'}}>
                    <img src={this.state.srcModel} alt='no' style={{ width: '500px', height: 'auto', position: 'absolute'}} />
                    <img src={this.state.srcGlassesModel} alt='no' style={{ width: '300px', height: 'auto', position: 'absolute', marginTop: '30%', marginLeft: '20%' }} />
                </div>

                <div className='d-flex'>
                    <button style={{margin: '10px'}} onClick={ () => {this.changeGlasses('1')}}><img src={this.state.srcGlasses1} alt='no' style={{ width: '150px'}}/></button>
                    <button style={{margin: '10px'}} onClick={ () => {this.changeGlasses('2')}}><img src={this.state.srcGlasses2} alt='no' style={{ width: '150px'}}/></button>
                    <button style={{margin: '10px'}} onClick={ () => {this.changeGlasses('3')}}><img src={this.state.srcGlasses3} alt='no' style={{ width: '150px'}}/></button>
                    <button style={{margin: '10px'}} onClick={ () => {this.changeGlasses('4')}}><img src={this.state.srcGlasses4} alt='no' style={{ width: '150px'}}/></button>
                </div>

                <div className='d-flex'>
                    <button style={{margin: '10px'}} onClick={ () => {this.changeGlasses('5')}}><img src={this.state.srcGlasses5} alt='no' style={{ width: '150px'}}/></button>
                    <button style={{margin: '10px'}} onClick={ () => {this.changeGlasses('6')}}><img src={this.state.srcGlasses6} alt='no' style={{ width: '150px'}}/></button>
                    <button style={{margin: '10px'}} onClick={ () => {this.changeGlasses('7')}}><img src={this.state.srcGlasses7} alt='no' style={{ width: '150px'}}/></button>
                    <button style={{margin: '10px'}} onClick={ () => {this.changeGlasses('8')}}><img src={this.state.srcGlasses8} alt='no' style={{ width: '150px'}}/></button>
                </div>

                <div className='d-flex'>
                    <button style={{margin: '10px'}} onClick={ () => {this.changeGlasses('9')}}><img src={this.state.srcGlasses9} alt='no' style={{ width: '150px'}}/></button>
                </div>
            </div>


        )
    }
}
