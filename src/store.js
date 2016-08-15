/**
 * Created by Zeeshan Dawood on 8/14/2016.
 */
export default {
  state: {
    counter: 0
  }
}


/*
 How this is still not good enough.

 Over the period of their internship, Alice and bob write multiple counter displays, reset buttons, and increment buttons in different formats which all update the same shared counter. Life is good.
 Once they go back to college, you have to maintain their code.
 Carol - the new manager comes in and says “I never want the counter to go above 100”
 What do you do now?

 Do you go to all the dozens of components and find out all the places they are updating the counter? That’s frustrating.
 Do you go to the displays and add a filter/formatter there? That’s frustrating too.
 */
