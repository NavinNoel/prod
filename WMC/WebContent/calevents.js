      function formatDate(iDate) {
    	  var formattedDate = iDate.date.toDateString().slice(0,-5) + ', ' 
				    	       + iDate.date.toLocaleTimeString().slice(0,-6) + ' '
				    	       + iDate.date.toLocaleTimeString().slice(-2);
          if (iDate.isDateOnly()) {
        	  formattedDate = iDate.date.toDateString().slice(0,10);
          }
    	  return formattedDate;
      }
      
      function _run() {
        /*
        * Retrieve events with a date query
        */
        
        // Obtain a reference to the 'content' div
        var content = document.getElementById('upcomingevents');
        var noOfDays = 21;
        var maxEvents = 10;
        
        // Create the calendar service object
        var calendarService = new google.gdata.calendar.CalendarService('com.appspot.interactivesampler');
        
        // The "public/full" feed is used to retrieve events from the named public
        // calendar with full projection.
        var feedUri = 'https://www.google.com/calendar/feeds/wmc18052%40gmail.com/public/basic';
        var feedUri = 'http://www.google.com/calendar/feeds/wmc18052@gmail.com/public/basic?alt=json-in-script';
        
        // Create a CalendarEventQuery, and specify that this query is
        // applied toward the "private/full" feed
        var query = new google.gdata.calendar.CalendarEventQuery(feedUri);
        query.setOrderBy('starttime'); 
        //query.setFutureEvents(false); 
        query.setSortOrder('ascending'); 
        query.setSingleEvents(true);
        query.setMaxResults(maxEvents);
        
        // Create and set the minimum and maximum start time for the date query
        var sD = new Date();
        var startMin = new google.gdata.DateTime(sD, true);
        var eD = new Date();
        var startMax = new google.gdata.DateTime(eD, true);
        startMax.date.setTime((startMax.date.getTime() + 1000 * 60 * 60 *24 * noOfDays));
        query.setMinimumStartTime(startMin);
        query.setMaximumStartTime(startMax);
        //query.setRecurrenceExpansionStart(startMin);
        //query.setRecurrenceExpansionEnd(startMax);
        
        // The callback that will be called when getEventsFeed() returns feed data
        var callback = function(root) {
        
          // Obtain the array of matched CalendarEventEntry
          var eventEntries = root.feed.getEntries();
        
          // Print the query parameters
          var fromDate = google.gdata.DateTime.toIso8601(startMin);
          var toDate = google.gdata.DateTime.toIso8601(startMax);
          var html = ''; // = '<p><strong>Date query:</strong> ' + fromDate + ' - ' + toDate + '</p>';
        
          // If there is matches for the date query
          if (eventEntries.length > 0) {
            html += '<p>';
            for (var i = 0; i < eventEntries.length; i++) {
              var event = eventEntries[i];
              
              var eventStart = google.gdata.DateTime.fromIso8601(event.getTimes()[0].startTime);
              var eventEnd = google.gdata.DateTime.fromIso8601(event.getTimes()[0].endTime);
              if (eventEnd.isDateOnly()) {
                  eventEnd.date.setTime(eventEnd.date.valueOf() - (1000 * 60 * 60 * 1)); // Offset 1 day
              }
              
              if (eventEnd.date.valueOf() - eventStart.date.valueOf() >= 1000 * 60 * 60 * 24) {
                  var eventTime = eventStart.date.toDateString() + ' - ' + eventEnd.date.toDateString();
              }
              else {
            	  var timeStr = eventStart.date.getHours() + ':' + eventStart.date.getMinutes();
                  //var eventTime = eventStart.date.toDateString() + ', ' + eventStart.date.toLocaleTimeString();
                  var eventTime = formatDate(eventStart);
              }
              
              // Print the event title of the matches
              if (event.getLocations()[0].valueString)
	              var locationString = ' at ' + event.getLocations()[0].valueString;
              else
	              var locationString = '';
              
              html += eventTime + ', ' + event.getTitle().getText() + locationString + '</br>';
            }
            html += '</p>';
          } else {
            // No match is found for the date query
            html += '<p>No events planned.</p>';
          }
          
          // Output HTML and clear 'Loading...' text
          content.innerHTML = html;
        };
        
        // Error handler to be invoked when getEventsFeed() produces an error
        var handleError = function(error) {
          content.innerHTML = '<pre>' + error + '</pre>';
        };
        
        // Submit the request using the calendar service object. Notice the CalendarEventQuery
        // object is passed in place of the feed URI
        calendarService.getEventsFeed(query, callback, handleError);
        
      }
