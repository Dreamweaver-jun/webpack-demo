import foo from './module'

foo.sayHello(foo.name).then((value) => {
    console.log(value);
}).catch((msg) => {
    console.error(msg);
});

foo.http('get','package.json',{test:123}).then((response) =>{
    console.log(response);
});

