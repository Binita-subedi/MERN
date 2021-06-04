import React from 'react';

var url ='https://picsum.photos/200/300';

function List() {
 return (<div>
  <img src= {url} alt="this is a random picture"/>
    <ul style={{color:"brown"}}>
      <li>You should not waste time feeling sorry</li>
      <li>You should not give your power to others</li>
      <li>You should not focus on things that can't be control</li>
      <li>You should not worry about pleasing everyone</li>
      <li>You should not fear about taking calculated risk</li>
      <li>you should not dwell on past event</li>
      <li>You should not make same mistake again and again</li>
      <li>You should not resent on other people sucess</li>
      <li>You should not give up after the first failure</li>
      <li>You don't fear alone time</li>
      <li>You should not expect immediate results</li>
      <li>You should not feel as if world owns everything for you</li>
    </ul>
    </div>);

}

export default List;