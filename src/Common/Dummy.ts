import {
  DataTypes,
  UserData,
  FeedTypes,
  detailTypes,
  categoryTypes,
} from "./Interface";
import { HTMLEXAMPLE2, HTMLEXAPME1 } from "./htmlExample";

export const results: DataTypes[] = [
  {
    megazineId: 1,
    title: "title1asdfasdfasdfasdfasdadsfasdfadfaaaaaaaaaaaaaaaaaaaaaaaaaa",
    subTitle: "subtitle1",
    author: "user1",
    category: "여행",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 2,
    title: "title2",
    subTitle: "subtitle2",
    author: "user2",
    category: "IT",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 3,
    title: "title3",
    subTitle: "subtitle3",
    author: "user3",
    category: "일상",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 4,
    title: "title4",
    subTitle: "subtitle4",
    author: "user4",
    category: "여행",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 5,
    title: "title5",
    subTitle: "subtitle5",
    author: "user5",
    category: "IT",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 6,
    title: "title6",
    subTitle: "subtitle6",
    author: "user6",
    category: "일상",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 7,
    title: "title7",
    subTitle: "subtitle7",
    author: "user7",
    category: "여행",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 8,
    title: "title8",
    subTitle: "subtitle8",
    author: "user8",
    category: "여행",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 9,
    title: "title9",
    subTitle: "subtitle9",
    author: "user9",
    category: "일상",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 10,
    title: "title10",
    subTitle: "subtitle10",
    author: "user10",
    category: "IT",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://pyxis.nymag.com/v1/imgs/171/429/c95b07becc2bef532d9669b4824ea4386f-08-harry-potter.rsquare.w1200.jpg",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 11,
    title: "title11",
    subTitle: "subtitle11",
    author: "user11",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 12,
    title: "title12",
    subTitle: "subtitle12",
    author: "user12",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://pyxis.nymag.com/v1/imgs/171/429/c95b07becc2bef532d9669b4824ea4386f-08-harry-potter.rsquare.w1200.jpg",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 13,
    title: "title13",
    subTitle: "subtitle13",
    author: "user13",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 14,
    title: "title14",
    subTitle: "subtitle14",
    author: "user14",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 15,
    title: "title15",
    subTitle: "subtitle15",
    author: "user15",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 16,
    title: "title16",
    subTitle: "subtitle16",
    author: "user16",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 17,
    title: "title17",
    subTitle: "subtitle17",
    author: "user17",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 18,
    title: "title18",
    subTitle: "subtitle18",
    author: "user18",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 19,
    title: "title19",
    subTitle: "subtitle19",
    author: "user19",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 20,
    title: "title20",
    subTitle: "subtitle20",
    author: "user20",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 21,
    title: "title21",
    subTitle: "subtitle21",
    author: "user21",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 22,
    title: "title22",
    subTitle: "subtitle22",
    author: "user22",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 23,
    title: "title23",
    subTitle: "subtitle23",
    author: "user23",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
  {
    megazineId: 24,
    title: "title24",
    subTitle: "subtitle24",
    author: "user24",
    authorImg:
      "https://bbts1.azureedge.net/images/p/full/2018/11/549c2ef3-79f3-462d-b0e1-3228ea149a5c.jpg",
    createdAt: "2020-10-11",
    thumbnail:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
    content:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTYx/MDAxNTI5NjQzOTA3MjA2.StNSDwGpX7kqlohgaMHX2IZKq3lZUOi4J2grIy14Zxcg.udqFYJdBOIDRf_6UJFSkXOl-kcdbatZtez9CK-PCnfEg.JPEG.sabuek/dobbytheelf.jpg?type=w800",
  },
];

export const result: UserData[] = [
  {
    profileImage:
      "https://img2.sbs.co.kr/img/sbs_cms/CH/2017/04/28/CH33108141_w666_h968.jpg",
    username: "네이버",
  },
  {
    profileImage:
      "https://w.namu.la/s/0c6301df01fc4f180ec65717bad3d0254258abf0be33299e55df7c261040f517518eb9008a1a2cd3d7b8b7777d70182c185bc891b1054dc57b11cc46fd29130a25dc6155c10fe839cd404df1a72171a8f5dbe52274e376005197ea5b1992305d",
    username: "뚱이",
  },
  {
    profileImage:
      "https://img2.sbs.co.kr/img/sbs_cms/CH/2017/04/28/CH52785630_w300_h300.jpg",
    username: "징징이",
  },
];

function createFeedData(): FeedTypes[] {
  const arr = [];
  for (let i = 1; i <= 15; i += 1) {
    if (i % 2) {
      arr.push({
        feedId: i,
        title: `Test Title ${i}`,
        subTitle: `Test Subtitle ${i}`,
        content: HTMLEXAPME1,
        createdAt: `2020-08`,
        stars: 4,
        location: {
          location_name: "낙성대 버거킹",
          location_x: "126.96379092885",
          location_y: "37.4766500263963",
        },
      });
    } else {
      arr.push({
        feedId: i,
        title: `Test Title ${i}`,
        subTitle: `Test Subtitle ${i}`,
        content: HTMLEXAMPLE2,
        createdAt: `2020-08`,
      });
    }
  }
  return arr;
}

export const feedResult: FeedTypes[] = createFeedData();

export const detailDummy: detailTypes = {
  magazineId: 2,
  magazineTitle: "미니부터 맥스까지, 아이폰12",
  magazineSubTitle: "반가운 소식, 애플의 새로운 아이폰 이야기를 준비했습니다.",
  author: "네이버",
  authorImg:
    "https://www.apple.com/v/apple-events/home/e/images/september-2019/meta/og__fodnljjkwl6y.png?201912111726",
  createdAt: "2020-10",
  thumbnail:
    "https://www.apple.com/v/iphone-12-pro/a/images/meta/iphone-12-pro_overview__d5t6ow03nkmu_og.png",
  isLiked: false,
  isSubscribed: true,
  feedList: feedResult.filter(el => el.feedId % 3 === 2),
  grid: 3,
  isVertical: false,
  titleAlign: 2,
  categoryName: "일상",
};

export const CATEGORIES = [
  "그림",
  "IT",
  "사진",
  "리뷰",
  "음악",
  "요리",
  "디자인",
  "음식",
  "일상",
  "문학",
];
const generateCategory = () => {
  const result = [];
  let index = 1;
  for (let prop of CATEGORIES) {
    result.push({ id: index, name: prop });
    index += 1;
  }
  return result;
};
export const CATEGORY: categoryTypes[] = generateCategory();
