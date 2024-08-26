/**
 * this is a pm2 starter config file
 * @type {{apps: [{name: string, port: string, exec_mode: string, watch: boolean, instances: string, script: string}]}}
 */

module.exports = {
    apps: [
        {
            name: 'AIproject',
            // port: '3010',
            port: '3000',
            exec_mode: 'cluster',
            //watch: true,
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
