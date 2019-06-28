import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header'
import Specs from './Component/Specs'
import Cart from './Component/Cart'
import Item from './Component/Item'
import TotalPrice from './Component/TotalPrice'

class App extends Component {
  state = {
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
              },
    },

    features: {
      Processor: [
        {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        {
          name: 'Professor X AMD Fire Breather with sidewinder technology',
          cost: 1200
        }
      ],
      "Operating System": [
        {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        {
          name: 'Bodhi Linux',
          cost: 300
        }
      ],
      "Video Card": [
        {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        {
          name: 'Mind mild breeze 2000',
          cost: 1345
        }
      ],
      Display: [
        {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        },
        {
          name: '15.3" HGTV (3840 x 2160) Home makeover edition',
          cost: 1400
        },
      ]
    },
  }
  // constructor(props){
  //   super(props);
  //   console.log(this.state);
  //   this.state = {
  //     selected: {
  //       Processor: {
  //           name: '17th Generation Intel Core HB (7 Core with donut spare)',
  //           cost: 700
  //         },
  //       "Operating System": {
  //           name: 'Ubuntu Linux 16.04',
  //           cost: 200
  //         },
  //       "Video Card":{
  //           name: 'Toyota Corolla 1.5v',
  //           cost: 1150.98
  //         },
  //       Display: {
  //           name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
  //           cost: 1500
  //         }
  //     }
  //   }
  // }

  updateFeature = (feature, newValue) => { 
    console.log(feature, newValue);
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
console.log(this.state.features);
    return (
      <div className="App">
        <header>
        <Header/>
        </header>      
        <main>
          
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <Specs features={this.state.features} selected={this.state.selected} updateFeature={this.updateFeature}/>
            
          </section>
          
          <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            <Cart selected={this.state.selected}/>
            <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
              <TotalPrice selected={this.state.selected} />
              {/* <div className="summary__total__value">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.props.total) }
              </div> */}
            </div>
          </section>

        </main>
      </div>
    );
  }
}

export default App;