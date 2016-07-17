/**
 * Created by zuiidea on 16/7/18.
 */

var env = require('./env');

var config = {
    redis: {
        port: 6379
    },
    // session
    session: {
        name: 'tdtoken',
        secret: '123456',
        cookie_time: 86400000
    }
};

if (env == 'development') {
    // 端口
    config.web_port = 6000;

    // redis
    config.redis.host = '127.0.0.1';
    config.redis.passwd = '';

    // DB
    config.db = {
        name: 'zuiidea',
        host: 'localhost',
        user: 'root',
        passwd: 'root',
        port: 3306
    };
} else if (env == 'production') {
    config.web_port = 6000;

    config.redis.host = '127.0.0.1';
    config.redis.passwd = '';

    config.db = {
        name: 'zuiidea',
        host: 'localhost',
        user: 'root',
        passwd: 'root',
        port: 3306
    };
}

module.exports = config;
