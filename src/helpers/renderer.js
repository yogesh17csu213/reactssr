
import React from 'react';
import CustomRoutes from '../client/routes'
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import {Provider} from 'react-redux'

export default function (req,store){
    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req?.path} context={{}}>
                <CustomRoutes />
            </StaticRouter>
        </Provider>
      );
  return (`
        <html>
            <head></head>
            <body>
                <div id="root">
                  ${html}
                </div>
                <script src='bundle.js'></script>
            </body>
        </html>
     `);
}


