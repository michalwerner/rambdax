import isValid from './isValid'

export default function isInit(){
  Object.defineProperty(
    Object.prototype,
    'is',
    {
      value: function(schema){
        return isValid({
          input: {isProp: this},
          schema : {isProp: schema},
        })
      },
      writable: true,
      configurable: true,
    }
  )
}
