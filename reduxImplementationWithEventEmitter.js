var events =  require('events');
var eventEmitter = new events.EventEmitter();

var state = {
}
var markDashboardAsFetchingReducer =  function() {
  var newState = Object.assign({}, state, { fetching: true })
  console.log('state after dispatching FETC action', newState)
}

eventEmitter.addListener('FETCHING', markDashboardAsFetchingReducer);

var dispatch = function(action) {
  eventEmitter.emit(action.type)
}
console.log('state before dispatching any action ', state)
var markDashboardAsFetching = function() {
    return  {type: 'FETCHING'};
}


dispatch(markDashboardAsFetching());
