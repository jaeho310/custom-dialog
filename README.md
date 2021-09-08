# custom dialog

dialog창을 쉽게 사용할수 있도록 모듈화 하였습니다.

vuex를 사용하여 중복을 줄였으며 화면이동이 있더라도 전역으로 사용 가능합니다.

## vuex만 사용하는경우
```js
this.$store.commit('dialogManager',{text: "alert용 dialog 입니다."})
```
vuex만 사용하는경우 this.$store.commit으로 상태를 변경시켜 dialog창을 사용합니다.

store/module/dialog에 mutation에 로직을 작성합니다.

<br><br>

## vuex와 pathify를 둘다 사용하는경우
```js
import dialog from '../utils/dialog.js'
dialog.makeDialog({text: "alert용 dialog 입니다."})
```
vuex와 pathify를 둘다 사용한다면 utils/dialog.js와 store/module/dialog2를 사용하며

dialog.makeDialog를 이용하여 alert창을 띄웁니다.

## 실습방법
```
yarn serve를 통해 local에 프론트서버를 올려서 사용합니다.
```