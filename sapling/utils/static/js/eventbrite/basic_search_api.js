/*
    Eventbrite Examples - event_search

    http://developer.eventbrite.com/doc/events/event_search/

    If you copy this code, please set your own API Key in the example below.
    You can request one here: http://www.eventbrite.com/api/key
*/

Eventbrite({'app_key': "P47XBRPQTVS7YF64Z5"}, function(eb){
    
    // define a few parameters to pass to the API
    // Options are listed here: http://developer.eventbrite.com/doc/events/event_search/
    var options = {
        'city'   : "Oakland"
       ,'region' : "CA"
       ,'sort_by': "date"
       ,'max'    : "50"
    };
    
    // provide a callback to display the response data:
    eb.event_search( options, function( response ){
        $('.event_list').html(eb.utils.eventList( response, eb.utils.eventListRow ));
    });
});
