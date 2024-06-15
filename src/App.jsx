import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import "./App.css";

import progressData from "./data/progressData.json";
import sourceData from "./data/sourceData.json";
import testData from "./data/testData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export const App = () => {
  return (
    <div className="App">
      <div className="dataCard revenueCard">
        <Line
          data={{
            labels: progressData.map((data) => data.label),
            datasets: [
              {
                label: "Recommended Progress",
                data: progressData.map((data) => data.recommended),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Student Progress",
                data: progressData.map((data) => data.actual),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Student Course Progress",
              },
            },
          }}
        />
      </div>

      <div className="dataCard customerCard">
        <Bar
          data={{
            labels: testData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: testData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Test Scores",
              },
            },
          }}
        />
      </div>

      <div className="dataCard categoryCard">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 1)",
                  "rgba(250, 192, 19, 1)",
                ],
                borderColor: [
                  "rgba(256, 256, 256, 1)",
                  "rgba(256, 256,256, 1)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: " Student Attendance",
              },
            },
          }}
        />
      </div>
    </div>
  );
};
