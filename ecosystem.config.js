module.exports = {
    apps : [{
        'name': 'Yffii Swap Interface',
        'script': 'index.js',
        'watch': false,
        'instances': 1
    }],

    deploy : {
        production : {
            key  : '/Users/pallavi/.ssh/yffii-exchange.pem',
            user : 'ubuntu',
            host : '13.210.188.137',
            ref  : 'origin/main',
            repo : 'git@github.com:w3villa/yffii-swap-interface.git',
            path : '/home/ubuntu/yffii-swap-interface',
            'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production && npm run build && pm2 serve yffii-swap-interface/current/build 3002 --name "yffii-swap-serve" --spa',
        }
    }
};
