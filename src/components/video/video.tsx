import React from 'react'

type Props = {}

export default function Video({}: Props) {
  return (
    <>
    <section>
    <div className="gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="page-contents" className="row merged20">
              <div className="col-lg-3">
                <aside className="sidebar static left">
                  <div className="widget stick-widget ">
                    <h4 className="widget-title">Watch</h4>
                    <form className="video-search" method="post">
                      <i className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg></i>
                      <input type="text" placeholder="Search Video" />
                      <button type="submit" />
                    </form>	
                    <ul className="video-links">
                      <li>
                        <a href="#" title=''><i className=''><svg className="feather feather-home" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></i> Home</a>
                      </li>
                      <li>
                        <a href="#" title=''><i className=''><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg></i> Latest</a>
                      </li>
                      <li>
                        <a href="#" title=''><i className=''><svg className="feather feather-zap" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></i> Trending</a>
                      </li>
                      <li>
                        <a href="#" title=''><i className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mic"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1={12} y1={19} x2={12} y2={23} /><line x1={8} y1={23} x2={16} y2={23} /></svg></i> Live</a>
                      </li>
                      <li>
                        <a href="#" title=''><i className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg></i> Saved Videos</a>
                      </li>
                    </ul>
                    <h4 className="main-title"><i className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-list"><line x1={8} y1={6} x2={21} y2={6} /><line x1={8} y1={12} x2={21} y2={12} /><line x1={8} y1={18} x2={21} y2={18} /><line x1={3} y1={6} x2="3.01" y2={6} /><line x1={3} y1={12} x2="3.01" y2={12} /><line x1={3} y1={18} x2="3.01" y2={18} /></svg></i> Your Watch List</h4>
                    <ul className="watchlist">
                      <li className="unread">
                        <figure><img src="images/resources/user2.jpg" alt='' /></figure>
                        <a href="#" title=''>Rosie Garebal</a>
                        <span className="new-highlight" />
                      </li>
                      <li>
                        <figure><img src="images/resources/user3.jpg" alt='' /></figure>
                        <a href="#" title=''>Danial Cabral</a>
                        <span className="new-highlight" />
                      </li>
                      <li className="unread">
                        <figure><img src="images/resources/user4.jpg" alt='' /></figure>
                        <a href="#" title=''>William John</a>
                        <span className="new-highlight" />
                      </li>
                      <li>
                        <figure><img src="images/resources/user5.jpg" alt='' /></figure>
                        <a href="#" title=''>Adrew Jane</a>
                        <span className="new-highlight" />
                      </li>
                      <li className="unread">
                        <figure><img src="images/resources/user1.jpg" alt='' /></figure>
                        <a href="#" title=''>Billgates</a>
                        <span className="new-highlight" />
                      </li>
                      <li>
                        <figure><img src="images/resources/user2.jpg" alt='' /></figure>
                        <a href="#" title=''>Rita Arvind</a>
                        <span className="new-highlight" />
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
              <div className="col-lg-9">
                <div className="main-wraper">
                  <div className="main-title">Latest Videos</div>
                  <div className="main-wraper">
                    <div className="user-post video">
                      <div className="friend-info">
                        <figure>
                          <img alt='' src="images/resources/user1.jpg" />
                        </figure>
                        <div className="friend-name">
                          <div className="more">
                            <div className="more-post-optns">
                              <i className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg></i>
                              <ul>
                                <li>
                                  <i className="icofont-pen-alt-1" />Edit Post
                                  <span>Edit This Post within a Hour</span>
                                </li>
                                <li>
                                  <i className="icofont-ban" />Hide Post
                                  <span>Hide This Post</span>
                                </li>
                                <li>
                                  <i className="icofont-ui-delete" />Delete Post
                                  <span>If inappropriate Post By Mistake</span>
                                </li>
                                <li>
                                  <i className="icofont-flag" />Report
                                  <span>Inappropriate content</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <ins><a title='' href="time-line.html">Jack Carter</a> Upload video <em><a className="folow" href="#" title=''>Follow</a></em></ins>
                          <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                        </div>
                        <div className="post-meta">
                          <h4>When your private pictures are used against you</h4>
                          <p>A film about a secret of a housewife which is revealed on her 3rd Wedding Anniversary</p>
                          <iframe height={400} src="https://www.youtube.com/embed/zdow47FQRfQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                          <div className="we-video-info">
                            <ul>
                              <li>
                                <span title="views" className="views">
                                  <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx={12} cy={12} r={3} /></svg></i>
                                  <ins>1.2k</ins>
                                </span>
                              </li>
                              <li>
                                <span title="Comments" className="Recommend">
                                  <i>
                                    <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                  <ins>54</ins>
                                </span>
                              </li>
                              <li>
                                <span title="follow" className="Follow">
                                  <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></i>
                                  <ins>5k</ins>	
                                </span>
                              </li>
                              <li>
                                <span className="share-pst" title="Share">
                                  <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg></i>
                                  <ins>205</ins>
                                </span>	
                              </li>
                            </ul>
                            <a href="post-detail.html" title='' className="reply">Reply <i className="icofont-reply" /></a>
                          </div>
                          <div className="stat-tools">
                            <div className="box">
                              <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                <div className="Emojis">
                                  <div className="Emoji Emoji--like">
                                    <div className="icon icon--like" />
                                  </div>
                                  <div className="Emoji Emoji--love">
                                    <div className="icon icon--heart" />
                                  </div>
                                  <div className="Emoji Emoji--haha">
                                    <div className="icon icon--haha" />
                                  </div>
                                  <div className="Emoji Emoji--wow">
                                    <div className="icon icon--wow" />
                                  </div>
                                  <div className="Emoji Emoji--sad">
                                    <div className="icon icon--sad" />
                                  </div>
                                  <div className="Emoji Emoji--angry">
                                    <div className="icon icon--angry" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="box">
                              <div className="Emojis">
                                <div className="Emoji Emoji--like">
                                  <div className="icon icon--like" />
                                </div>
                                <div className="Emoji Emoji--love">
                                  <div className="icon icon--heart" />
                                </div>
                                <div className="Emoji Emoji--haha">
                                  <div className="icon icon--haha" />
                                </div>
                                <div className="Emoji Emoji--wow">
                                  <div className="icon icon--wow" />
                                </div>
                                <div className="Emoji Emoji--sad">
                                  <div className="icon icon--sad" />
                                </div>
                                <div className="Emoji Emoji--angry">
                                  <div className="icon icon--angry" />
                                </div>
                              </div>
                            </div>
                            <a title='' href="#" className="comment-to"><i className="icofont-comment" /> Comment</a>
                            <a title='' href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                            <div className="emoji-state">
                              <div className="popover_wrapper">
                                <a className="popover_title" href="#" title=''><img alt='' src="images/smiles/thumb.png" /></a>
                                <div className="popover_content">
                                  <span><img alt='' src="images/smiles/thumb.png" /> Likes</span>
                                  <ul className="namelist">
                                    <li>Jhon Doe</li>
                                    <li>Amara Sin</li>
                                    <li>Sarah K.</li>
                                    <li><span>20+ more</span></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="popover_wrapper">
                                <a className="popover_title" href="#" title=''><img alt='' src="images/smiles/heart.png" /></a>
                                <div className="popover_content">
                                  <span><img alt='' src="images/smiles/heart.png" /> Love</span>
                                  <ul className="namelist">
                                    <li>Amara Sin</li>
                                    <li>Jhon Doe</li>
                                    <li><span>10+ more</span></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="popover_wrapper">
                                <a className="popover_title" href="#" title=''><img alt='' src="images/smiles/smile.png" /></a>
                                <div className="popover_content">
                                  <span><img alt='' src="images/smiles/smile.png" /> Happy</span>
                                  <ul className="namelist">
                                    <li>Sarah K.</li>
                                    <li>Jhon Doe</li>
                                    <li>Amara Sin</li>
                                    <li><span>100+ more</span></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="popover_wrapper">
                                <a className="popover_title" href="#" title=''><img alt='' src="images/smiles/weep.png" /></a>
                                <div className="popover_content">
                                  <span><img alt='' src="images/smiles/weep.png" /> Dislike</span>
                                  <ul className="namelist">
                                    <li>Danial Carbal</li>
                                    <li>Amara Sin</li>
                                    <li>Sarah K.</li>
                                    <li><span>15+ more</span></li>
                                  </ul>
                                </div>
                              </div>
                              <p>10+</p>
                            </div>
                            <div className="new-comment" style={{display: 'none'}}>
                              <form method="post">
                                <input type="text" placeholder="write comment" />
                                <button type="submit"><i className="icofont-paper-plane" /></button>
                              </form>
                              <div className="comments-area">
                                <ul>
                                  <li>
                                    <figure><img alt='' src="images/resources/user1.jpg" /></figure>
                                    <div className="commenter">
                                      <h5><a title='' href="#">Jack Carter</a></h5>
                                      <span>2 hours ago</span>
                                      <p>
                                        i think that some how, we learn who we really are and then live with that decision, great post!
                                      </p>
                                      <span>you can view the more detail via link</span>
                                      <a title='' href="https://www.youtube.com/watch?v=HpZgwHU1GcI" target="_blank">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                    </div>
                                    <a title="Like" href="#"><i className="icofont-heart" /></a>
                                    <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                  </li>
                                  <li>
                                    <figure><img alt='' src="images/resources/user2.jpg" /></figure>
                                    <div className="commenter">
                                      <h5><a title='' href="#">Ching xang</a></h5>
                                      <span>2 hours ago</span>
                                      <p>
                                        i think that some how, we learn who we really are and then live with that decision, great post!
                                      </p>
                                    </div>
                                    <a title="Like" href="#"><i className="icofont-heart" /></a>
                                    <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* share youtube video */}
                  <div className="main-wraper">
                    <div className="user-post video">
                      <div className="friend-info">
                        <figure>
                          <img alt='' src="images/resources/user2.jpg" />
                        </figure>
                        <div className="friend-name">
                          <div className="more">
                            <div className="more-post-optns">
                              <i className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg></i>
                              <ul>
                                <li>
                                  <i className="icofont-pen-alt-1" />Edit Post
                                  <span>Edit This Post within a Hour</span>
                                </li>
                                <li>
                                  <i className="icofont-ban" />Hide Post
                                  <span>Hide This Post</span>
                                </li>
                                <li>
                                  <i className="icofont-ui-delete" />Delete Post
                                  <span>If inappropriate Post By Mistake</span>
                                </li>
                                <li>
                                  <i className="icofont-flag" />Report
                                  <span>Inappropriate content</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <ins><a title='' href="time-line.html">Farhea</a> Shared Vimeo Link <em><a href="#" title=''>Follow</a></em></ins>
                          <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                        </div>
                        <div className="post-meta">
                          <h4>Hypoglycemia | Endocrinology Medicine Lectures | Medical Online Education | V-Learning</h4>
                          <p>A film about a secret of a housewife which is revealed on her 3rd Wedding Anniversary</p>
                          <iframe src="https://player.vimeo.com/video/464733913" height={350} allow="autoplay; fullscreen" allowFullScreen />
                          <div className="we-video-info">
                            <ul>
                              <li>
                                <span title="views" className="views">
                                  <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx={12} cy={12} r={3} /></svg></i>
                                  <ins>1.2k</ins>
                                </span>
                              </li>
                              <li>
                                <span title="Comments" className="Recommend">
                                  <i>
                                    <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                  <ins>54</ins>
                                </span>
                              </li>
                              <li>
                                <span title="follow" className="Follow">
                                  <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></i>
                                  <ins>5k</ins>	
                                </span>
                              </li>
                              <li>
                                <span className="share-pst" title="Share">
                                  <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg></i>
                                  <ins>205</ins>
                                </span>	
                              </li>
                            </ul>
                            <a href="post-detail.html" title='' className="reply">Reply <i className="icofont-reply" /></a>
                          </div>
                          <div className="stat-tools">
                            <div className="box">
                              <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                <div className="Emojis">
                                  <div className="Emoji Emoji--like">
                                    <div className="icon icon--like" />
                                  </div>
                                  <div className="Emoji Emoji--love">
                                    <div className="icon icon--heart" />
                                  </div>
                                  <div className="Emoji Emoji--haha">
                                    <div className="icon icon--haha" />
                                  </div>
                                  <div className="Emoji Emoji--wow">
                                    <div className="icon icon--wow" />
                                  </div>
                                  <div className="Emoji Emoji--sad">
                                    <div className="icon icon--sad" />
                                  </div>
                                  <div className="Emoji Emoji--angry">
                                    <div className="icon icon--angry" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="box">
                              <div className="Emojis">
                                <div className="Emoji Emoji--like">
                                  <div className="icon icon--like" />
                                </div>
                                <div className="Emoji Emoji--love">
                                  <div className="icon icon--heart" />
                                </div>
                                <div className="Emoji Emoji--haha">
                                  <div className="icon icon--haha" />
                                </div>
                                <div className="Emoji Emoji--wow">
                                  <div className="icon icon--wow" />
                                </div>
                                <div className="Emoji Emoji--sad">
                                  <div className="icon icon--sad" />
                                </div>
                                <div className="Emoji Emoji--angry">
                                  <div className="icon icon--angry" />
                                </div>
                              </div>
                            </div>
                            <a title='' href="#" className="comment-to"><i className="icofont-comment" /> Comment</a>
                            <a title='' href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                            <div className="emoji-state">
                              <div className="popover_wrapper">
                                <a className="popover_title" href="#" title=''><img alt='' src="images/smiles/thumb.png" /></a>
                                <div className="popover_content">
                                  <span><img alt='' src="images/smiles/thumb.png" /> Likes</span>
                                  <ul className="namelist">
                                    <li>Jhon Doe</li>
                                    <li>Amara Sin</li>
                                    <li>Sarah K.</li>
                                    <li><span>20+ more</span></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="popover_wrapper">
                                <a className="popover_title" href="#" title=''><img alt='' src="images/smiles/heart.png" /></a>
                                <div className="popover_content">
                                  <span><img alt='' src="images/smiles/heart.png" /> Love</span>
                                  <ul className="namelist">
                                    <li>Amara Sin</li>
                                    <li>Jhon Doe</li>
                                    <li><span>10+ more</span></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="popover_wrapper">
                                <a className="popover_title" href="#" title=''><img alt='' src="images/smiles/smile.png" /></a>
                                <div className="popover_content">
                                  <span><img alt='' src="images/smiles/smile.png" /> Happy</span>
                                  <ul className="namelist">
                                    <li>Sarah K.</li>
                                    <li>Jhon Doe</li>
                                    <li>Amara Sin</li>
                                    <li><span>100+ more</span></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="popover_wrapper">
                                <a className="popover_title" href="#" title=''><img alt='' src="images/smiles/weep.png" /></a>
                                <div className="popover_content">
                                  <span><img alt='' src="images/smiles/weep.png" /> Dislike</span>
                                  <ul className="namelist">
                                    <li>Danial Carbal</li>
                                    <li>Amara Sin</li>
                                    <li>Sarah K.</li>
                                    <li><span>15+ more</span></li>
                                  </ul>
                                </div>
                              </div>
                              <p>10+</p>
                            </div>
                            <div className="new-comment" style={{display: 'none'}}>
                              <form method="post">
                                <input type="text" placeholder="write comment" />
                                <button type="submit"><i className="icofont-paper-plane" /></button>
                              </form>
                              <div className="comments-area">
                                <ul>
                                  <li>
                                    <figure><img alt='' src="images/resources/user1.jpg" /></figure>
                                    <div className="commenter">
                                      <h5><a title='' href="#">Jack Carter</a></h5>
                                      <span>2 hours ago</span>
                                      <p>
                                        i think that some how, we learn who we really are and then live with that decision, great post!
                                      </p>
                                      <span>you can view the more detail via link</span>
                                      <a title='' href="https://www.youtube.com/watch?v=HpZgwHU1GcI" target="_blank">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                    </div>
                                    <a title="Like" href="#"><i className="icofont-heart" /></a>
                                    <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                  </li>
                                  <li>
                                    <figure><img alt='' src="images/resources/user2.jpg" /></figure>
                                    <div className="commenter">
                                      <h5><a title='' href="#">Ching xang</a></h5>
                                      <span>2 hours ago</span>
                                      <p>
                                        i think that some how, we learn who we really are and then live with that decision, great post!
                                      </p>
                                    </div>
                                    <a title="Like" href="#"><i className="icofont-heart" /></a>
                                    <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* share vimeo video */}
                  <div className="main-wraper">
                    <div className="wraper-title">
                      <span><i className="icofont-video-alt" /> Videos Play List</span>
                      <a href="videos.html" title=''>See all Videos</a>
                    </div>
                    <div className="videos-caro">
                      <div className="item-video" data-merge={2}>
                        <a className="owl-video" href="https://www.youtube.com/watch?v=8iZTb9NWbz8" />
                        <div className="posted-user">
                          <img src="images/resources/user4.jpg" alt='' />
                          <span>Frank J.</span>
                        </div>
                        <div className="vid-info">
                          <span>1 year ago</span>
                          <span><i className="icofont-eye-open" /> 3.1k</span>
                        </div>
                      </div>
                      <div className="item-video" data-merge={2}>
                        <a className="owl-video" href="https://www.youtube.com/watch?v=8itUNRIWVIs" />
                        <div className="posted-user">
                          <img src="images/resources/user2.jpg" alt='' />
                          <span>Maria K.</span>
                        </div>
                        <div className="vid-info">
                          <span>2 weeks ago</span>
                          <span><i className="icofont-eye-open" /> 1.1k</span>
                        </div>
                      </div>
                      <div className="item-video" data-merge={2}>
                        <a className="owl-video" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ" /> 
                        <div className="posted-user">
                          <img src="images/resources/user1.jpg" alt='' />
                          <span>Jack Carter</span>
                        </div>
                        <div className="vid-info">
                          <span>4 weeks ago</span>
                          <span><i className="icofont-eye-open" /> 20k</span>
                        </div>
                      </div>
                      <div className="item-video" data-merge={2}>
                        <a className="owl-video" href="https://www.youtube.com/watch?v=WNeLUngb-Xg" />
                        <div className="posted-user">
                          <img src="images/resources/user3.jpg" alt='' />
                          <span>Fawad Jan</span>
                        </div>
                        <div className="vid-info">
                          <span>1 Month ago</span>
                          <span><i className="icofont-eye-open" /> 8k</span>
                        </div>
                      </div>
                    </div>
                  </div>{/* video playlist carousel */}
                  <div className="main-wraper">
                    <div className="user-post video">
                      <div className="friend-info">
                        <figure>
                          <img alt='' src="images/resources/user3.jpg" />
                        </figure>
                        <div className="friend-name">
                          <div className="more">
                            <div className="more-post-optns">
                              <i className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg></i>
                              <ul>
                                <li>
                                  <i className="icofont-pen-alt-1" />Edit Post
                                  <span>Edit This Post within a Hour</span>
                                </li>
                                <li>
                                  <i className="icofont-ban" />Hide Post
                                  <span>Hide This Post</span>
                                </li>
                                <li>
                                  <i className="icofont-ui-delete" />Delete Post
                                  <span>If inappropriate Post By Mistake</span>
                                </li>
                                <li>
                                  <i className="icofont-flag" />Report
                                  <span>Inappropriate content</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <ins><a title='' href="time-line.html">Fawad Khanzada</a> Shared video <em><a href="#" title=''>Follow</a></em></ins>
                          <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                        </div>
                        <div className="post-meta">
                          <h4>After watching this, your brain will not be the same..</h4>
                          <p>In a classic research-based TEDx Talk, Dr. Lara Boyd describes how neuroplasticity gives you the power to shape the brain you ...</p>
                          <iframe height={400} src="https://www.youtube.com/embed/LNHBMFCzznE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                          <div className="we-video-info">
                            <ul>
                              <li>
                                <span title="views" className="views">
                                  <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx={12} cy={12} r={3} /></svg></i>
                                  <ins>1.2k</ins>
                                </span>
                              </li>
                              <li>
                                <span title="Comments" className="Recommend">
                                  <i>
                                    <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                  <ins>54</ins>
                                </span>
                              </li>
                              <li>
                                <span title="follow" className="Follow">
                                  <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></i>
                                  <ins>5k</ins>	
                                </span>
                              </li>
                              <li>
                                <span className="share-pst" title="Share">
                                  <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg></i>
                                  <ins>205</ins>
                                </span>	
                              </li>
                            </ul>
                            <a href="post-detail.html" title='' className="reply">Reply <i className="icofont-reply" /></a>
                          </div>
                          <div className="stat-tools">
                            <div className="box">
                              <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                <div className="Emojis">
                                  <div className="Emoji Emoji--like">
                                    <div className="icon icon--like" />
                                  </div>
                                  <div className="Emoji Emoji--love">
                                    <div className="icon icon--heart" />
                                  </div>
                                  <div className="Emoji Emoji--haha">
                                    <div className="icon icon--haha" />
                                  </div>
                                  <div className="Emoji Emoji--wow">
                                    <div className="icon icon--wow" />
                                  </div>
                                  <div className="Emoji Emoji--sad">
                                    <div className="icon icon--sad" />
                                  </div>
                                  <div className="Emoji Emoji--angry">
                                    <div className="icon icon--angry" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="box">
                              <div className="Emojis">
                                <div className="Emoji Emoji--like">
                                  <div className="icon icon--like" />
                                </div>
                                <div className="Emoji Emoji--love">
                                  <div className="icon icon--heart" />
                                </div>
                                <div className="Emoji Emoji--haha">
                                  <div className="icon icon--haha" />
                                </div>
                                <div className="Emoji Emoji--wow">
                                  <div className="icon icon--wow" />
                                </div>
                                <div className="Emoji Emoji--sad">
                                  <div className="icon icon--sad" />
                                </div>
                                <div className="Emoji Emoji--angry">
                                  <div className="icon icon--angry" />
                                </div>
                              </div>
                            </div>
                            <a title='' href="#" className="comment-to"><i className="icofont-comment" /> Comment</a>
                            <a title='' href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                            <div className="emoji-state">
                              <div className="popover_wrapper">
                                <a className="popover_title" href="#" title=''><img alt='' src="images/smiles/thumb.png" /></a>
                                <div className="popover_content">
                                  <span><img alt='' src="images/smiles/thumb.png" /> Likes</span>
                                  <ul className="namelist">
                                    <li>Jhon Doe</li>
                                    <li>Amara Sin</li>
                                    <li>Sarah K.</li>
                                    <li><span>20+ more</span></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="popover_wrapper">
                                <a className="popover_title" href="#" title=''><img alt='' src="images/smiles/heart.png" /></a>
                                <div className="popover_content">
                                  <span><img alt='' src="images/smiles/heart.png" /> Love</span>
                                  <ul className="namelist">
                                    <li>Amara Sin</li>
                                    <li>Jhon Doe</li>
                                    <li><span>10+ more</span></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="popover_wrapper">
                                <a className="popover_title" href="#" title=''><img alt='' src="images/smiles/smile.png" /></a>
                                <div className="popover_content">
                                  <span><img alt='' src="images/smiles/smile.png" /> Happy</span>
                                  <ul className="namelist">
                                    <li>Sarah K.</li>
                                    <li>Jhon Doe</li>
                                    <li>Amara Sin</li>
                                    <li><span>100+ more</span></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="popover_wrapper">
                                <a className="popover_title" href="#" title=''><img alt='' src="images/smiles/weep.png" /></a>
                                <div className="popover_content">
                                  <span><img alt='' src="images/smiles/weep.png" /> Dislike</span>
                                  <ul className="namelist">
                                    <li>Danial Carbal</li>
                                    <li>Amara Sin</li>
                                    <li>Sarah K.</li>
                                    <li><span>15+ more</span></li>
                                  </ul>
                                </div>
                              </div>
                              <p>10+</p>
                            </div>
                            <div className="new-comment" style={{display: 'none'}}>
                              <form method="post">
                                <input type="text" placeholder="write comment" />
                                <button type="submit"><i className="icofont-paper-plane" /></button>
                              </form>
                              <div className="comments-area">
                                <ul>
                                  <li>
                                    <figure><img alt='' src="images/resources/user1.jpg" /></figure>
                                    <div className="commenter">
                                      <h5><a title='' href="#">Jack Carter</a></h5>
                                      <span>2 hours ago</span>
                                      <p>
                                        i think that some how, we learn who we really are and then live with that decision, great post!
                                      </p>
                                      <span>you can view the more detail via link</span>
                                      <a title='' href="https://www.youtube.com/watch?v=HpZgwHU1GcI" target="_blank">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                    </div>
                                    <a title="Like" href="#"><i className="icofont-heart" /></a>
                                    <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                  </li>
                                  <li>
                                    <figure><img alt='' src="images/resources/user2.jpg" /></figure>
                                    <div className="commenter">
                                      <h5><a title='' href="#">Ching xang</a></h5>
                                      <span>2 hours ago</span>
                                      <p>
                                        i think that some how, we learn who we really are and then live with that decision, great post!
                                      </p>
                                    </div>
                                    <a title="Like" href="#"><i className="icofont-heart" /></a>
                                    <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* share youtube video */}
                  <div className="sp sp-bars" />{/* LOADER INDICATOR */}
                </div>	
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
    </> 
  )
}
