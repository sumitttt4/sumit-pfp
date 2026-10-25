import {projects as previousProjects} from './projects';
export type QuietProject={slug:string;name:string;href:string;logo?:string;image?:string;description:string;status?:string};
export const selectedProjects:QuietProject[]=[
 {slug:'glyph',name:'Glyph',href:'https://glyph.software',logo:'/brands/glyph.svg',image:'/previews/glyph.jpg',description:'An AI brand-identity product. One brief in, a full launch kit out.',status:'Live · paid'},
 {slug:'proofline',name:'Proofline',href:'https://proofline-lime.vercel.app/',logo:'/brands/proofline.svg',description:'A job-search workspace for your proof, company research, applications and founder-email drafts.',status:'Early build'},
 {slug:'fedup-studio',name:'Fedup Studio',href:'https://fedup.studio',logo:'/brands/fedup.svg',image:'/previews/fedup.jpg',description:'A free library of landing-page code adapted from real open-source products.'},
 {slug:'musiclb',name:'Musiclb',href:'https://musiclb.vercel.app/',logo:'/brands/musiclb.png',image:'/previews/musiclb.jpg',description:'Your days, in songs.'},
 {slug:'file-studio',name:'File Studio',href:'https://ineedthis-delta.vercel.app/',logo:'/brands/file-studio.svg',image:'/previews/file-studio.jpg',description:'Small everyday tools for files.'},
 {slug:'glyph-skill',name:'Glyph-Skill',href:'https://glyph-skillfordesign.vercel.app/',logo:'/brands/glyph-skill.svg',image:'/glyph-skill.jpg',description:'A design skill for AI coding assistants, with practical rules for UI, typography, spacing and frontend layouts.',status:'Open source'},
];
export const quietProjects:QuietProject[]=[...selectedProjects,...previousProjects.filter(p=>!['glyph','fedup-studio','glyph-skill'].includes(p.slug)).map(p=>({slug:p.slug,name:p.name,href:p.liveUrl,image:p.image,description:p.description}))];
export const personalProfiles=[
 {name:'Letterboxd',handle:'Sumit232',href:'https://letterboxd.com/Sumit232/',logo:'/logos/letterboxd.svg',image:'/previews/profile-letterboxd.jpg',note:'Films, favourites, and the things that stay with me.'},
 {name:'Spotify',handle:'jeezzzzz',href:'https://open.spotify.com/user/31awex72i3siw7q6tpbvml5n2vri',logo:'/logos/spotify.svg',image:'/previews/profile-spotify.jpg',note:'The playlists I come back to.'},
 {name:'Duolingo',handle:'ohsumitlearn',href:'https://www.duolingo.com/profile/ohsumitlearn',logo:'/logos/duolingo.svg',image:'/brands/duo.png',note:'Learning Spanish, one lesson at a time.'},
];
