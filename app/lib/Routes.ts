export enum Routes {
  home = "/",
  tips = "/tips",
  newTip = "/tips/new",
  fundTip = "/tips/fund",
  withdraw = "/withdraw",
  tipperWithdraw = "/withdraw?flow=tipper",
  profile = "/profile",
  logout = "/logout",
  scoreboard = "/scoreboard",
  emailSignin = "/auth/signin/email",
  verifySignin = "/verify",
  lnurlAuthSignin = "/auth/signin/lnurl",
  checkEmail = "/auth/signin/email-sent",
  checkPhone = "/auth/signin/sms-sent",
  journeyClaimed = "/journey/claimed",
  journeyBitcoin = "/journey/bitcoin",
  journeySelectWallet = "/journey/wallet",
  journeyCongratulations = "/journey/congratulations",
  guide = "/guide",
  // TODO: remove below routes - map categories and make each category have a description
  guideSpend = "/guide/spend",
  guideEarn = "/guide/earn",
  guideBuy = "/guide/buy",
  guideSave = "/guide/save",
  guideSend = "/guide/send",
  guideTip = "/guide/tip",
  guideDonate = "/guide/donate",
  guideLearn = "/guide/learn",
  guideWallets = "/guide/wallets",
  admin = "/admin",
  about = "/about",
  signup = "/signup",
  login = "/signin",
  features = "/features",
  users = "/users",
}

export const bitcoinJourneyPages = [
  Routes.journeyClaimed,
  Routes.journeyBitcoin,
  Routes.journeySelectWallet,
  Routes.withdraw,
  Routes.journeyCongratulations,
];
