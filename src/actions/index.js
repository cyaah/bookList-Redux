export function selectBook(book) {
	//selectBook is an action creator,it needs to return an action 
	//an object with a type property.
	//Every action has to have a type that describes the action
  return {
  	type: 'Book_Selected',
    payload: book 
  };
}