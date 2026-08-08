// Script to inject packages data into data.ts
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const packagesData = `
  packages: [
    {
      id: 'solar-battery',
      title: 'Solar Battery',
      items: [
        {
          title: '5kWh',
          subtitle: 'Solar Battery Only',
          image: '/solar_panal1.png',
          panelInfo: 'N/A',
          panelDesc: 'Existing Solar Required',
          batteryInfo: '1 x 5kWh',
          batteryDesc: 'Solar Battery',
          features: [
            '5 kWh/day Battery Add-On',
            '10 Yrs (Battery) Warranty',
            '4-6 years Payback Period'
          ]
        },
        {
          title: '10kWh',
          subtitle: 'Solar Battery Only',
          image: '/solar_panal1.png',
          panelInfo: 'N/A',
          panelDesc: 'Existing Solar Required',
          batteryInfo: '1 x 10kWh',
          batteryDesc: 'Solar Battery',
          features: [
            '10 kWh/day Battery Add-On',
            '10 Yrs (Battery) Warranty',
            '3-5 years Payback Period'
          ]
        },
        {
          title: '15kWh',
          subtitle: 'Solar Battery Only',
          image: '/solar_panal1.png',
          panelInfo: 'N/A',
          panelDesc: 'Existing Solar Required',
          batteryInfo: '1 x 15kWh',
          batteryDesc: 'Solar Battery',
          features: [
            '15 kWh/day Battery Add-On',
            '10 Yrs (Battery) Warranty',
            '3-5 years Payback Period'
          ]
        }
      ]
    },
    {
      id: 'solar-panels-battery',
      title: 'Solar Panels + Solar Battery',
      items: [
        {
          title: '6.6kW',
          subtitle: 'Solar Panels + Solar Battery',
          image: '/solar_panal1.png',
          panelInfo: '14 X 475W',
          panelDesc: 'Tier 1 Solar Panels',
          batteryInfo: '1 X 10kWh',
          batteryDesc: 'Solar Battery',
          features: [
            '10 kWh/day Battery Add-On',
            '25 Yrs (Panel), 10 Yrs (Battery) Warranty',
            '3-5 years Payback Period'
          ]
        },
        {
          title: '10.45kW',
          subtitle: 'Solar Panels + Solar Battery',
          image: '/solar_panal1.png',
          panelInfo: '22 X 475W',
          panelDesc: 'Tier 1 Solar Panels',
          batteryInfo: '1 X 10kWh',
          batteryDesc: 'Solar Battery',
          features: [
            '10 kWh/day Battery Add-On',
            '25 Yrs (Panel), 10 Yrs (Battery) Warranty',
            '3-5 years Payback Period'
          ]
        },
        {
          title: '13.3kW',
          subtitle: 'Solar Panels + Solar Battery',
          image: '/solar_panal1.png',
          panelInfo: '28 X 475W',
          panelDesc: 'Tier 1 Solar Panels',
          batteryInfo: '1 X 10kWh',
          batteryDesc: 'Solar Battery',
          features: [
            '10 kWh/day Battery Add-On',
            '25 Yrs (Panel), 10 Yrs (Battery) Warranty',
            '3-5 years Payback Period'
          ]
        }
      ]
    },
    {
      id: 'residential-solar',
      title: 'Residential Solar',
      items: [
        {
          title: '6.6kW',
          subtitle: 'Residential Solar',
          image: '/solar_panal1.png',
          panelInfo: '14 X 475W',
          panelDesc: 'Tier 1 Solar Panels',
          batteryInfo: 'N/A',
          batteryDesc: 'Battery Optional',
          features: [
            '5kW Smart Inverter Included',
            '25 Yrs (Panel) Warranty',
            '2-4 years Payback Period'
          ]
        },
        {
          title: '10.45kW',
          subtitle: 'Residential Solar',
          image: '/solar_panal1.png',
          panelInfo: '22 X 475W',
          panelDesc: 'Tier 1 Solar Panels',
          batteryInfo: 'N/A',
          batteryDesc: 'Battery Optional',
          features: [
            '8kW Smart Inverter Included',
            '25 Yrs (Panel) Warranty',
            '2-4 years Payback Period'
          ]
        },
        {
          title: '13.3kW',
          subtitle: 'Residential Solar',
          image: '/solar_panal1.png',
          panelInfo: '28 X 475W',
          panelDesc: 'Tier 1 Solar Panels',
          batteryInfo: 'N/A',
          batteryDesc: 'Battery Optional',
          features: [
            '10kW Smart Inverter Included',
            '25 Yrs (Panel) Warranty',
            '2-4 years Payback Period'
          ]
        }
      ]
    }
  ],
`;

// Insert it right after the deals array
content = content.replace(/deals:\s*\[[\s\S]*?\],/, match => match + '\\n' + packagesData);

fs.writeFileSync(filePath, content);
console.log('Successfully injected packages data into data.ts');
