import React, { useState } from "react";
import "./postproperty.css";
// import Chip from "../../components/Chip/Chip"
import { Steps } from "antd";
import PostPropertyOne from "./PostPropertyOne";
import PostPropertyTwo from "./PostPropertyTwo";
import PostPropertyThree from "./PostPropertyThree";

const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];

const PostProperty: React.FC = () => {
  // const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  // const [stepOne, setStepOne] = useState(true);
  // const [stepTwo, setStepTwo] = useState(false);

  // const next = () => {
  //   setCurrent(current + 1);
  //   setStepOne(false);
  //   setStepTwo(true);
  // };

  // const prev = () => {
  //   setCurrent(current - 1);
  //   setStepOne(true);
  //   setStepTwo(false);
  // };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <section>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div className="col-lg-3">
                  <aside className="sidebar static left">
                    <div className="widget whitish low-opacity">
                      <img src="images/time-clock.png" alt="time clock" />
                      <div
                        className="bg-image"
                        style={{
                          backgroundImage: "url(images/resources/time-bg.jpg)",
                        }}
                      />
                      <div className="date-time">
                        <div className="realtime">
                          <span id="hours">00</span>
                          <span id="point">:</span>
                          <span id="min">00</span>
                        </div>
                        <span id="date" />
                      </div>
                    </div>
                    <div className="widget">
                      <h4 className="widget-title">Complete Your Profile</h4>
                      <span>Your Profile is missing followings!</span>
                      {/* <div
                        data-progress="tip"
                        className="progress__outer"
                        data-value="0.67"
                      >
                        <div className="progress__inner">82%</div>
                      </div> */}
                      <ul className="prof-complete">
                        <li>
                          <i className="icofont-plus-square" />{" "}
                          <a href="#" title="">
                            Upload Your Picture
                          </a>
                          <em>10%</em>
                        </li>
                        <li>
                          <i className="icofont-plus-square" />{" "}
                          <a href="#" title="">
                            Your University?
                          </a>
                          <em>20%</em>
                        </li>
                        <li>
                          <i className="icofont-plus-square" />{" "}
                          <a href="#" title="">
                            Add Payment Method
                          </a>
                          <em>20%</em>
                        </li>
                      </ul>
                    </div>
                    {/* complete profile widget */}
                    <div className="advertisment-box">
                      <h4 className="">
                        <i className="icofont-info-circle" /> advertisment
                      </h4>
                      <figure>
                        <a href="#" title="Advertisment">
                          <img src="images/resources/ad-widget2.gif" alt="" />
                        </a>
                      </figure>
                    </div>
                    {/* adversment widget */}
                    <div className="widget">
                      <h4 className="widget-title">
                        <i className="icofont-flame-torch" /> Popular Courses
                      </h4>
                      <ul className="premium-course">
                        <li>
                          <figure>
                            <img src="images/resources/course-5.jpg" alt="" />
                            <span className="tag">Free</span>
                          </figure>
                          <div className="vid-course">
                            <h5>
                              <a href="course-detail.html" title="">
                                Wordpress Online video course
                              </a>
                            </h5>
                            <ins className="price">$19/M</ins>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img src="images/resources/course-3.jpg" alt="" />
                            <span className="tag">Premium</span>
                          </figure>
                          <div className="vid-course">
                            <h5>
                              <a href="course-detail.html" title="">
                                Node JS Online video course
                              </a>
                            </h5>
                            <ins className="price">$29/M</ins>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* popular courses */}
                    <div className="widget">
                      <h4 className="widget-title">
                        Recent Blogs{" "}
                        <a className="see-all" href="#" title="">
                          See All
                        </a>
                      </h4>
                      <ul className="recent-links">
                        <li>
                          <figure>
                            <img
                              alt=""
                              src="images/resources/recentlink-1.jpg"
                            />
                          </figure>
                          <div className="re-links-meta">
                            <h6>
                              <a title="" href="#">
                                Moira's fade reach much farther...
                              </a>
                            </h6>
                            <span>2 weeks ago </span>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img
                              alt=""
                              src="images/resources/recentlink-2.jpg"
                            />
                          </figure>
                          <div className="re-links-meta">
                            <h6>
                              <a title="" href="#">
                                Daniel asks The voice of doomfist...
                              </a>
                            </h6>
                            <span>3 months ago </span>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img
                              alt=""
                              src="images/resources/recentlink-3.jpg"
                            />
                          </figure>
                          <div className="re-links-meta">
                            <h6>
                              <a title="" href="#">
                                The socimo over watch scandals.
                              </a>
                            </h6>
                            <span>1 day before</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* recent blog */}
                    <div className="widget">
                      <h4 className="widget-title">
                        Your profile has a new Experience section
                      </h4>
                      <p>
                        Showcase your professional experience and education to
                        help potential employers and collaborators find and
                        contact you about career opportunities.
                      </p>
                      <a
                        className="main-btn"
                        href="profile.html"
                        title=""
                        data-ripple
                      >
                        view profile
                      </a>
                    </div>
                    {/* your profile */}
                    <div className="widget web-links stick-widget">
                      <h4 className="widget-title">
                        Useful Links{" "}
                        <a title="" href="#" className="see-all">
                          See All
                        </a>
                      </h4>
                      <ul>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            about
                          </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            career
                          </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            advertise
                          </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            socimo Apps
                          </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            socimo Blog
                          </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            Help
                          </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            socimo Gifts
                          </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            content policy
                          </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            User Policy
                          </a>
                        </li>
                      </ul>
                      <p>© Socimo 2020. All Rights Reserved.</p>
                    </div>
                    {/* links */}
                  </aside>
                </div>
                {/* time part */}
                <div className="col-lg-6">
                  <Steps current={current} items={items} />
                  {current === 0 && (
                    <PostPropertyOne
                      current={current}
                      setCurrent={setCurrent}
                      steps={steps}
                    />
                  )}
                  {current === 1 && (
                    <PostPropertyTwo
                      current={current}
                      setCurrent={setCurrent}
                      steps={steps}
                    />
                  )}
                  {current === 2 && (
                    <PostPropertyThree
                      current={current}
                      setCurrent={setCurrent}
                      steps={steps}
                    />
                  )}
                </div>
                <div className="col-lg-3">
                  <aside className="sidebar static right">
                    <div className="widget">
                      <h4 className="widget-title">Your Groups</h4>
                      <ul className="ak-groups">
                        <li>
                          <figure>
                            <img
                              src="images/resources/your-group1.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="your-grp">
                            <h5>
                              <a href="group-detail.html" title="">
                                Good Group
                              </a>
                            </h5>
                            <a href="#" title="">
                              <i className="icofont-bell-alt" />
                              Notifilactions <span>13</span>
                            </a>
                            <a
                              href="group-feed.html"
                              title=""
                              className="promote"
                            >
                              view feed
                            </a>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img
                              src="images/resources/your-group2.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="your-grp">
                            <h5>
                              <a href="group-detail.html" title="">
                                E-course Group
                              </a>
                            </h5>
                            <a href="#" title="">
                              <i className="icofont-bell-alt" />
                              Notifilactions <span>13</span>
                            </a>
                            <a
                              href="group-feed.html"
                              title=""
                              className="promote"
                            >
                              view feed
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="widget">
                      <h4 className="widget-title">Suggested Group</h4>
                      <div className="sug-caro">
                        <div className="friend-box">
                          <figure>
                            <img
                              alt=""
                              src="images/resources/sidebar-info.jpg"
                            />
                            <span>Members: 505K</span>
                          </figure>
                          <div className="frnd-meta">
                            <img
                              alt=""
                              src="images/resources/frnd-figure2.jpg"
                            />
                            <div className="frnd-name">
                              <a title="" href="#">
                                Social Research
                              </a>
                              <span>@biolabest</span>
                            </div>
                            <a className="main-btn2" href="#" title="">
                              Join Community
                            </a>
                          </div>
                        </div>
                        <div className="friend-box">
                          <figure>
                            <img
                              alt=""
                              src="images/resources/sidebar-info2.jpg"
                            />
                            <span>Members: 505K</span>
                          </figure>
                          <div className="frnd-meta">
                            <img
                              alt=""
                              src="images/resources/frnd-figure3.jpg"
                            />
                            <div className="frnd-name">
                              <a title="" href="#">
                                Bio Labest Group
                              </a>
                              <span>@biolabest</span>
                            </div>
                            <a className="main-btn2" href="#" title="">
                              Join Community
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* suggested group */}
                    <div className="widget">
                      <h4 className="widget-title">Ask Research Question?</h4>
                      <div className="ask-question">
                        <i className="icofont-question-circle" />
                        <h6>
                          Ask questions in Q&amp;A to get help from experts in
                          your field.
                        </h6>
                        <a className="ask-qst" href="#" title="">
                          Ask a question
                        </a>
                      </div>
                    </div>
                    {/* ask question widget */}
                    <div className="widget">
                      <h4 className="widget-title">
                        Explor Events{" "}
                        <a className="see-all" href="#" title="">
                          See All
                        </a>
                      </h4>
                      <div className="rec-events bg-purple">
                        <i className="icofont-gift" />
                        <h6>
                          <a title="" href="">
                            BZ University good night event in columbia
                          </a>
                        </h6>
                        <img alt="" src="images/clock.png" />
                      </div>
                      <div className="rec-events bg-blue">
                        <i className="icofont-microphone" />
                        <h6>
                          <a title="" href="">
                            The 3rd International Conference 2020
                          </a>
                        </h6>
                        <img alt="" src="images/clock.png" />
                      </div>
                    </div>
                    {/* event widget */}
                    <div className="widget">
                      <span>
                        <i className="icofont-globe" /> Sponsored
                      </span>
                      <ul className="sponsors-ad">
                        <li>
                          <figure>
                            <img src="images/resources/sponsor.jpg" alt="" />
                          </figure>
                          <div className="sponsor-meta">
                            <h5>
                              <a href="#" title="">
                                IQ Options Broker
                              </a>
                            </h5>
                            <a href="#" title="" target="_blank">
                              www.iqvie.com
                            </a>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img src="images/resources/sponsor2.jpg" alt="" />
                          </figure>
                          <div className="sponsor-meta">
                            <h5>
                              <a href="#" title="">
                                BM Fashion Designer
                              </a>
                            </h5>
                            <a href="#" title="" target="_blank">
                              www.abcd.com
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* sponsord */}
                    <div className="widget stick-widget">
                      <h4 className="widget-title">Who's follownig</h4>
                      <ul className="followers">
                        <li>
                          <figure>
                            <img
                              alt=""
                              src="images/resources/friend-avatar.jpg"
                            />
                          </figure>
                          <div className="friend-meta">
                            <h4>
                              <a title="" href="time-line.html">
                                Kelly Bill
                              </a>
                              <span>Dept colleague</span>
                            </h4>
                            <a className="underline" title="" href="#">
                              Follow
                            </a>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img
                              alt=""
                              src="images/resources/friend-avatar2.jpg"
                            />
                          </figure>
                          <div className="friend-meta">
                            <h4>
                              <a title="" href="time-line.html">
                                Issabel
                              </a>
                              <span>Dept colleague</span>
                            </h4>
                            <a className="underline" title="" href="#">
                              Follow
                            </a>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img
                              alt=""
                              src="images/resources/friend-avatar3.jpg"
                            />
                          </figure>
                          <div className="friend-meta">
                            <h4>
                              <a title="" href="time-line.html">
                                Andrew
                              </a>
                              <span>Dept colleague</span>
                            </h4>
                            <a className="underline" title="" href="#">
                              Follow
                            </a>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img
                              alt=""
                              src="images/resources/friend-avatar4.jpg"
                            />
                          </figure>
                          <div className="friend-meta">
                            <h4>
                              <a title="" href="time-line.html">
                                Sophia
                              </a>
                              <span>Dept colleague</span>
                            </h4>
                            <a className="underline" title="" href="#">
                              Follow
                            </a>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img
                              alt=""
                              src="images/resources/friend-avatar5.jpg"
                            />
                          </figure>
                          <div className="friend-meta">
                            <h4>
                              <a title="" href="time-line.html">
                                Allen
                              </a>
                              <span>Dept colleague</span>
                            </h4>
                            <a className="underline" title="" href="#">
                              Follow
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* whos following */}
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </section>
  );
};
export default PostProperty;
