# Movie App 2021
React JS Fundamentals Course(2021)

 ## props 사용 - 프로젝트 
 * 항목이 변하지 않는 list 내용을 보여줄 때 
 *  알림판 - 공지  / 파일 
 *  to-do list
 *  멤버 구성원
 

 ## state
 * 필수적으로 state 를 선언 하지 않고 추가 해도 가능 

## movies api
https://yts.mx/api
=> https://yts-proxy.now.sh/list_movies.json 해당 링크 사용
https://github.com/serranoarevalo/yts-proxy

## deploy page
```bash
npm i gh-pages
```

package.json에 
```	json
"homepage" : "https://qoralswn82.github.io/movie_app_2021/"
```
맨 하단에 추가

```json
"deploy" : "gh-pages -d build",
"predeploy" : "npm run build"
```
script 에 추가
