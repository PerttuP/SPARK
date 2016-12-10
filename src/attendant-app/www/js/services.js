angular.module('starter.services', [])

/***************************************************************************************
 * FACTORY
 **************************************************************************************/

.factory("Firebase", function() {
  var config = {
    apiKey: "AIzaSyDhjWe4lzQBToEiVRTp98nTp09xKi7LxEM",
      authDomain: "spark2-150308.firebaseapp.com",
      databaseURL: "https://spark2-150308.firebaseio.com",
      storageBucket: "",
      messagingSenderId: "758338198382"
  };
  return firebase.initializeApp(config);
})

.factory('blePerpheralsService', function() {

  return {
    onError: function(reason) {
      alert("ERROR: " + JSON.stringify(reason));
    }
  }
})

/***************************************************************************************
 * SERVICE CLOUD
 **************************************************************************************/
.service (
  "CloudSrv",
  function($http, $q) {
    return ({
      testRequest: testRequest,
    });

    function testRequest(name) {
      var request = $http({
        method: 'post',
        url: 'https://spark2-150308.appspot-preview.com/api/v1.0/storeParkingEvent',
        data: {
          parkingAreaId: 80,
          registerNumber: name,
          parkingType:"PAID",
          parkingDurationInMinutes:30
        },
        headers: {'content-Type':'application/json'}
      });
      return(request.then(handleSuccess, handleError));
    }

    // Transform the successful response
    function handleError(response) {
      if (!angular.isObject(response.data) ||
        !response.data.message
      ) {
        return ($q.reject("An unknown error occurred."));
      }
      // Otherwise, use expected error message
      return ($q.reject(response.data.message));
    }

    function handleSuccess(response) {
      return (response.data);
    }
  }
)
