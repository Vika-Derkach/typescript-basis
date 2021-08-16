enum MemberShip {
  Simple,
  Standard,
  Premium,
}
const membership = MemberShip.Standard;

const membershipReverse = MemberShip[2];

console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
  FACEBOOK = "Facebook",
  INSTAGRAM = "Instagram",
}
const social = SocialMedia.INSTAGRAM;
console.log(social);
