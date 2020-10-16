// 매거진 데이터 타입
export interface DataTypes {
  megazineId?: number; 
  title?: string;
  subTitle?: string;
  author?: string;
  category?: string;
  authorImg?: string;
  createdAt?: string;
  thumbnail?: string;
}

// 유저 데이터 타입
export interface UserData {
  profileImage?: string  // url,
  username: string     // username              
}

// 