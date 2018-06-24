// по-умолчанию всё содержимое namespace это - private
namespace Util {
  export function isEmpty(d: any) { // export делает снщность public
    return !d;
  }

  function isUndefined(d: any) {
    return typeof d === 'undefined';
  }
  export const PI = Math.PI;
  const EXP = Math.E;
}
console.log(Util.isEmpty(''));
console.log(Util.isEmpty('str'));
console.log(Util.PI);

const EXP = 'Test';

console.log(Math.E);