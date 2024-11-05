import { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import axios from 'axios';
import axiosInstance from '@/Api';


 const data = [
  { id: "Addis Ababa", value: 30 },
  { id: "Afar", value: 2 },
  { id: "Amhara", value: 4 },
  { id: "Oromia", value: 5 },
  { id: "Dire Dawa", value: 7 },
  { id: "Gambella", value: 8 },
  { id: "Harari", value: 6 },
  { id: "Sidama", value: 9 },
  { id: "Somali", value: 7 },
  { id: "Central Ethiopian region", value: 9 },
  { id: "South west 14", value: 7 },
  { id: "South Ethiopia", value: 15 },
  { id: "Benshangul Gumuz", value: 12 },
  { id: "Tigray", value: 7 },
];

const DemographicsInfo = () => {
      const [regionData, setRegionData] = useState([]);

      useEffect(() => {
         axiosInstance.get('/api/register/', {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((res)=>{
            const regionCounts= {}

            res.data.forEach((item)=>{
              const region= item.region
              if(regionCounts[region]){
                regionCounts[region] += 1
              }else{
                regionCounts[region] = 1
              }
            })
            //Format the data to match the data format of the pie chart
            const FormattedData = Object.keys(regionCounts).map((region)=>({
              id: region,
          value: regionCounts[region],
            }));
            setRegionData(FormattedData)

          }) .catch((err)=>{
            console.log('error', err);
          })
      }, []);

  return (
      <div className='h-[75vh]'>
          <ResponsivePie
      data={regionData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      padAngle={0.7}
      activeOuterRadiusOffset={8}
      colors={{ scheme: 'set1' }} // Color scheme for pie chart
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', '0.1']],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextOffset={7}
      arcLinkLabelsTextColor="#060505"
      arcLinkLabelsDiagonalLength={23}
      arcLinkLabelsStraightLength={19}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', '2']],
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: { id: 'Addis Ababa' },
          id: 'dots',
        },
        {
          match: { id: 'Afar' },
          id: 'lines',
        },
        // Add more patterns if needed for other regions
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: { itemTextColor: '#000' },
            },
          ],
        },
      ]}
    />
      </div>
  );
};

export default DemographicsInfo;
