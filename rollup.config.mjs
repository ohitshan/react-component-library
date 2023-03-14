import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import packageJson from "./package.json" assert { type: "json" };
import { babel } from "@rollup/plugin-babel";
import image from "@rollup/plugin-image";

export default [
  {
    input: "src/index.ts",
    output: [
      { file: packageJson.main, format: "cjs", sourcemap: true },
      { file: packageJson.module, format: "esm", sourcemap: true },
    ],
    external: [/@babel\/runtime/, "react"],
    plugins: [
      svgr(),
      url(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      peerDepsExternal(),
      babel({
        babelHelpers: "runtime",
        plugins: ["@babel/plugin-transform-runtime"],
      }),
      image(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/, "react", "react-dom", "styled-components"],
  },
];
