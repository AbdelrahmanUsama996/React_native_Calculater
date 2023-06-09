import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function BtnCalc(props) {
  return (
    <TouchableOpacity
      style={{
        ...styles.btnStyle,
        backgroundColor: props.colorBtn,
        flexGrow: props.groBtn,}}
        onPress={props.handleValue}>
      <Text style={{ ...styles.textBtnStyle, color: props.textColor }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

function App() {
  const [result ,setResult] = useState("0");

  const handleValue = (value) => {
    
    let newValue = result === "0" ? value : result + value
    if(!isNaN(value)){
      setResult(newValue)
    }else if(value === "C"){
      setResult("0")
    }else if(value === "D"){
      setResult(newValue !== value ? newValue.slice(0,newValue.length -2 ) : "0")
    }else if(value === "+"){
      newValue[0] === value ? "0" : setResult(newValue , value)
    }else if(value === "-"){
      newValue[0] === value ? "0" :setResult(newValue , value)
    }else if(value === "*"){
      newValue[0] === value ? "0" :setResult(newValue , value)
    }else if(value === "/"){
      newValue[0] === value ? "0" :setResult(newValue , value)
    }else if(value === "%"){
      newValue[0] === value ? "0" :setResult(newValue , value)
    }else if(value === "."){
      setResult(newValue , value)
    }

    if(value === "="){
      setResult(eval(newValue.slice(0,newValue.length - 1)))
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.textResultContainer} >{result}</Text>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btnRowContainer}>
          <BtnCalc title="C" colorBtn="#ddd" handleValue={()=>handleValue("C")}/>
          <BtnCalc title="D" colorBtn="#ddd" handleValue={()=>handleValue("D")}/>
          <BtnCalc title="%" colorBtn="#ddd" handleValue={()=>handleValue("%")}/>
          <BtnCalc title="/" colorBtn="#6349fb" textColor="white" handleValue={()=>handleValue("/")}/>
        </View>
        <View style={styles.btnRowContainer}>
          <BtnCalc title="7" colorBtn="#fefefe" handleValue={()=>handleValue("7")}/>
          <BtnCalc title="8" colorBtn="#fefefe" handleValue={()=>handleValue("8")}/>
          <BtnCalc title="9" colorBtn="#fefefe" handleValue={()=>handleValue("9")}/>
          <BtnCalc title="*" colorBtn="#6349fb" textColor="white" handleValue={()=>handleValue("*")}/>
        </View>
        <View style={styles.btnRowContainer}>
          <BtnCalc title="4" colorBtn="#fefefe" handleValue={()=>handleValue("4")}/>
          <BtnCalc title="5" colorBtn="#fefefe" handleValue={()=>handleValue("5")}/>
          <BtnCalc title="6" colorBtn="#fefefe" handleValue={()=>handleValue("6")}/>
          <BtnCalc title="-" colorBtn="#6349fb" textColor="white" handleValue={()=>handleValue("-")}/>
        </View>
        <View style={styles.btnRowContainer}>
          <BtnCalc title="1" colorBtn="#fefefe" handleValue={()=>handleValue("1")}/>
          <BtnCalc title="2" colorBtn="#fefefe" handleValue={()=>handleValue("2")}/>
          <BtnCalc title="3" colorBtn="#fefefe" handleValue={()=>handleValue("3")}/>
          <BtnCalc title="+" colorBtn="#6349fb" textColor="white" handleValue={()=>handleValue("+")}/>
        </View>
        <View style={styles.btnRowContainer}>
          <BtnCalc title="0" colorBtn="#fefefe" groBtn={0.8} handleValue={()=>handleValue("0")}/>
          <BtnCalc title="." colorBtn="#fefefe" handleValue={()=>handleValue(".")}/>
          <BtnCalc title="=" colorBtn="#6349fb" textColor="white" handleValue={()=>handleValue("=")}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eff1f2",
    flexDirection: "column",
  },
  resultContainer: {
    flex: 0.3,
    justifyContent: "flex-end",
  },
  textResultContainer: {
    textAlign: "right",
    fontSize: 80,
    fontWeight: "500",
    marginRight: 20,
    color: "black",
  },
  btnContainer: {
    flex: 0.7,
    justifyContent: "space-between",
    margin: 15,
  },
  btnRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnStyle: {
    height: 80,
    width: 80,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textBtnStyle: {
    color: "black",
    fontSize: 40,
  },
});

export default App;
