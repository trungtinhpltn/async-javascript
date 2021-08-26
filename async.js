// console.log('Công việc 1');
// console.log('Công việc 2');


// const networkRequest = () => {
//   setTimeout(() => {
//     console.log('Công việc');
//   }, 1);
// };

// console.log('Bắt đầu');
// networkRequest();
// console.log('Kết thúc');


// setTimeout( () => {
//   console.log(1);
//   setTimeout( () => {
//     console.log(2);
//     setTimeout( () => {
//       console.log(3);
//       setTimeout( () => {
//         console.log(4);
//         setTimeout( () => {
//           console.log(5);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);


// let promise = new Promise((resolve, reject) => {
//   // Thành công: resolve()
//   // resolve([
//   //   {
//   //     id: 1,
//   //     name: 'JavaScript',
//   //   }
//   // ])

  
//   // Thất bại: reject()
//   reject('Có lỗi!');
// });
// promise
//   .then( (res) => {
//     console.log(res)
//   })
//   .catch( (err) => {
//     console.log(err);
//   })
//   .finally( ()=> {
//     console.log('Luôn được thực hiện khi resolve hoặc reject được gọi');
//   });



// let promise1 = new Promise((resolve, reject) => {
//   setTimeout( ()=> {
//     resolve(1);
//   } ,2000);
//   // Thất bại: reject()
//   //reject('Có lỗi!');
// });
// promise1
//   .then( (data) => {
//     console.log(data);
//   })
//   .then( (data) => {
//     console.log(data)
//   })
//   .then( (data) => {
//     console.log(data)
//   })
//   .then( (data) => {
//     console.log(data)
//   })
//   .catch( (err) => {
//     console.log(err);
//   })
//   .finally( () => {
//     console.log('Done.')
//   })


// function sleep(ms) {
//   return new Promise( (resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// sleep(1000)
//   .then( ()=> {
//     console.log(1)
//     return sleep(1000);
//   })
//   .then( ()=> {
//     console.log(2)
//     return sleep(1000);
//   })
//   .then( ()=> {
//     console.log(3)
//     return sleep(1000);
//   })
//   .then( ()=> {
//     console.log(4);
//     return sleep(1000);
//   })
//   .then( ()=> {
//     console.log(5);
//   })



// let promise2 = new Promise( (resolve) => {
//   setTimeout( () => {
//     resolve([1,2]);
//   }, 2000);
// })
// let promise3 = new Promise( (resolve) => {
//   setTimeout( () => {
//     resolve([2,3,4]);
//   }, 5000);
// })
// Promise.all([promise2, promise3])
//   .then( (result) => {
//     console.log(result);
//   })



// let promise_1 = Promise.resolve(1);
// let promise_2 = Promise.resolve(2);
// let promise_3 = new Promise((resolve, reject) => {
//     resolve(3);
// });
// let promise = Promise.race([promise_1, promise_2, promise_3]);
// promise.then((value) => {
//     console.log(value); // 1
// });



// console.log('Script start');
// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);
// new Promise((resolve, reject) => {
//     resolve('Promise resolved');
//   }).then(res => console.log(res))
//     .catch(err => console.log(err));
// console.log('Script End');


// function printNumber(number){
//   return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//        console.log(number)
//        resolve()
//     },1000);
//   })
// }
// async function printAll(){
//   await printNumber(1);
//   await printNumber(2);
//   await printNumber(4);
//   await printNumber(5);
// }
// printAll();



// async function abc() {
//   console.log(1);
//   await Promise.resolve(5).then( x => console.log(x));
//   console.log(2);
// }
// abc();


// function abc2() {
//   console.log(1);
//   Promise.resolve(5)
//     .then( x => console.log(x))
//     .then( ()=> console.log(2));
// }

// abc2();



// const fetchData = async () => {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
//    // console.log(res);
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchData();


// async function test1() {
//   var start = performance.now();
//   const res1 = await new Promise( resolve => {
//     setTimeout(() => {
//       resolve(3);
//     }, 3000);
//   });
//   console.log(res1);
//   const res2 = await new Promise( resolve => {
//     setTimeout(() => {
//       resolve(5);
//     }, 5000);
//   });
//   console.log(res2);
//   let stopTime = performance.now();
//   console.log(`Thời gian thực hiện ${stopTime - start} milliseconds`);
// }
// test1();

// async function test2() {
//   var start = performance.now();
//   const p1 = new Promise( resolve => {
//     setTimeout(() => {
//       resolve(3);
//     }, 3000);
//   });
//   const p2= new Promise( resolve => {
//     setTimeout(() => {
//       resolve(5);
//     }, 5000);
//   });
//   const res = await Promise.all([p1,p2]);
//   console.log(res);
//   let stopTime = performance.now();
//   console.log(`Thời gian thực hiện ${stopTime - start} milliseconds`);
// }
// test2();