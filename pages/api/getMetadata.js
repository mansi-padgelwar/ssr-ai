export default async function handler(req, res) {
  // const response = await fetch(
  //   "http://emu.portalworks.io/inflight/services/metadata/v1/category_media?seat_class=PED&category_id=101"
  // );
  const response = await fetch(
    "http://emu.portalworks.io/inflight/services/flightdata/v1/destination_IATA"
  );

  //   const response = await fetch(
  //     "http://emu.portalworks.io/inflight/services/metadata/v1/media/artist?sch=姚蘇蓉"
  //   );

  // const response = await fetch(
  //   "http://emu.portalworks.io/inflight/services/metadata/v1/categories"
  // );
  //   const response = await fetch(
  //     "http://emu.portalworks.io/inflight/services/metadata/v1/bundles"
  //   );
  // const response = await fetch(
  //   "http://emu.portalworks.io/inflight/services/airport_info/v1/city_name_by_ICAO?icao_code=VOCI&lang=en"
  // );
  // const response = await fetch(
  //   "http://emu.portalworks.io/inflight/services/airport_info/v1/cityNameByICAO?icao_code=VOCI&lang=en"
  // );
  //   const response = await fetch(
  //     "http://emu.portalworks.io/inflight/services/survey/v1/getSurveyDetails"
  //   );
  //   const response = await fetch(
  //     "http://emu.portalworks.io/inflight/services/advertising/v1/get_banner?zone_path=baseball&zone_width=500&zone_height=150"
  //   );

  //   const response = await fetch(
  //     "http://emu.portalworks.io/inflight/services/advertising/v1/get_interstitial?zone_path=baseball&zone_width=500&zone_height=150"
  //   );

  const data = await response.json();

  res.status(200).json(data);
}
