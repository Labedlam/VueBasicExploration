/**
 * Created by Zeeshan Dawood on 8/14/2016.
 */
var store = {

  state: {
    counter: 0
  },
  increment: function () {
    console.log('im the increment function being hit', store.state.counter)
    if (store.state.counter < 100) {
      store.state.counter += 1
    }
  },
  reset: function () {
    store.state.counter = 0
  }
}
export default store
/* I'm having some difficulty figuring out how
 */
