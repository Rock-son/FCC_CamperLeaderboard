import React from 'react';
import TableRow from './tableRow.jsx';


export default class Table extends React.Component {
    constructor() {
        super();
     // only in ES6 - mandatory binding of custom methods
        this.state = {recent: [], alltime: [], shown: [], ordered: 'recent'};
        this._getRecentData   = this._getRecentData.bind(this);
        this._getAllTimeData  = this._getAllTimeData.bind(this);
        this._recentData  = this._recentData.bind(this);
        this._allTimeData = this._allTimeData.bind(this);
        this._orderByRecent = this._orderByRecent.bind(this);
        this._orderByAlltime = this._orderByAlltime.bind(this);
    }
    _getRecentData() {
      
      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", this._recentData);
      oReq.open("GET", 'https://fcctop100.herokuapp.com/api/fccusers/top/recent');
      oReq.send();
    }
    _getAllTimeData() {
      
      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", this._allTimeData);
      oReq.open("GET", 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
      oReq.send();
    }
    // both functions only used at app start
    _recentData(res) {
          let recent = JSON.parse(res.target.responseText);
          // ordered by recent data at start (this.state.shown)
          this.setState({recent: recent, shown: recent});    
    }
    _allTimeData(res) {
          let alltime = JSON.parse(res.target.responseText);
          this.setState({alltime: alltime});          
    }
    _orderByRecent(event) {
        this.setState({shown: this.state.recent, ordered: 'recent'}); 
    }
    _orderByAlltime(event) {     
        this.setState({shown: this.state.alltime, ordered: 'alltime'}); 
    }
    // make AJAX call for recent and alltime data just before mounting (rendering)
    componentDidMount() { 
        this._getRecentData();
        this._getAllTimeData();            
    }
    render() {
        let count = 0;      
        let recent = this.state.ordered === 'recent' ? 'active' : "";
        let alltime = this.state.ordered === 'alltime' ? 'active' : "";
        /* //prepare TableRow component for enumeration with map function(in virtual DOM)
             let enumerateData = (userData, index) => <TableRow key={count} data={userData} index={++count}></TableRow>; 
        */
        return (
                <div>
                    <div className='head'><i className="fa fa-fire fa-fw"></i>FreeCodeCamp Leaderboard</div>
                    <div className='table'>                      
                        <div className='tblRow'>
                             <div className='tblData'>#</div>
                             <div className='tblData'>Camper Name</div>
                             <div id='th1' className={'tblData th ' +  recent} onClick={this._orderByRecent}>Points in past 30 days</div>
                             <div id='th2' className={'tblData th ' + alltime} onClick={this._orderByAlltime}>All time points</div>
                        </div>
                        {this.state.shown.map((userData, index) => <TableRow key={count} data={userData} index={++count}></TableRow>)}
                    </div>
                </div>
        );
    }
}
