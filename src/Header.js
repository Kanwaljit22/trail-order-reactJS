import React from "react";
import Cards from "./components/Cards";

// import React, { useState, useEffect } from 'react';


 function Header(){



 return(
    <>
     {/*Header*/}

    <header class="header-surface">
      <div class="d-flex item-center">
        <span class="cs-icon-logo"></span>
        <span class="cs-icon-cart"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span><span class="path23"></span><span class="path24"></span></span>
        
        <div class="d-flex flex-col">
          <h6>Cisco Commerce</h6>
          <h3>Trials</h3>
        </div>
      </div>
      <div class="header-account-col">
        <div><div class="avtar">AF</div></div>
        <div class="user-details">
          <h4>Allen Franklin</h4>
          <h5>Sales Ops</h5>
          <a href="javascript:void(0)" class="cs-icon-chevron-up" onclick="dropdownonClick()">&nbsp;</a>
          <div id="drop-down-list" class="drop-down-list">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <span class="cs-icon-sign-out"></span><span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      
      </div>
    </header>
    <div class="container">
    <div class="page-header d-flex justify-between flex-row item-center">
        <div><h2>At-A-Glance</h2></div>
        <div class="date-picker gap-8">
          <input type="text" class="datepicker" value="Jun 12, 2024"/><span>to</span><input type="text" class="datepicker" value="Jun 12, 2024"/>
        </div>
      </div>
      <div class="d-flex justify-between flex-row">
        <div style={{width: "1101px"}}>
          <div class="customer-trial-tabs justify-between">
            <div class="trial-navtabs">
              <div class="trial-navtab active" data-target="new">
                New Request
              </div>
              <div class="trial-navtab" data-target="all">All</div>
              <div class="trial-navtab" data-target="active">Active</div>
              <div class="trial-navtab" data-target="extension">Extension</div>
              <div class="trial-navtab" data-target="expired">Expired</div>

              <div class="trial-underline"  style={{width: "90px", left: "0px"}}></div>
            </div>
            <div class="search-sort">
              <input type="text" placeholder="Search by Trial ID or Customer name" id="search-input" fdprocessedid="sex6ta" />
              <button class="sort-by disable-btn" fdprocessedid="xcp41a">
                  <span class="cs-icon-sort"></span>
                  <span>Sort by</span>
                  <div class="drop-down-list">
                    <ul>
                      <li><a href="javascript:void(0)">Customer Name</a></li>
                    </ul>
                  </div>
              </button>
            </div>
          </div>
          <section id="new" class="trial-content active">
            <Cards></Cards>
          </section>
          <section id="all" class="trial-content">
            <div class="panel-body">
              <div class="d-flex flex-row justify-between item-center">
                <div class="panel-section">
                  <div class="panel-head">
                    <h2>Trial for Cisco Meraki Wifi 7</h2>
                    <span class="badge active-request">Active</span>
                  </div>
                  <div class="panel-details-inner d-flex flex-row justify-between">
                    <div>
                      <div class="key">Trial ID</div>
                      <div class="value">93159802</div>
                    </div>
                    <div>
                      <div class="key">Customer</div>
                      <div class="value">Metlife</div>
                    </div>
                    <div>
                      <div class="key">Trial Value</div>
                      <div class="value">USD 21,789</div>
                    </div>
                    <div class="start-expiry-date">
                      <div>
                        <div class="key">Start Date</div>
                        <div class="value">Jun 15, 2024</div>
                      </div>
                      <div class="remaining-days">
                        <ul class="days-active">
                          <li class="active">
                            <span class="cs-icon-check"></span>
                          </li>
                          <li class="days-count">
                            <span class="days-left days-count-default">
                              <span class="cs-icon-clock"></span>
                              <span><strong>88 </strong> days remaining</span></span>
                          </li>
                          <li class="default"><span></span></li>
                        </ul>
                      </div>
                      <div>
                        <div class="key">Expiry Date</div>
                        <div class="value">Sep 15, 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="action-buttons">
                  <button class="btn btn-primary">View Summary</button>
                  <a class="text-link" href="javascript:void(0)">View Details</a>
                </div>
              </div>
            </div>
            <div class="panel-body">
              <div class="d-flex flex-row justify-between item-center">
                <div class="panel-section">
                  <div class="panel-head">
                    <h2>Trial for Cisco Catalyst 9163E</h2>
                    <span class="badge active-request">Active</span><span class="badge extension-request">Extension Requested</span>
                  </div>
                  <div class="panel-details-inner d-flex flex-row justify-between">
                    <div>
                      <div class="key">Trial ID</div>
                      <div class="value">92390921</div>
                    </div>
                    <div>
                      <div class="key">Customer</div>
                      <div class="value">Infinx</div>
                    </div>
                    <div>
                      <div class="key">Trial Value</div>
                      <div class="value">USD 12,000</div>
                    </div>
                    <div class="start-expiry-date">
                      <div>
                        <div class="key">Start Date</div>
                        <div class="value">Apr 20, 2024</div>
                      </div>
                      <div class="remaining-days">
                        <ul class="days-active">
                          <li class="active">
                            <span class="cs-icon-check"></span>
                          </li>
                          <li class="days-count">
                            <span class="days-left days-count-default"><span class="cs-icon-clock"></span><span><strong>73</strong> days remaining</span></span>
                          </li>
                          <li class="default"><span></span></li>
                        </ul>
                      </div>
                      <div>
                        <div class="key">Expiry Date</div>
                        <div class="value">Jun 20, 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="action-buttons">
                  <button class="btn btn-primary">View Summary</button>
                  <a class="text-link" href="javascript:void(0)">View Details</a>
                </div>
              </div>
            </div>
            <div class="panel-body">
              <div class="d-flex flex-row justify-between item-center">
                <div class="panel-section">
                  <div class="panel-head">
                    <h2>Trial for Cisco Meraki Wifi 7</h2>
                    <span class="badge extension-request">Extension Requested</span>
                  </div>
                  <div class="panel-details-inner d-flex flex-row justify-between">
                    <div>
                      <div class="key">Trial ID</div>
                      <div class="value">92390921</div>
                    </div>
                    <div>
                      <div class="key">Customer</div>
                      <div class="value">Raytheon</div>
                    </div>
                    <div>
                      <div class="key">Trial Value</div>
                      <div class="value">USD 24,908</div>
                    </div>
                    <div class="start-expiry-date">
                      <div>
                        <div class="key">Start Date</div>
                        <div class="value">Apr 10, 2024</div>
                      </div>
                      <div class="remaining-days">
                        <ul class="days-extension">
                          <li class="active">
                            <span class="cs-icon-check"></span>
                          </li>
                          <li class="days-count">
                            <span class="days-left days-count-warning"><span class="cs-icon-clock"></span><span><strong>8</strong>days remaining</span></span>
                          </li>
                          <li class="default"><span></span></li>
                        </ul>
                      </div>
                      <div>
                        <div class="key">Expiry Date</div>
                        <div class="value">Jun 25, 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="action-buttons">
                  <button class="btn btn-primary">View Summary</button>
                  <a class="text-link" href="javascript:void(0)">View Details</a>
                </div>
              </div>
            </div>
            <div class="panel-body">
              <div class="d-flex flex-row justify-between item-center">
                <div class="panel-section">
                  <div class="panel-head">
                    <h2>Trial for Meraki Wifi 6</h2>
                    <span class="badge extension-request">Extension Requested</span>
                  </div>
                  <div class="panel-details-inner d-flex flex-row justify-between">
                    <div>
                      <div class="key">Trial ID</div>
                      <div class="value">92390921</div>
                    </div>
                    <div>
                      <div class="key">Customer</div>
                      <div class="value">Brightstar</div>
                    </div>
                    <div>
                      <div class="key">Trial Value</div>
                      <div class="value">USD 21,124</div>
                    </div>
                    <div class="start-expiry-date">
                      <div>
                        <div class="key">Start Date</div>
                        <div class="value">Apr 15, 2024</div>
                      </div>
                      <div class="remaining-days">
                        <ul class="days-expired">
                          <li class="active">
                            <span class="cs-icon-check"></span>
                          </li>
                          <li class="days-count">
                            <span class="days-left days-count-danger"><span class="cs-icon-clock"></span><span>Expired</span></span>
                          </li>
                          <li class="default">
                            <span class="cs-icon-warning-outline"></span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div class="key">Expiry Date</div>
                        <div class="value">Jun 15, 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="action-buttons">
                  <button class="btn btn-primary">View Summary</button>
                  <a class="text-link" href="javascript:void(0)">View Details</a>
                </div>
              </div>
            </div>
            <div class="panel-body">
              <div class="d-flex flex-row justify-between item-center">
                <div class="panel-section">
                  <div class="panel-head">
                    <h2>Trial for Meraki Wifi 7 for Enterprise</h2>
                    <span class="badge expired-request">Expired</span>
                  </div>
                  <div class="panel-details-inner d-flex flex-row justify-between">
                    <div>
                      <div class="key">Trial ID</div>
                      <div class="value">93276589</div>
                    </div>
                    <div>
                      <div class="key">Customer</div>
                      <div class="value">Amazon</div>
                    </div>
                    <div>
                      <div class="key">Trial Value</div>
                      <div class="value">USD 21,908</div>
                    </div>
                    <div class="start-expiry-date">
                      <div>
                        <div class="key">Start Date</div>
                        <div class="value">Apr 10, 2024</div>
                      </div>
                      <div class="remaining-days">
                        <ul class="days-expired">
                          <li class="active">
                            <span class="cs-icon-check"></span>
                          </li>
                          <li class="days-count">
                            <span class="days-left days-count-danger"><span class="cs-icon-clock"></span><span>Expired</span></span>
                          </li>
                          <li class="default">
                            <span class="cs-icon-warning-outline"></span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div class="key">Expiry Date</div>
                        <div class="value">Jun 10, 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="action-buttons">
                  <button class="btn btn-primary">View Summary</button>
                  <a class="text-link" href="javascript:void(0)">View Details</a>
                </div>
              </div>
            </div>
          </section>
          <section id="active" class="trial-content">
            <div class="panel-body">
              <div class="d-flex flex-row justify-between item-center">
                <div class="panel-section">
                  <div class="panel-head">
                    <h2>Trial for Cisco Meraki Wifi 7</h2>
                    <span class="badge active-request">Active</span>
                  </div>
                  <div class="panel-details-inner d-flex flex-row justify-between">
                    <div>
                      <div class="key">Trial ID</div>
                      <div class="value">93159802</div>
                    </div>
                    <div>
                      <div class="key">Customer</div>
                      <div class="value">Metlife</div>
                    </div>
                    <div>
                      <div class="key">Trial Value</div>
                      <div class="value">USD 21,789</div>
                    </div>
                    <div class="start-expiry-date">
                      <div>
                        <div class="key">Start Date</div>
                        <div class="value">Jun 15, 2024</div>
                      </div>
                      <div class="remaining-days">
                        <ul class="days-active">
                          <li class="active">
                            <span class="cs-icon-check"></span>
                          </li>
                          <li class="days-count">
                            <span class="days-left days-count-default"><span class="cs-icon-clock"></span><span><strong>88</strong>days remaining</span></span>
                          </li>
                          <li class="default"><span></span></li>
                        </ul>
                      </div>
                      <div>
                        <div class="key">Expiry Date</div>
                        <div class="value">Sep 15, 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="action-buttons">
                  <button class="btn btn-primary">View Summary</button>
                  <a class="text-link" href="javascript:void(0)">View Details</a>
                </div>
              </div>
            </div>
            <div class="panel-body">
              <div class="d-flex flex-row justify-between item-center">
                <div class="panel-section">
                  <div class="panel-head">
                    <h2>Trial for Cisco Catalyst 9163E</h2>
                    <span class="badge active-request">Active</span><span class="badge extension-request">Extension Requested</span>
                  </div>
                  <div class="panel-details-inner d-flex flex-row justify-between">
                    <div>
                      <div class="key">Trial ID</div>
                      <div class="value">92390921</div>
                    </div>
                    <div>
                      <div class="key">Customer</div>
                      <div class="value">Infinx</div>
                    </div>
                    <div>
                      <div class="key">Trial Value</div>
                      <div class="value">USD 12,000</div>
                    </div>
                    <div class="start-expiry-date">
                      <div>
                        <div class="key">Start Date</div>
                        <div class="value">Apr 20, 2024</div>
                      </div>
                      <div class="remaining-days">
                        <ul class="days-active">
                          <li class="active">
                            <span class="cs-icon-check"></span>
                          </li>
                          <li class="days-count">
                            <span class="days-left days-count-default"><span class="cs-icon-clock"></span><span><strong>73</strong> days remaining</span></span>
                          </li>
                          <li class="default"><span></span></li>
                        </ul>
                      </div>
                      <div>
                        <div class="key">Expiry Date</div>
                        <div class="value">Jun 20, 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="action-buttons">
                  <button class="btn btn-primary">View Summary</button>
                  <a class="text-link" href="javascript:void(0)">View Details</a>
                </div>
              </div>
            </div>
            <div class="panel-body">
              <div class="d-flex flex-row justify-between item-center">
                <div class="panel-section">
                  <div class="panel-head">
                    <h2>Trial for Cisco Meraki Wifi 7</h2>
                    <span class="badge active-request">Active</span><span class="badge included-essentials">Extended</span>
                  </div>
                  <div class="panel-details-inner d-flex flex-row justify-between">
                    <div>
                      <div class="key">Trial ID</div>
                      <div class="value">92390921</div>
                    </div>
                    <div>
                      <div class="key">Customer</div>
                      <div class="value">Raytheon</div>
                    </div>
                    <div>
                      <div class="key">Trial Value</div>
                      <div class="value">USD 24,908</div>
                    </div>
                    <div class="start-expiry-date">
                      <div>
                        <div class="key">Start Date</div>
                        <div class="value">Apr 10, 2024</div>
                      </div>
                      <div class="remaining-days">
                        <ul class="days-extension">
                          <li class="active">
                            <span class="cs-icon-check"></span>
                          </li>
                          <li class="days-count">
                            <span class="days-left days-count-warning"><span class="cs-icon-clock"></span><span><strong>8</strong> days remaining</span></span>
                          </li>
                          <li class="default"><span></span></li>
                        </ul>
                      </div>
                      <div>
                        <div class="key">Expiry Date</div>
                        <div class="value">Jun 25, 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="action-buttons">
                  <button class="btn btn-primary">View Summary</button>
                  <a class="text-link" href="javascript:void(0)">View Details</a>
                </div>
              </div>
            </div>
          </section>
          <section id="extension" class="trial-content">
            <div class="panel-body">
              <div class="d-flex flex-row justify-between item-center">
                <div class="panel-section">
                  <div class="panel-head">
                    <h2>Trial for Meraki Wifi 6</h2>
                    <span class="badge extension-request">Extension Requested</span>
                  </div>
                  <div class="panel-details-inner d-flex flex-row justify-between">
                    <div>
                      <div class="key">Trial ID</div>
                      <div class="value">92390921</div>
                    </div>
                    <div>
                      <div class="key">Customer</div>
                      <div class="value">Brightstar</div>
                    </div>
                    <div>
                      <div class="key">Trial Value</div>
                      <div class="value">USD 21,124</div>
                    </div>
                    <div class="start-expiry-date">
                      <div>
                        <div class="key">Start Date</div>
                        <div class="value">Apr 15, 2024</div>
                      </div>
                      <div class="remaining-days">
                        <ul class="days-expired">
                          <li class="active">
                            <span class="cs-icon-check"></span>
                          </li>
                          <li class="days-count">
                            <span class="days-left days-count-danger"><span class="cs-icon-clock"></span><span>Expired</span></span>
                          </li>
                          <li class="default">
                            <span class="cs-icon-warning-outline"></span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div class="key">Expiry Date</div>
                        <div class="value">Jun 15, 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="action-buttons">
                  <button class="btn btn-primary">View Summary</button>
                  <a class="text-link" href="javascript:void(0)">View Details</a>
                </div>
              </div>
            </div>
          </section>
          <section id="expired" class="trial-content">
            <div class="panel-body">
              <div class="d-flex flex-row justify-between item-center">
                <div class="panel-section">
                  <div class="panel-head">
                    <h2>Trial for Meraki Wifi 7 for Enterprise</h2>
                    <span class="badge expired-request">Expired</span>
                  </div>
                  <div class="panel-details-inner d-flex flex-row justify-between">
                    <div>
                      <div class="key">Trial ID</div>
                      <div class="value">93276589</div>
                    </div>
                    <div>
                      <div class="key">Customer</div>
                      <div class="value">Amazon</div>
                    </div>
                    <div>
                      <div class="key">Trial Value</div>
                      <div class="value">USD 21,908</div>
                    </div>
                    <div class="start-expiry-date">
                      <div>
                        <div class="key">Start Date</div>
                        <div class="value">Apr 10, 2024</div>
                      </div>
                      <div class="remaining-days">
                        <ul class="days-expired">
                          <li class="active">
                            <span class="cs-icon-check"></span>
                          </li>
                          <li class="days-count">
                            <span class="days-left days-count-danger"><span class="cs-icon-clock"></span><span>Expired</span></span>
                          </li>
                          <li class="default">
                            <span class="cs-icon-warning-outline"></span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div class="key">Expiry Date</div>
                        <div class="value">Jun 10, 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="action-buttons">
                  <button class="btn btn-primary">View Summary</button>
                  <a class="text-link" href="javascript:void(0)">View Details</a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div></div>
      </div>

    </div>
    
    {/*Header*/}
    </>
 )

 }

 export default Header;