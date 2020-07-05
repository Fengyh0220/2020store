export const getLocalStorage = (...args) => {
  const storage = {};
  args.forEach(arg => {
    storage[arg] = window.localStorage.getItem(arg) || null;
  });
  return storage;
};

export const setLocalStorage = data => {
  Object.keys(data).forEach(prop => {
    const el = data[prop];
    window.localStorage.setItem(prop, el);
  });
};

export const removeLocalStorage = (...args) => {
  args.forEach(arg => {
    window.localStorage.removeItem(arg);
  });
};
// /**
//  * [countdown 倒计时]
//  * @param  {Object} data          [与name结合赋值]
//  * @param  {Object} vm          [指向当前页面vuecomponent]
//  * @param  {Number} [type=0]      [0返回秒数 1返回时分秒 2指定结束时间返回时分秒 3 返回指定结束时间天时分秒]
//  * @param  {String} [name='obj.time'] [与data结合赋值]
//  * @param  {[any]} [time=60*1000] [new date string 毫秒数]
//  * @param  {[String]} [] [2019-08-08 08:08:08]
//  */
// export const countdown = function({
//   vm,
//   data,
//   type = 0,
//   name = 'time',
//   time = 60 * 1000,
//   now,
//   callback
// }) {
//   vm = vm || data; // data 一般指向this 特殊情况指向具体对象
//   let _DATA = data;
//   let _NAME = name;
//   if(/\./g.test(_NAME)){
//     let arr = _NAME.split('.');
//     arr.map( (val,i) => {
//       if( i >= arr.length - 1){
//         _NAME = val;
//       }else{
//         _DATA = _DATA[val];
//       }
//     });
//   }
//   let timestamp = null;
//   if (typeof time == 'string') { // 2019-08-05 08:08:08
//     timestamp = Date.parse(new Date(time.replace(/-/g, "/")));
//   }
//   if (typeof time == 'object') { //new Date
//     timestamp = Date.parse(time);
//   }
//   if (typeof time == 'number') { //时间戳
//     timestamp = time;
//   }
//   let result = {
//     d: 0,
//     h: 0,
//     m: 0,
//     s: 0
//   };
//   if (type == 2 || type == 3) {
//     now = now ? new Date(now.replace(/-/g, "/")) : new Date();
//     now = Date.parse(now);
//     timestamp = timestamp - now;
//     timestamp <= 0 && (timestamp = 0);
//   }
//   let ds = 24 * 60 * 60 * 1000;
//   let hs = 60 * 60 * 1000;
//   let ms = 60 * 1000;
//   let ss = 1000;

//   let call = () => {
//     if(type == 0){
//       _DATA[_NAME] = timestamp / 1000; //返回秒数
//     }
//     if (type == 3) {
//       result.d = Math.floor(timestamp / ds);
//     }
//     if (type == 3 || type == 2 || type ==1) {
//       result.h = Math.floor((timestamp - result.d * ds) / hs);
//       result.m = Math.floor((timestamp - result.d * ds - result.h * hs) / ms);
//       result.s = Math.floor((timestamp - result.d * ds - result.h * hs - result.m * ms) / ss);
//       Object.keys(result).map((key) => {
//         result[key] = result[key] < 10 ? "0" + Number(result[key]) : result[key];
//       });
//       _DATA[_NAME] = result;
//     }
//     callback && callback({
//       timestamp,
//       ...result
//     });
//   };
//   call();
//   let interval = setInterval(() => {
//     if (timestamp <= 0) {
//       clearInterval(interval);
//       return;
//     }
//     timestamp -= 1000;
//     call();
//   }, 1000);
//   vm.$once && vm.$once('hook:beforeDestroy', () => { clearInterval(interval); }); //离开页面时自动清除
//   return interval;
// };
