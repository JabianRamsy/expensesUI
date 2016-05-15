import React from 'react';

// export default class AccountsComponent extends React.Component {
//   render(){
//     return (
//       <div>
//         {
//           this.props.accounts.map((account,i) =>
//               <div key={account.id}>{account.name}</div>
//           )
//         }
//       </div>
//     );
//   }
// }

//Apartir de react 14 stateless
export default function AccountsComponent(props) {

  const accounts = props.accounts.map((account,i) =>
      <div key={account.id}>{account.name}</div>
  );
    return (<div>{accounts}</div>);
}
