import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header'
import Specs from './Component/Specs'
import Cart from './Component/Cart'
import Item from './Component/Item'
import TotalPrice from './Component/TotalPrice'

class App extends Component {
  constructor(props){
    super(props);
    console.log(this.state);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {

    return (
      <div className="App">
        <header>
        <Header/>
        </header>      
        <main>
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <Specs/>
            {/* <Item/> */}
          </section>
          <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            <Cart/>
            <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
              <div className="summary__total__value">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(<TotalPrice />) }
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;  
