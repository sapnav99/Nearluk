import React from "react";
import styles from "./Recent.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,

  Tooltip,
  Legend,
  Cell,
} from "recharts";


const Recent:React.FC = () => {
  const data = [
    { name: "Category 1", value: 10, color: "#D9D9D9" },
    { name: "Category 2", value: 15, color: "#F07575" },
    { name: "Category 3", value: 18, color: "#A9E89F" },
    { name: "Category 4", value: 8, color: "#509BE0" },
    { name: "Category 5", value: 12, color: "#F07575" },
  ];

  const axisStyle = {
    stroke: "#FDF1E7",
    strokeWidth: 7,
  };
  const RoundedBar = (props:any) => {
    const { x, y, width, height, fill } = props;

    const borderRadius = 10;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={fill}
          rx={borderRadius}
          ry={borderRadius}
        />
      </g>
    );
  };

  return (
    <div style={{ marginTop: 60 }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <h4 className="widget-title" style={{ color: "gray" }}>
              Recent
            </h4>
            <div className={styles.category_inner}>
              <ul className={styles.category_inner_card}>
                <div
                  className={styles.category_card}
                  style={{ backgroundColor: "#FDF1E7" }}
                >
                  <h6>10 Properties</h6>
                  <label>posted in last 30 days</label>
                  <p>20% increase from the last week</p>
                </div>

                <div
                  className={styles.category_card}
                  style={{ backgroundColor: "#EBEAFD" }}
                >
                  <h6>10 Properties</h6>
                  <label>posted in last 30 days</label>
                  <p>20% increase from the last week</p>
                </div>

                <div
                  className={styles.category_card}
                  style={{ backgroundColor: "#E8F7FE" }}
                >
                  <h6>10 Properties</h6>
                  <label>posted in last 30 days</label>
                  <p>20% increase from the last week</p>
                </div>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12">
            <h4 className="widget-title" style={{ color: "gray" }}>
              Recent Contacts
            </h4>
            <div
              className={styles.category_card}
              style={{
                backgroundColor: "#EBEAFD",
                height: 85,
                paddingTop: 15,
                marginBottom: 20,
              }}
            >
              <div className="widget stick-widget">
                <ul className="followers">
                  <li>
                    <figure>
                      <img alt="" src="images/resources/friend-avatar.jpg" />
                    </figure>
                    <div className="friend-meta">
                      <h4>
                        <a title="" href="time-line.html">
                          Kelly Bill
                        </a>
                        <span>Dept colleague</span>
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={styles.category_card}
              style={{
                backgroundColor: "#EBEAFD",
                height: 85,
                paddingTop: 15,
                marginBottom: 20,
              }}
            >
              <div className="widget stick-widget">
                <ul className="followers">
                  <li>
                    <figure>
                      <img alt="" src="images/resources/friend-avatar.jpg" />
                    </figure>
                    <div className="friend-meta">
                      <h4>
                        <a title="" href="time-line.html">
                          Kelly Bill
                        </a>
                        <span>Dept colleague</span>
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={styles.category_card}
              style={{ backgroundColor: "#E8F7FE", height: 85, paddingTop: 15 }}
            >
              <div className="widget stick-widget">
                <ul className="followers">
                  <li>
                    <figure>
                      <img alt="" src="images/resources/friend-avatar.jpg" />
                    </figure>
                    <div className="friend-meta">
                      <h4>
                        <a title="" href="time-line.html">
                          Kelly Bill
                        </a>
                        <span>Dept colleague</span>
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <h4 className="widget-title" style={{ color: "gray" }}>
              Last Month Performance
            </h4>
            <BarChart
              width={250}
              height={300}
              data={data}
              barSize={20}
              // margin={{ top: 20, right: 20 }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis axisLine={axisStyle} tick={false} />
              <YAxis axisLine={axisStyle} tick={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" shape={<RoundedBar />}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
