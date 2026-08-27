import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import test from "node:test";
import { watchFile } from "node:fs";

export default{
    entry: "./src/index.js",

    output: {
        filename: "main.js",
        path:path.resolve(import.meta.dirname,"dist"),
        clean:true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],


    module: {
    
        rules: [
      {
        test: /\.css$/i,
        use:  ["style-loader","css-loader"]
      },
      {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource",
      },
        {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        },]
}
}