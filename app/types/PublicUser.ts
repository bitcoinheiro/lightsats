import { User } from "@prisma/client";

export type PublicUser = Pick<
  User,
  | "id"
  | "userType"
  | "name"
  | "avatarURL"
  | "twitterUsername"
  | "created"
  | "lightningAddress"
> & {
  fallbackAvatarId: string | undefined;
  numTipsSent: number;
  numTipsReceived: number;
  satsTipped: number;
  // scoreboardPosition: number; // TODO: calculate
};
