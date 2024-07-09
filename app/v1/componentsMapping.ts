import dynamic from 'next/dynamic'
const componentsMapping = {
  "WeddingInvitation": dynamic(() => import("@/components/dynamic/WeddingInvitation")),
};

export default componentsMapping;
/*
  "MetaverseCard": dynamic(() => import("@/components/dynamic/MetaverseCard")),
  "HamburgerMenu": dynamic(() => import("@/components/dynamic/HamburgerMenu")),
  "Footer": dynamic(() => import("@/components/dynamic/Footer")),
  "LikeDislikeButton": dynamic(() => import("@/components/dynamic/LikeDislikeButton")),
  "WeddingInvitationCard": dynamic(() => import("@/components/dynamic/WeddingInvitationCard")),
  */