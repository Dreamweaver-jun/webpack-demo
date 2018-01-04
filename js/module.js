layui.use(['layer', 'form'], function(){
    let layer = layui.layer
        ,form = layui.form;

    layer.msg('试一试用layer咯！');
});

export default {
    name : 'zyj',
    sayHello(x){
        return new Promise((resolve,reject) => {
            //reject('出错啦！');                                       //如果这里reject，将不会执行下面的resolve。
            resolve(x+',hello!');
        });
    },
    http(type='GET', url='', data={}, async=true){

        return new Promise((resolve, reject) => {                       //定义一个promise
            type = type.toUpperCase();

            let requestObj;
            if (window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            } else {
                requestObj = new ActiveXObject;
            }

            if (type === 'GET') {
                let dataStr = '';                                        //数据拼接字符串
                Object.keys(data).forEach(key => {
                    dataStr += key + '=' + data[key] + '&';
                });
                dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
                url = url + '?' + dataStr;
                requestObj.open(type, url, async);
                requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                requestObj.send();
            }else if (type === 'POST') {
                requestObj.open(type, url, async);
                requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                requestObj.send(JSON.stringify(data));
            }else {
                reject('error type');
            }

            requestObj.onreadystatechange = () => {
                if (requestObj.readyState === 4) {
                    if (requestObj.status === 200) {
                        let obj = requestObj.response;
                        if (typeof obj !== 'object') {
                            obj = JSON.parse(obj);
                        }
                        resolve(obj);
                    }else {
                        reject(requestObj);
                    }
                }
            }
        })

    }
}