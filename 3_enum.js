var MemberShip;
(function (MemberShip) {
    MemberShip[MemberShip["Simple"] = 0] = "Simple";
    MemberShip[MemberShip["Standard"] = 1] = "Standard";
    MemberShip[MemberShip["Premium"] = 2] = "Premium";
})(MemberShip || (MemberShip = {}));
var membership = MemberShip.Standard;
var membershipReverse = MemberShip[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["FACEBOOK"] = "Facebook";
    SocialMedia["INSTAGRAM"] = "Instagram";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.INSTAGRAM;
console.log(social);
