1. 安装 ng2-charts
npm install ng2-charts --save

2. 还必须引入 chart.js
npm install chart.js --save

3. 主模块中引入
import { ChartsModule } from 'ng2-charts/ng2-charts';
imports: [
   ChartsModule
]
4. 如果使用angular-cli那么如下配置 angular-cli.json
"scripts": [
   "../node_modules/chart.js/dist/Chart.bundle.min.js"
]
有时候需要ng serve 重新启动服务，要不然会报错，坑了好久。

5. 然后就可以使用了参考api文档
http://valor-software.com/ng2-charts/


注意：如果使用systemjs.config.js那么就要配置map和packages
