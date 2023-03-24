import React from 'react';
import './view.css'

class view extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries : [],
            states : [],
            cities : [],
            selectedCountry : 'Country',
            selectedState : 'State'
        };
        this.changeCountry = this.changeCountry.bind(this);
        this.changeState = this.changeState.bind(this);
    }
   
    componentDidMount() {
        this.setState({
            countries : [
                { name: 'choice1', states: [ 
                    {name: 'Central Luzon', cities: ['Angeles City', 'Olongapo', 'San Fernando']},
                    {name: 'NCR', cities: ['Pasay City', 'Makati', 'Marikina']}
                ]},
                { name: 'choice2', states: [ 
                    {name: 'California', cities: ['Sacramento', 'Los Angeles', 'Bakersfield', 'Carson']},
                    {name: 'Florida', cities: ['Tallahassee', 'Jacksonville']},
                    {name: 'Illinois', cities: ['Springfield', 'Chicago']},
                    {name: 'New Jersey', cities: ['Trenton', 'Newark']}
                ]},
                     
            ]
        });
    }
   
    changeCountry(event) {
        this.setState({selectedCountry: event.target.value});
        this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
    }
 
    changeState(event) {
        this.setState({selectedState: event.target.value});
        const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
        this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
    }
     
    render() {
        return (
            <div className="app">
                <div className="row">
                <h2>MVC</h2>
     
                <div className="form-group">
                    <label style={styles.lbl}>ข้อ1</label>
                    <select className="form-select" placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
                        <option>choice</option>
                        {this.state.countries.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>
 
                <div className="form-group">
                    <label style={styles.lbl}>ข้อ2</label>
                    <select className="form-select" placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
                        <option>choice</option>
                        {this.state.states.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>
                 
                <div className="form-group">
                    <label style={styles.lbl}>ข้อ3</label>
                    <select className="form-select" placeholder="City">
                        <option>choice</option>
                        {this.state.cities.map((e, key) => {
                            return <option key={key}>{e}</option>;
                        })}
                    </select>
                </div>
                <button type="submit" className="btn btn-success" style={styles.btn}>Submit</button>
                
                <div className='form-group'>
                  <label htmlFor='title'>Input Field</label>

                  <input
                  type='text'
                  className='form-control'
                  id='title'
                  
                  ></input>
                </div></div>

            </div>
        )
    }
}
 
export default view;
 
// Just some styles
const styles = {
  lbl: {
    marginTop: 5,
    marginBottom: 5,
  },  
  btn: {
    width:250,
    marginLeft:15,
    marginTop: 15,
  }
};