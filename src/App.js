import React from 'react';


class App extends React.Component{
 
  //생성자 : 클래스가 생성 되면서 제일 먼저 실행
 constructor(props){
   super(props);
  console.log("생성자");
 }
  //변하는 데이터 state
  state = {
      count : 0
  };
  // state를 변경할 때마다(즉 setState() 함수를 호출 했을 때) render()함수 재호출 새로운 화면 그림(변경된 state 값만을 재렌더링)
add=()=>{
  this.setState(current =>({
    count : current.count +1
  }))
};
// this.state를 사용하는 것 보다 current param를 받아서 현재의 state 값을 가져오고 변경하는 것을 추천
minus=()=>{
  this.setState(current=>({
    count : current.count -1
  }))
};
//컴포넌트 들이 렌더링 된 후(처음 화면이 렌더링 된 후 )
componentDidMount(){
  console.log("component rendered");
}

//add나 minus 함수로 update된 후(render 함수 실행 후 실행됨) 
componentDidUpdate(){
  console.log("I  just updated");
}

//컴포넌트 죽을때 (ex 다른 페이지로 이동)
componentWillUnmount(){
  console.log("die component");
}
  render() {
    console.log("rendering");
    return <div>
        <h1>The number is :  {this.state.count}</h1>
        {/* this.add()를 사용하지 않는 이유
          즉시 함수를 호출하시 않고 버튼을 클릭할 때만 호출하기 위해서
        */}
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>

    </div>
  }
}



export default App;
