import '../css/style.scss'
import foo from './module'

foo.sayHello(foo.name).then((value) => {
    console.log(value);
}).catch((msg) => {
    console.error(msg);
});