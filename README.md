This is a repository for files which were edited during Advanced React.js Livelessons by Charles Crawford. The course teaches how to incorporate React and Redux.

I have created a button that increments a number and the ever-changing number is displayed accordingly. The state is managed through use of the createStore method provided by Redux.

Once the user clicks on the button, it invokes handleChange function to dispatch an action. The action is passed to the dispatch and it invokes a reducer method to increment a number. Once the reducer method is complete, the dispatch function will loop through an array of functions called subscribers.
We passed along a subscriber in componentDidMount called handleChange. The handleChange method will set the state to a new value stemmed from store's getState() method.

Once the cycle finishes, the component re-renders a view using the updated state.
