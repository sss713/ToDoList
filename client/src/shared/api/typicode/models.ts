export type Task = {
  id: number;
  name: string;
  description: string;
  status: number;
  dedline: Date;
  comleted: boolean;
};
export type User = {
  user_id: number;
  nickName: string;
  login: string;
  password: string;
  telegramm_id: number;
};
