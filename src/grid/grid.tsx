import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn, GridEvent, GridSortChangeEvent } from '@progress/kendo-react-grid';
import weatherdata from '../services/weather-data.json'
import React from 'react';
import { orderBy, SortDescriptor } from '@progress/kendo-data-query';

const availableLocations = weatherdata.slice();
const initialSort: Array<SortDescriptor> = [
  { field: "location", dir: "asc" },
];
interface WeatherData2 {
  location: string;
  temperature: number;
}

function KendoGridExample() {
  const [gridData, setGridData] = React.useState<WeatherData2[]>(
    availableLocations.splice(0, 20)
  );
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
      <h1>Hello KendoReact!</h1>
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
