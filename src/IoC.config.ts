import { Container } from "inversify";
import "reflect-metadata";
import { WeatherDataService } from "./services/Weather-data.service";

const myContainer = new Container();
myContainer.bind(WeatherDataService).toSelf();

export { myContainer }