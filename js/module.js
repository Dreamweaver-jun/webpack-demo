export default {
    name : 'zyj',
    sayHello(x){
        return new Promise((resolve,reject) => {
            reject('出错啦！');           //如果这里reject，将不会执行下面的resolve。
            resolve(x+',hello!');
        });
    }
}