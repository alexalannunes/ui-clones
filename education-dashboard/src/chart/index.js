// https://stackoverflow.com/questions/55455050/dashed-circular-bar-with-percentage

import React from "react";
import "./index.css";

class CircularProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { sqSize, strokeWidth, percentage } = this.props;

    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (sqSize - strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - (dashArray * percentage) / 100;

    const circleProps = {
      cx: sqSize / 2,
      cy: sqSize / 2,
      r: radius,
      strokeWidth: `${strokeWidth}px`,
    };

    console.log(this.props);

    return (
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        <circle
          {...circleProps}
          style={{
            strokeDasharray: "10",
            stroke: "var(--gray)",
            fill: "none",
          }}
        />

        <circle
          {...circleProps}
          className="circle-progress"
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            stroke: "var(--dark)",
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />

        <circle
          {...circleProps}
          style={{
            stroke: "var(--light)",
            fill: "none",
            strokeDasharray: 10,
            strokeDashoffset: 10,
            strokeWidth: 50,
          }}
        />
        <text
          x="50%"
          y="50%"
          fontSize={30}
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {percentage}%
        </text>
      </svg>
    );
  }
}

CircularProgressBar.defaultProps = {
  sqSize: 200,
  percentage: 25,
  strokeWidth: 30,
};

export { CircularProgressBar };

class AppChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 75,
    };

    this.handleChangeEvent = this.handleChangeEvent.bind(this);
  }

  handleChangeEvent(event) {
    this.setState({
      percentage: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <CircularProgressBar
          strokeWidth="30"
          sqSize="200"
          percentage={this.state.percentage}
        />
        <div>
          <input
            id="progressInput"
            type="range"
            min="0"
            max="100"
            step="1"
            style={{ width: "100%" }}
            value={this.state.percentage}
            onChange={this.handleChangeEvent}
          />
          {this.state.percentage}
        </div>
      </div>
    );
  }
}

export default AppChart;
