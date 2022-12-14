## udemy React 강의 섹션 8 실습

![](https://velog.velcdn.com/images/chaehe_3210/post/6028ec48-5e0e-4200-b27f-e49dd9a2753a/image.gif)

혼자 코드를 작성해보지 않으면 리액트를 영원히 내 힘으로 못 쓸 것 같아서
이전 연습 코드들만 조금씩 참고해 혼자 만들어보았다.

### 목표

- 스타일링은 모두 css 모듈을 사용해볼 것
- 컴포지션 컴포넌트 응용해볼 것
- 사용자 이름과 나이를 입력하면 인풋 안의 값이 초기화 되고 목록이 등장할 것
- 유효하지 않은 값이 입력 됐을 때는 모달이 뜨고, 입력 유형에 따라 모달 메세지가 각자 다를 것
- 모달의 배경을 누르거나, 모달 안의 닫기 버튼을 누르면 모달이 사라질 것

<br/>

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

그렇게 고민하다 보니 **애초에 스테이트를 쓸 필요가 없음을 깨달았다.**

```js
<ul className={userData.length === 0 ? styles.hide : ""}>{dataList}</ul>
// userData 는 부모 컴포넌트에서 받아온 데이터를 가진 배열이다
```

데이터 배열의 길이가 0이면 li가 하나도 없다는 뜻이니 삼항연산자로 길이가 0이면 ul을 숨기고, 아닐 때는 ul을 보이게 처리하면 끝이었다!

<br/>

#### 닫기 버튼을 누르면 모달이 없어지는 기능

[Modal](./src/component/Modal/Modal.jsx) 컴포넌트에서 버튼을 누르면 모달이 닫히는 기능을 구현하지 못하고 있다...

현재 배경을 누르면 모달이 사라지게 하는 기능은

```js
if (e.currentTarget !== e.target) {
  e.preventDefault();
} else if (e.currentTarget === e.target) {
  stateHandler(false);
}
```

모달 컴포넌트 전체에 온클릭 이벤트를 걸어서, `e.currentTarget`과 `e.target` 이 같을 때는 모달을 닫고, 다를 때는 이벤트를 막아서 모달창은 이벤트에서 제외 시켰다.

그런데 여기서 버튼을 눌러서 모달창이 꺼지는 기능을 못 구현하고 있다. 버튼을 눌러도 아무 반응이 없는데 어떻게 처리해야 되는지 아직 가늠이 안된다ㅠㅠ

+) 원하는 방식대로의 해결방법은 결국 못 찾고 해결은 했다..

```js
const modalCloseBtn = (e) => {
  console.log(e.target);
  stateHandler(false);
};

return (
  <div className={styles.modal} onClick={clickHandler}>
    <Box>
      <div className={styles.title}>
        <h3>Invalid Input</h3>
      </div>
      <div className={styles.cont}>
        {type === "invalidNum" ? (
          <p>유효한 값이 아닙니다</p>
        ) : (
          <p>값을 입력해주세요.</p>
        )}
        <div onClick={modalCloseBtn}>
          <Button>Okay</Button>
        </div>
      </div>
    </Box>
  </div>
);
```

결국 이벤트 함수를 하나 더 붙여서 해결하긴 했다. 처음엔 이벤트 함수를 붙여도 버튼을 인식을 못하길래 `Button` 컴포넌트를 div로 한 번 더 감싸봤더니 인식이 된다.

어찌저찌 원하던 기능 자체는 다 구현을 해냈으니 이제 솔루션 강의 보러 간다!
