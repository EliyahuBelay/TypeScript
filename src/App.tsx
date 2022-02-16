import React from 'react';
import { PopAlertOnClick,PopAlert,ReturnIfMoreThan4Chars,NameNAge,ReturnFNameLNameNAge,LogNamesRestOperator,LogOrAlert,ReturnBiggerNum,ReturnLowestNumNName,ReturnIfAreDoubleNameExist,ReturnOrderOrNot,ReturnIfExistInArray,LogObj,LogBiggerObj,ReturnIfNameInArray } from './Components/Home/Home';
import './App.css';
import {Student} from './Components/Student/Student';
import {ReturnEvenNumbers} from './Components/Game/Game';

function App() {
  // PopAlert();
  // {ReturnIfMoreThan4Chars("eliyahu")}
  // NameNAge("eliyahu",15);
  // LogFNameLNameNAge("eliyahu","belay");
  // LogNamesRestOperator("eliyahu","eli","beli","bom")
  // LogOrAlert("eliyahu","undefined",30,"eli","beli","bom");
  // ReturnBiggerNuum(45,576,78,1,34234,454);
  // ReturnLowestNumNName("eliyahu",45,68,2,67,7,324,465);
  // ReturnIfAreDoubleNameExist("eliyahu","belay","boom");
  // ReturnOrderOrNot(undefined,"eli","beli","bom");
  // ReturnIfExistInArray();
  // LogObj({firstName: "eli",age:25},{firstName: "eli",age:25},{firstName: "eli",age:25});
  // LogBiggerObj({firstName: "eli",grade:4,age:25},{firstName: "eli",grade:4,age:15},{firstName: "eli",grade:4,age:21});
  //  ReturnIfNameInArray("eliyahu",{name: "eliyahu",grade:4,age:25},{name: "eli",grade:4,age:15},{name: "eli",grade:4,age:21});
  
  
  return (
    <div className="App">
      <header className="App-header">
      <PopAlertOnClick/>
      <Student/>
      {/* <DisplayBiggestNum/>{//does not work */}
      <ReturnEvenNumbers/>
      </header>
    </div>
  );
}

export default App;
