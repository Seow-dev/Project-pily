import { Columns, Items, LocationWrap } from "./styles/MagazineViewStyles";
import * as React from "react";
import { FeedTypes } from "../Common/Interface";
import { StyledRate } from "../CreateFeed/CommonStyles";
import { MdLocationOn } from "react-icons/md";

export function generateItems(col: number, items: FeedTypes[]) {
  return (
    <>
      {Array(col)
        .fill("")
        .map((val, i) => {
          return (
            <Columns key={i}>
              {items
                .filter((val_f, i_f) => i_f % col === i % col)
                .map(item => (
                  <Items key={item.id}>
                    <h2 className="item-title">{item.title}</h2>
                    {item.subTitle.length !== 0 && (
                      <h4 className="item-subtitle">{item.subTitle}</h4>
                    )}
                    {item.stars !== 0 && (
                      <StyledRate
                        style={{ paddingLeft: "1rem", fontSize: "1.8rem" }}
                        disabled
                        value={item.stars}
                      />
                    )}
                    {item.location_name && (
                      <LocationWrap>
                        <a
                          href={`https://map.kakao.com/link/map/${item.location_name},${item.location_y},${item.location_x}`}
                          target="_blank"
                        >
                          <MdLocationOn /> {item.location_name} 바로가기
                        </a>
                      </LocationWrap>
                    )}
                    <div className="ql-snow">
                      <div
                        className="ql-editor"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    </div>
                  </Items>
                ))}
            </Columns>
          );
        })}
    </>
  );
}
