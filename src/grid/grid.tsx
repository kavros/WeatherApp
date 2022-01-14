import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn, GridEvent, GridSortChangeEvent } from '@progress/kendo-react-grid';
import React, { useEffect } from 'react';
import { orderBy, SortDescriptor } from '@progress/kendo-data-query';
import { IWeatherDataService } from '../interfaces/Weather-data.service.interface';
import { WeatherDataService } from '../services/Weather-data.service';
import { myContainer } from '../IoC.config';
import { WeatherData } from '../interfaces/Weather-data.dto';

function KendoGridExample() {
    
  let availableLocations: WeatherData[] = [];  
  const initialSort: Array<SortDescriptor> = [
    { field: "location", dir: "asc" },
  ];
  let [gridData, setGridData] = React.useState<WeatherData[]>(
    availableLocations.splice(0, 20)
  );
  
  useEffect(() => {    
    let weatherService: IWeatherDataService = myContainer.get(WeatherDataService);
    weatherService.GetWeatherDataFromApi().then(x => setGridData( x));
  }, []);
  const [sort, setSort] = React.useState(initialSort);

  const scrollHandler = (event: GridEvent) => {
  const e = event.nativeEvent;
  if (
    e.target.scrollTop + 10 >=
    e.target.scrollHeight - e.target.clientHeight
  ) {
      const moreData = availableLocations.splice(0, 10);
      if (moreData.length > 0) {
        setGridData((oldData) => oldData.concat(moreData));
      }
    }
  };
  return (
    
    <div className="KendoGridExample">
      <Grid
          style={{ height: "400px" }}
          data={orderBy(gridData, sort)}
          onScroll={scrollHandler}
          sortable={true}
          sort={sort}
          onSortChange={(e: GridSortChangeEvent) => {
            setSort(e.sort);
          }}
          fixedScroll={true}>
        <GridColumn field="location" />
        <GridColumn field="temperature" />
      </Grid>
    </div>
  );
}

export default KendoGridExample;
