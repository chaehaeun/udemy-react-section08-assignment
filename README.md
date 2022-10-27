## udemy React 강의 섹션 8 실습

혼자 코드를 작성해보지 않으면 리액트를 영원히 내 힘으로 못 쓸 것 같아서
이전 연습 코드들만 조금씩 참고해 혼자 만들어보았다.

### 어려웠던 것

#### ul 동적으로 보이게 하는 기능

[SubmitResult](./src/component/SubmitResult/SubmitResult.jsx) 컴포넌트에서 li의 값이 없을 때는 ul을 숨기고, li에 값이 매핑돼서 동적 생성될 때 ul이 다시 등장하게 하는 코드를 구현해야 됐는데

```js
<ul className={isExist ? "" : styles.hide}>{dataList}</ul>
// isExist는 초기값 true로 설정되어있다.
```

처음엔 별 생각 없이 스테이트에 true, false 값을 저장해놓고 true일 땐 ul이 보이게,
false일 때는 hide 클래스를 써서 숨기는 식으로 구현했다.

그런데 생각해보니 이런 식으로 쓰면 li가 생성될 때를 감지해서 스테이트 값을 false로 바꾸어줘야 되는데 어디에 무엇을 써야 구현이 되는지 모르겠는 것이다.

그렇게 고민하다 보니 애초에 스테이트를 쓸 필요가 없음을 깨달았다.

```js
<ul className={userData.length === 0 ? styles.hide : ""}>{dataList}</ul>
// userData 는 부모 컴포넌트에서 받아온 데이터를 가진 배열이다
```

데이터 배열의 길이가 0이면 li가 하나도 없다는 뜻이니 삼항연산자로 길이가 0이면 ul을 숨기고, 아닐 때는 ul을 보이게 처리하면 끝이었다!

### 남아있는 것

- add 버튼을 눌렀을 때 input의 value가 비어있으면 submit을 막고 모달이 등장하는 기능
- age의 value가 음수일 때 submit을 막고 모달이 등장하는 기능(이때 모달 안의 글은 상황에 따라 달라야 된다.)
- 배경을 누르거나, 버튼을 누르면 모달이 닫히는 기능
