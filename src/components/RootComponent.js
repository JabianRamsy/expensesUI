import React from 'react';
import Accounts from './AccountsComponent';

const getAccounts = () =>{
  return new Promise((resolve, reject)=>{
    window.setTimeout(()=>{
      const ACCOUNTS = [{id:1,name:'name1'},{id:2,name:'name2'},{id:3,name:'name3'}];
      resolve(ACCOUNTS);
    },500);
  });
};




export default class RootComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {accounts:[]};
  }

  componentDidMount(){
    getAccounts()
    .then(accounts =>{
      this.setState({accounts:accounts});
    })
    .catch(e=>{
      console.log('There was an error!', e);
    });
  }

  render(){
    return (
      <div className="container">
        <div className="col-sm-12">
          <h1>Expenses</h1>
          <div className="col-sm-12">
            <Accounts accounts={this.state.accounts}/>
          </div>
        </div>
      </div>
    );
  }
}
