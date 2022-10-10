import React from "react";
import styled from "styled-components";
import "./Section.css";
function Section(props) {
  const { title, description, backgroundImg, leftButtonText, rightButtonText } =
    props;

  return (
    <Wrap bgImage={backgroundImg}>
      <div className="ItemText">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="Buttons">
        <div className="ButtonGroup">
          <div className="LeftButton">{leftButtonText}</div>
          {rightButtonText && (
            <div className="RightButton">{rightButtonText}</div>
          )}
        </div>

        <img className="DownArrow" src="/images/down-arrow.svg" alt="" />
      </div>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
