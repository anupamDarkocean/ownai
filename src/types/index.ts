export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: Date;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
};
