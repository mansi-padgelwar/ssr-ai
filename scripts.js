InFlight.initService(["flightdata/v1"], function (Flightdata) {
  Flightdata.destinationIATA(function (err, media) {
    console.log(media);
  });
});
