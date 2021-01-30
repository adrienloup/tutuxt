export default function(name, value, type, isVModel, emitToParent) {

  name = typeof name === 'string' ? name : 'value';
  value = typeof value !== 'undefined' ? value : false;
  type = typeof type !== 'undefined' ? type : Boolean;
  isVModel = typeof isVModel !== 'undefined' ? !!isVModel : true;
  emitToParent = typeof emitToParent !== 'undefined' ? emitToParent : false;

  const nameSync = name + '_sync';
  const nameInner = name + '_inner';

  return {
    props: {
      [name]: {
        type: type,
        default: value
      }
    },
    data() {
      return {
        [nameInner]: typeof value === 'function' ? value() : value,
      }
    },
    mounted() {
      this[nameInner] = this[name];
    },
    watch: {
      [name]() {
        this[nameInner] = this[name];
      }
    },
    computed: {
      [nameSync]: {
        get() {
          return this[nameInner];
        },
        set(value) {
          this[nameInner] = value;
          this.$emit(isVModel ? 'input' : 'update:'+name, value);
          if (emitToParent) {
            this.$parent.$emit(isVModel ? 'inputParent' : 'updateParent:'+name, value);
          }
        }
      }
    }
  }
};
