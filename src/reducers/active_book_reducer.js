//State that is passed here is only the state in the reducer, not the app state
//State=null means that when the argument comes as undefined set it to null
export default function(state = null, action) {
  switch (action.type) {
  	case 'Book_Selected':
  	  return action.payload;
  }
  return state;
}