import React, { memo } from "react";
import HeaderLeftSideBar from "./HeaderLeftSideBar";
import { LeftSideBarContainer, ULStyled } from "./styled";
import { dataRender } from "../../../../utils/Foundation";

const LeftSideBar = () => {
  return (
    <LeftSideBarContainer>
      <div id="sidebar">
        <HeaderLeftSideBar />
        <nav>
          <ULStyled>
            {dataRender?.map((item) => (
              (
                <li key={item.id}>
                  <a href={item.link}>{item.value}</a>
                </li>
              )
            ))}
          </ULStyled>
        </nav>
      </div>
    </LeftSideBarContainer>
  );
};

export default memo(LeftSideBar);