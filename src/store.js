/**
 * Created by Zeeshan Dawood on 8/15/2016.
 */

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    INCREMENT (state) {
      state.counter ++
    }
  }
})

export default store

/*
 Vue’s event handler calls activate. This function written by us calls store.dispatch('INCREMENT').
 Here, INCREMENT is the name of an action. It represents an identifier of “This is the type of change that should be made to the state”. We can pass extra params to the dispatch function as well which contains additional parameters for the action.
 Vue figures out what mutator to call for the dispatch. Right now we just have one, but we can make this more complex, and customize this for larger apps.
 The mutator recieves a copy of the state and updates it. Vue keeps an older copy of the state which can be used for advanced features later.
 When the state is updated, vue automatically updates all components dependent on that aspect of state.
 This makes your code more testable, if you’re into that sort of thing.

 Here’s why this is SO MUCH BETTER than solution 2:

 If a copy of all states are kept during development, the vue developers can potentially build what’s known as a “Time Travelling Debugger”. Aside from sounding from one of the coolest super-hero names, it will allow you to ‘undo’ actions in your app and change the logic and develop a lot faster.
 You can build middleware to work whenever states change. For example, you can build a logger which logs all actions performed by a user. If they find a bug, you can get that log, re-play all those actions and reproduce their bug exactly.
 By forcing you to have all actions in one place, it becomes a nice reference that anyone in your team can use about all the ways your app’s state can be modified.

 */
