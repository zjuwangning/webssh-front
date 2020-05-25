/**
 * Created by Reid on 2020-04-14
 *
 */
// 后台双机热备
const Host1 = "221.231.13.230:9912"               // 公网IP
// const Host1 = "172.16.3.112:8888"               // 本地测试

const Host2 = "172.16.3.111:8888"

let host = Host1

// websocket服务器地址
export const ws_host = "ws://221.231.13.230:9912/ws/chat/"        // 公网IP
// export const ws_host = "ws://172.16.3.112:8888/ws/chat/"        // 本地测试

// 视频流服务器地址
export const root = 'http://221.231.13.230:10081'
// export const root = 'http://172.16.3.115:8080'
export const ws_root = '221.231.13.230:10081'
// export const ws_root = '172.16.3.115:8080'

export const getRootUrl = () => "http://"+host

export const getHost = () => host

// 切换后台地址
export const switchHost = post_host => {
    if(post_host === host){
        host = host === Host1 ? Host2 : Host1
        return true
    }
    return false
}
