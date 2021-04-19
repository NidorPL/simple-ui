import * as Location from "expo-location";

export const services = {
  getLocation: async (
    locationPermissionGranted,
    setLocationPermissionGranted
  ) => {
    if (locationPermissionGranted === null) {
      let { status } = await Location.requestPermissionsAsync();

      if (status === "granted") {
        setLocationPermissionGranted(true);
      } else {
        setLocationPermissionGranted(false);
      }
    }

    if (locationPermissionGranted) {
      try {
        let { coords } = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });
        location = {
          ...location,
          latitude: coords.latitude,
          longitude: coords.longitude,
        };

        return {
          latitude: coords.latitude,
          longitude: coords.longitude,
        };
      } catch (err) {
        console.log("Location could not be send" + err.message);
      }
    }

    return {};
  },
};
