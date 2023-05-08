export type Weather = {
    id: number;
    main: string;
};

export type WeatherResponse = {
    current_time: string;
    date: string;
    day_length: string;
    location: {
        country: string;
        state: string;
        city: string;
        latitude: number;
        longitude: number;
    };
    moon_altitude: number;
    moon_azimuth: number;
    moon_distance: number;
    moon_parallactic_angle: number;
    moon_status: string;
    moonrise: string;
    moonset: string;
    solar_noon: string;
    sun_altitude: number;
    sun_azimuth: number;
    sun_distance: number;
    sun_status: string;
    sunrise: string;
    sunset: string;
};
