import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./SideBar.css";
import pp from "./pp.svg";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth <= 768) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth <= 768) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    <div
      className={`sidebar ${
        isExpanded ? "expanded" : ""
      } border-end border-dark py-5`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
       {isExpanded &&<Navbar className="d-flex justify-content-center textss ">
        <img src={pp} className="ppimg me-2" />
        <span>Neha Bhat</span>
      </Navbar>}
      <Nav className="flex-column ">
        <Nav.Link href="/">
          <svg
            width="23"
            height="19"
            viewBox="0 0 23 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.94118 19V12.2941H13.4118V19H19V10.0588H22.3529L11.1765 0L0 10.0588H3.35294V19H8.94118Z"
              fill="black"
            />
          </svg>

          {isExpanded && <span className="bar-text ms-2  ">Home</span>}
        </Nav.Link>
        <Nav.Link href="#booking">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.02222 8.65556C5.62222 11.8 8.2 14.3778 11.3444 15.9778L13.7889 13.5333C14.1 13.2222 14.5333 13.1333 14.9222 13.2556C16.1667 13.6667 17.5 13.8889 18.8889 13.8889C19.1836 13.8889 19.4662 14.006 19.6746 14.2143C19.8829 14.4227 20 14.7053 20 15V18.8889C20 19.1836 19.8829 19.4662 19.6746 19.6746C19.4662 19.8829 19.1836 20 18.8889 20C13.8792 20 9.07478 18.0099 5.53243 14.4676C1.99007 10.9252 0 6.12076 0 1.11111C0 0.816426 0.117063 0.533811 0.325437 0.325437C0.533811 0.117063 0.816426 0 1.11111 0H5C5.29469 0 5.5773 0.117063 5.78567 0.325437C5.99405 0.533811 6.11111 0.816426 6.11111 1.11111C6.11111 2.5 6.33333 3.83333 6.74444 5.07778C6.86667 5.46667 6.77778 5.9 6.46667 6.21111L4.02222 8.65556Z"
              fill="black"
            />
          </svg>

          {isExpanded && <span className="bar-text ms-2  ">Booking</span>}
        </Nav.Link>
        <Nav.Link href="#queries">
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V20L4 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0ZM9 22H11V20H9V22ZM5 22H7V20H5V22ZM13 22H15V20H13V22Z"
              fill="black"
            />
          </svg>

          {isExpanded && <span className="bar-text ms-2  ">Queries</span>}
        </Nav.Link>
        <hr />
        <Nav.Link href="#Schedules">
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.6 9.9V12.1H4.4V9.9H6.6ZM11 9.9V12.1H8.8V9.9H11ZM15.4 9.9V12.1H13.2V9.9H15.4ZM17.6 2.2C18.1835 2.2 18.7431 2.43179 19.1556 2.84437C19.5682 3.25695 19.8 3.81652 19.8 4.4V19.8C19.8 20.3835 19.5682 20.9431 19.1556 21.3556C18.7431 21.7682 18.1835 22 17.6 22H2.2C0.979 22 0 21.01 0 19.8V4.4C0 3.81652 0.231785 3.25695 0.644365 2.84437C1.05694 2.43179 1.61652 2.2 2.2 2.2H3.3V0H5.5V2.2H14.3V0H16.5V2.2H17.6ZM17.6 19.8V7.7H2.2V19.8H17.6ZM6.6 14.3V16.5H4.4V14.3H6.6ZM11 14.3V16.5H8.8V14.3H11ZM15.4 14.3V16.5H13.2V14.3H15.4Z"
              fill="black"
            />
          </svg>

          {isExpanded && <span className="bar-text ms-2  ">Schedules</span>}
        </Nav.Link>

        <Nav.Link href="#Logout">
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.2885 20.8116L20.3276 15.8507C20.8116 14.6407 20.5696 13.0677 19.4806 12.0997C18.3916 11.0108 16.8186 10.7688 15.4877 11.3738L17.7866 13.6727L16.0927 15.3667L13.6727 12.9467C13.0677 14.2777 13.3097 15.8507 14.3987 17.0606C15.4877 18.1496 16.9396 18.3916 18.1496 17.9076L23.1105 22.8685C23.3525 23.1105 23.7155 23.1105 23.8365 22.8685L25.0465 21.6585C25.4095 21.2955 25.4095 20.9325 25.2885 20.8116ZM13.3097 19.3596H0V16.9396C0 14.2777 4.35591 12.0997 9.67979 12.0997C10.2848 12.0997 10.8898 12.0997 11.3738 12.2207C11.0108 12.9467 10.8898 13.6727 10.8898 14.5197C10.8898 16.4556 11.8577 18.2706 13.3097 19.3596ZM9.67979 0C7.01785 0 4.8399 2.17795 4.8399 4.8399C4.8399 7.50184 7.01785 9.67979 9.67979 9.67979C12.3417 9.67979 14.5197 7.50184 14.5197 4.8399C14.5197 2.17795 12.3417 0 9.67979 0Z"
              fill="black"
            />
          </svg>

          {isExpanded && <span className="bar-text ms-2  ">Services</span>}
        </Nav.Link>
        <hr />
        <Nav.Link href="#rewards">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0C10.1935 0 11.3381 0.474106 12.182 1.31802C13.0259 2.16193 13.5 3.30653 13.5 4.5C13.5 5.69347 13.0259 6.83807 12.182 7.68198C11.3381 8.52589 10.1935 9 9 9C7.80653 9 6.66193 8.52589 5.81802 7.68198C4.97411 6.83807 4.5 5.69347 4.5 4.5C4.5 3.30653 4.97411 2.16193 5.81802 1.31802C6.66193 0.474106 7.80653 0 9 0ZM9 11.25C13.9725 11.25 18 13.2637 18 15.75V18H0V15.75C0 13.2637 4.0275 11.25 9 11.25Z"
              fill="black"
            />
          </svg>

          {isExpanded && <span className="bar-text ms-2">Profile</span>}
        </Nav.Link>

        <Nav.Link href="#link2">
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.06 4.1012e-05C6.17 -0.00995899 4.33 1.81004 5.17 4.07004H2C1.46957 4.07004 0.960859 4.28075 0.585786 4.65583C0.210714 5.0309 0 5.53961 0 6.07004V8.07004C0 8.33526 0.105357 8.58961 0.292893 8.77715C0.48043 8.96468 0.734784 9.07004 1 9.07004H10V6.07004H12V9.07004H21C21.2652 9.07004 21.5196 8.96468 21.7071 8.77715C21.8946 8.58961 22 8.33526 22 8.07004V6.07004C22 5.53961 21.7893 5.0309 21.4142 4.65583C21.0391 4.28075 20.5304 4.07004 20 4.07004H16.83C18 0.800041 13.6 -1.50996 11.57 1.31004L11 2.07004L10.43 1.29004C9.8 0.400041 8.93 0.010041 8.06 4.1012e-05ZM8 2.07004C8.89 2.07004 9.34 3.15004 8.71 3.78004C8.08 4.41004 7 3.96004 7 3.07004C7 2.80482 7.10536 2.55047 7.29289 2.36293C7.48043 2.1754 7.73478 2.07004 8 2.07004ZM14 2.07004C14.89 2.07004 15.34 3.15004 14.71 3.78004C14.08 4.41004 13 3.96004 13 3.07004C13 2.80482 13.1054 2.55047 13.2929 2.36293C13.4804 2.1754 13.7348 2.07004 14 2.07004ZM1 10.07V18.07C1 18.6005 1.21071 19.1092 1.58579 19.4843C1.96086 19.8593 2.46957 20.07 3 20.07H19C19.5304 20.07 20.0391 19.8593 20.4142 19.4843C20.7893 19.1092 21 18.6005 21 18.07V10.07H12V18.07H10V10.07H1Z"
              fill="black"
            />
          </svg>
          {isExpanded && <span className="bar-text ms-2  ">Rewards</span>}
        </Nav.Link>

        <Nav.Link href="#Logout">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0376 2.72706L12.4171 4.34765C14.3506 5.52118 15.6471 7.63353 15.6471 10.0588C15.6471 11.8373 14.9406 13.543 13.683 14.8006C12.4254 16.0582 10.7197 16.7647 8.94118 16.7647C7.16267 16.7647 5.457 16.0582 4.1994 14.8006C2.94181 13.543 2.23529 11.8373 2.23529 10.0588C2.23529 7.63353 3.53177 5.52118 5.45412 4.33647L3.84471 2.72706C1.52 4.33647 0 7.01882 0 10.0588C0 12.4302 0.942014 14.7044 2.61881 16.3812C4.29561 18.058 6.56983 19 8.94118 19C11.3125 19 13.5867 18.058 15.2635 16.3812C16.9403 14.7044 17.8824 12.4302 17.8824 10.0588C17.8824 7.01882 16.3624 4.33647 14.0376 2.72706ZM10.0588 0H7.82353V11.1765H10.0588"
              fill="black"
            />
          </svg>
          {isExpanded && <span className="bar-text ms-2  ">Logout</span>}
        </Nav.Link>
      </Nav>
    </div>
</>
  );
};

export default Sidebar;
