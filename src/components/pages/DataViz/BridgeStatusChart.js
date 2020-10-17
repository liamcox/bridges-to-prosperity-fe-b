import React, { useState, useContext } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';

const BridgeStatusChart = () => {
  const { bridgeData } = useContext(BridgesContext);

  let complete = 0;
  let rejected = 0;
  let confirmed = 0;
  let identified = 0;
  let prospecting = 0;
  let underConstruction = 0;

  bridgeData &&
    bridgeData.forEach(bridge => {
      // eslint-disable-next-line default-case
      switch (bridge.project_stage) {
        case 'Complete':
          complete += 1;
          break;
        case 'Rejected':
          rejected += 1;
          break;
        case 'Confirmed':
          confirmed += 1;
          break;
        case 'Identified':
          identified += 1;
          break;
        case 'Prospecting':
          prospecting += 1;
          break;
        case 'Under Construction':
          underConstruction += 1;
          break;
      }
    });
  console.log(`copmplete: ${complete}`);
  console.log(`rejected: ${rejected}`);
  console.log(`conformed: ${confirmed}`);
  console.log(`identified: ${identified}`);
  console.log(`prospecting: ${prospecting}`);
  console.log(`Under Construction: ${underConstruction}`);
  console.log(`totla ${bridgeData && bridgeData.length}`);

  const barChar = bridgeData ? (
    <Bar
      data={{
        labels: [
          'Complete',
          'Rejected',
          'Comfirmed',
          'Identified',
          'Prospecting',
          'Under Construction',
        ],
        datasets: [
          {
            label: 'Bridge',
            backgroundColor: [
              'green',
              'red',
              'purple',
              'orange',
              'blue',
              'gray',
            ],
            data: [
              complete,
              rejected,
              confirmed,
              identified,
              prospecting,
              underConstruction,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: 'All Bridges' },
      }}
      width="30%"
      height="30%"
    />
  ) : null;
  const doughnutChar = bridgeData ? (
    <Doughnut
      data={{
        labels: [
          'Complete',
          'Rejected',
          'Comfirmed',
          'Identified',
          'Prospecting',
          'Under Construction',
        ],
        datasets: [
          {
            label: 'Bridge',
            backgroundColor: [
              'green',
              'red',
              'purple',
              'orange',
              'blue',
              'gray',
            ],
            data: [
              complete,
              rejected,
              confirmed,
              identified,
              prospecting,
              underConstruction,
            ],
          },
        ],
      }}
      options={{
        title: { display: true, text: 'All Bridges' },
        cutoutPercentage: 80,
      }}
      width="30%"
      height="30%"
    />
  ) : null;
  return (
    <div className="main">
      <h2>Data Visiualization</h2>
      <div className="chartContainer">
        <div className="barChart">{barChar}</div>
        <div className="doughnutChart">{doughnutChar}</div>
      </div>
    </div>
  );
};

export default BridgeStatusChart;