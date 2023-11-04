## 개발 주제

- Open AI API 를 이용한 이미지 검색 웹 사이트

## 사이트 기능

- 이미지 검색 및 변환
- 이미지 다운로드
- 검색 카테고리
- 최근 본 이미지 및 카테고리

## 개발 인원

- 박보민 : 기획, 디자인, 개발

## 개발 기간

- 2023.11.4 ~

## 개발 환경

1. 사용 기기
    
    MacBook Pro 16 (2021년 모델)
    
2. 칩
    
    Apple M1 Pro
    
3. 메모리
    
    16GB
    
4. macOs Ventura
    
    version 14.1
    
5. 저장공간
    
    500GB
    
6. Node.js
    
    v18.16.0
    

## 기술 스택

- NEXT.JS : v14.0.1
- react : v18
- react-dom : v18
- typescript : v5
- ESLint : v8
- Styled-Component
- Jotai : v2.5.0

## 상태 관리

### 전역 상태 관리

- Jotai

### API 데이터 관리

- react-query
    - 사용 이유 : jotai 와의 호환성

## 사용 API

- Open AI

[OpenAI Platform](https://platform.openai.com/docs/guides/images)

## 스택 툴

### 라이브러리

- `jotai` : 전역 상태 관리 v2.5.0
    - util
        - `useUpdateAtom` , `useAtomValue` : set, get 만 사용
        - `selectAtom` : atom의 특정 값 get
        - `atomWithStorage` : 로컬&세션 스토리지 사용
    - 라이브러리
        - `jotai-immer` : 부분 변경 v0.2.0
        - `jotai-tanstack-query` : 비동기 상태 관리 v0.7.2
            - `@tanstack/query-core` v5.4.3
- `style-component` : v6.1.0
- `ESLint` v8
    - `eslint-plugin-next` : ESLint Plugin 제공 v14.0.1
    - `eslint-config-prettier` : ESLint 와 Prettier 통합 v9.0.0
    - `lint-staged` , `husky` : git push 전 ESLint 자동화 v15.0.2 v8.0.3

### Plugin

- `Prettier` : 코드 정렬
- `Nextjs snippets` : 함수 자동 생성
- `Color Highlight` : 변수 등 색상
- `Bracket Pair Colorization Toggler` : {} 색상

### 배포 및 관리 툴

- GitHub

## 폴더 구조

```jsx
- .husky
- .next
- node_modules
- public
- src
	ㄴ layout.tsx
	ㄴ app
		ㄴ (pages)
				ㄴ page.tsx
		ㄴ assets
		ㄴ components
		ㄴ store
		ㄴ styles
		ㄴ types
		ㄴ utils
.env
.env.local
.eslintrc.json
.gitignore
.lintstagedrc.js
.prettierrc
next-env.d.ts
next.config.js
package-lock.json
package.json
postcss.config.js
README.md
tailwind.config.ts
tsconfig.json
```

## 도움을 주신 분
