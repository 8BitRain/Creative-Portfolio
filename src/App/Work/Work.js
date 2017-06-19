import React, { Component } from 'react';
import './Work.css';
import '../components/ListView.css';
import logo from '../logo.png'

//Functional declaration of Component
function ListView(props) {
  const names = props.names;
  const listItems = names.map((name) =>
    <li key={name.toString()} style={{listStyleType:"none"}}>
      <div style={{display:"flex", flexDirection:"row", alignItems:"center", listStyleType:"none", marginTop: 10, marginBottom: 10}}>
        <div style={{backgroundColor: "white", width: 72, height: 68, borderRadius: 12, display:"flex", alignItems:"center", justifyContent:"center"}}>
        <img style={{width: 32, height: 48}}src={logo} />
        </div>
        <p>{name}</p>
        <p>Category</p>
      </div>

    </li>
  );
  return (
    <ul className="ListView-ul">{listItems}</ul>
  );
}


class Work extends Component {

  render() {
    const names = ["Payper", "My Brother's Keeper", "Self Love", "Frost", "Winter", "Soul", "Soulstice"];
    return (
      <div className="Work">
        <div style={{flexDirection: 'row', display: 'flex'}}>
        <div style={{backgroundColor: '#e91e63', height: '75vh', width: '50vw'}}>
          <div className="Grid-Content-Wrapper-Alt">
            <p className="Portfolio-Item-Title">Professional</p>
            <ListView names={names}/>
          </div>
        </div>
        <div style={{backgroundColor: '#00BCD4', height: '75vh', width: '50vw'}}>
          <div className="Grid-Content-Wrapper-Alt">
            <p className="Portfolio-Item-Title">Persanol</p>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Work;
