import * as D from "./styles/DetailHeadStyles";
import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { detailTypes } from "../Common/Interface";
import { Link } from "react-router-dom";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { BsBookmarkFill } from "react-icons/bs";
import { likeApi, unlikeApi } from "../Api/magazine";
import { subscribeApi, unSubscribeApi } from "../Api/user";

interface props {
  data: detailTypes;
}

export default function DetailHeader({ data }: props) {
  const [coverOption, setCoverOption] = useState({
    isLike: false,
    isSub: false,
  });

  useEffect(() => {
    setCoverOption({
      ...coverOption,
      isLike: data.isLiked,
      isSub: data.isSubscribed,
    });
  }, []);

  const handleLike = useCallback(
    async (id: number) => {
      if (coverOption.isLike) {
        setCoverOption(prev => ({ ...prev, isLike: false }));
        await unlikeApi(id);
      } else {
        setCoverOption(prev => ({ ...prev, isLike: true }));
        await likeApi(id);
      }
    },
    [coverOption.isLike],
  );
  const handleSub = useCallback(
    async (username: string) => {
      if (coverOption.isSub) {
        setCoverOption(prev => ({ ...prev, isSub: false }));
        await unSubscribeApi(username);
      } else {
        setCoverOption(prev => ({ ...prev, isSub: true }));
        await subscribeApi(username);
      }
    },
    [coverOption.isSub],
  );

  return (
    <D.DetailHead>
      {data.thumbnail && (
        <D.CoverImg url={data.thumbnail}>
          <D.CoverHead>
            <D.CoverText>
              <D.CoverTitle align={data.titleAlign}>
                <h1>{data.title}</h1>
                <h5>{data.subTitle}</h5>
                <D.CoverUser>
                  <D.CoverOption>
                    <img
                      src={
                        data.User.authorImg
                          ? data.User.authorImg
                          : "/image/default_user.png"
                      }
                    />
                    <p>
                      <Link
                        style={{ color: "inherit" }}
                        to={`/user/${data.User.author}`}
                      >
                        {data.User.author}
                      </Link>
                    </p>
                  </D.CoverOption>
                  <D.CoverOption style={{ marginLeft: "2rem" }}>
                    <D.SubButton
                      active={coverOption.isSub}
                      onClick={() => handleSub(data.User.author)}
                    >
                      구독하기
                      <BsBookmarkFill />
                    </D.SubButton>
                    <D.LikeButton onClick={() => handleLike(data.id)}>
                      좋아요
                      {coverOption.isLike ? <FcLike /> : <FcLikePlaceholder />}
                    </D.LikeButton>
                  </D.CoverOption>
                </D.CoverUser>
              </D.CoverTitle>
            </D.CoverText>
          </D.CoverHead>
        </D.CoverImg>
      )}
      {!data.thumbnail && (
        <D.CoverDiv>
          <D.CoverHead>
            <D.CoverText>
              <D.CoverTitle align={data.titleAlign} only={true}>
                <h1>{data.title}</h1>
                <h5>{data.subTitle}</h5>
                <D.CoverUser>
                  <D.CoverOption>
                    <img
                      src={
                        data.User.authorImg
                          ? data.User.authorImg
                          : "/image/default_user.png"
                      }
                    />
                    <p>
                      <Link
                        style={{ color: "inherit" }}
                        to={`/user/${data.User.author}`}
                      >
                        {data.User.author}
                      </Link>
                    </p>
                  </D.CoverOption>
                  <D.CoverOption style={{ marginLeft: "2rem" }}>
                    <D.SubButton
                      active={coverOption.isSub}
                      onClick={() => handleSub(data.User.author)}
                    >
                      구독하기
                      <BsBookmarkFill />
                    </D.SubButton>
                    <D.LikeButton onClick={() => handleLike(data.id)}>
                      좋아요
                      {coverOption.isLike ? <FcLike /> : <FcLikePlaceholder />}
                    </D.LikeButton>
                  </D.CoverOption>
                </D.CoverUser>
              </D.CoverTitle>
            </D.CoverText>
          </D.CoverHead>
        </D.CoverDiv>
      )}
    </D.DetailHead>
  );
}
