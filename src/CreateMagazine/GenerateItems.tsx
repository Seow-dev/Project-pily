import { Columns, Items } from "./styles/MagazineViewStyles";
import * as React from "react";
import { FeedTypes } from "../Common/Interface";

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
                  <Items key={item.feedId}>
                    <h2 className="item-title">{item.title}</h2>
                    {item.subTitle.length !== 0 && (
                      <h4 className="item-subtitle">{item.subTitle}</h4>
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
