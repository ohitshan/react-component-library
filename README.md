라이브러리
rollup-plugin-babel: rollup에서 babel 을 사용 할 수 있게 해주는 플러그인입니다.
rollup-plugin-node-resolve: node_modules에서 써드파티 모듈을 사용하는 용도로 사용하며, js 이외의 확장자 (ts, tsx) 파일을 불러오기 위해서도 이 플러그인을 필요로 합니다.
rollup-plugin-peer-deps-external: peerDependency로 설치된 라이브러리의 코드가 번들링된 결과에 포함되지 않고, import 구문으로 불러와서 사용할 수 있게 만들어줍니다.
rollup-plugin-commonjs: CommonJS 형태로 이루어진 모듈의 코드를 ES6로 변환하여 결과물에 포함될 수 있게 해줍니다. (현재 우리 프로젝트에서는 필수로 적용해야하는 플러그인은 아닙니다)
@svgr/rollup: SVG를 컴포넌트 형태로 불러와서 사용 할 수 있게 해줍니다.
rollup-plugin-url: data-URI형태로 svg, png, jpg 파일 등을 불러와서 사용 할 수 있게 해줍니다. @svgr/rollup 플러그인을 사용 할 때, rollup-plugin-url과 함께 사용을 해야만 import { ReactComponent as icon } from './icon.svg' 형태의 코드를 사용 할 수 있습니다.
