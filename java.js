$(document).ready(function(){
const config = {
  apiKey: "AIzaSyCX-OWDvo4s4MlYBmIwGL_ODaQwZMZU7Jc",
  authDomain: "train-schedule-aa.firebaseapp.com",
  databaseURL: "https://train-schedule-aa.firebaseio.com",
  projectId: "train-schedule-aa",
  storageBucket: "train-schedule-aa.appspot.com",
  messagingSenderId: "942347044475",
  appId: "1:942347044475:web:5d1e08b1578c476f5c84de",
  measurementId: "G-N1G68JT433"
};

firebase.initializeApp(config);


var database = firebase.database();

//Initial Values

  var trainName = "";
  var destination = "";
  var trainTime = "";
  var frequency = "";
  //var minutesAway = "";



  //Button Click

  $("#submitBtn").on("click", function(event){
      event.preventDefault();
        alert("New Train Added!");
      trainName = $("#exampleInputTrain1").val().trim();
      destination = $("#exampleInputDestination1").val().trim();
      trainTime = $("#exampleInputTime1").val().trim();
      frequency = $("#exampleInputFrequency1").val().trim();


      database.ref().push({
          trainName: trainName,
          destination: destination,
          trainTime: trainTime,
          frequency: frequency,

      });
  });

  database.ref().on("child_added", function(snapshot) {
      var ss = snapshot.val();

      var newRow =
      $("<tr>").append(
          $("<td>").text(ss.trainName),
          $("<td>").text(ss.destination),
          $("<td>").text(ss.trainTime),
          $("<td>").text(ss.frequency),
          );
        $("#tableRow").append(newRow);
  })
});