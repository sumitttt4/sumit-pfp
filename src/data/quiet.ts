import {projects as previousProjects} from './projects';
export type QuietProject={slug:string;name:string;href:string;logo?:string;image?:string;description:string;tagline?:string;status?:string;live?:boolean;detail?:string;repo?:string};
/* Copy and previews come from each live site, checked 3 November 2026. */
export const featuredProjects:QuietProject[]=[
 {slug:'glyph',name:'Glyph',href:'https://glyph.software',logo:'/brands/glyph.svg',image:'/previews/glyph-2026-11.jpg',tagline:'AI brand identity for your next idea',description:'Describe your idea and get a logo, colours, typography and brand assets, then take the identity to your AI builder.',status:'Live · paid',live:true,detail:'/projects/glyph'},
 {slug:'glaze',name:'Glaze',href:'https://solid-glass.vercel.app',logo:'/brands/glaze.svg',image:'/previews/glaze.jpg',tagline:'93 free React components, four finishes',description:'93 free React components for interfaces, AI and voice, each in four finishes. Install any component with one shadcn command.',status:'Open source',detail:'/projects/glaze',repo:'https://github.com/sumitttt4/solid-glass'},
 {slug:'slate',name:'Slate',href:'https://motion-videos-nine.vercel.app',logo:'/brands/slate.svg',image:'/previews/slate.jpg',tagline:'Launch films you can make yours',description:'A library of crafted launch films you can make yours. Swap in your brand and the film preview updates live.',status:'Early access',detail:'/projects/slate'},
 {slug:'glyph-skill',name:'Glyph-Skill',href:'https://glyph-skillfordesign.vercel.app/',logo:'/brands/glyph-skill.svg',image:'/previews/glyph-skill-2026-11.jpg',tagline:'Design skill for AI coding assistants',description:'A frontend design skill that helps coding assistants understand the product, choose a direction, build the interface and check what actually rendered.',status:'Open source',repo:'https://github.com/sumitttt4/Glyph-Skill'},
];
export const moreProjects:QuietProject[]=[
 {slug:'fedup-studio',name:'Fedup Studio',href:'https://fedup.studio',logo:'/brands/fedup.svg',image:'/previews/fedup-2026-11.jpg',description:'A free library of complete landing pages taken from real open-source products. Preview a page, take the code, make it yours.',status:'Free'},
 {slug:'proofline',name:'Proofline',href:'https://proofline-lime.vercel.app/',logo:'/brands/proofline.svg',image:'/previews/proofline-2026-11.jpg',description:'A local job-search workspace: discover teams, connect your proof, and prepare an application or founder email.',status:'Early build'},
 {slug:'musiclb',name:'Musiclb',href:'https://musiclb.vercel.app/',logo:'/brands/musiclb.png',image:'/previews/musiclb-2026-11.jpg',description:'A little music diary for you and your friends. Log a song, keep a memory.'},
 {slug:'file-studio',name:'File Studio',href:'https://ineedthis-delta.vercel.app/',logo:'/brands/file-studio.svg',image:'/previews/file-studio-2026-11.jpg',description:'Private file tools for PDFs, images, video and archives that run in your browser, with nothing uploaded.'},
 /* Earlier builds; GetLockedIN is left out because getlockedin.live no longer responds. */
 ...previousProjects.filter(p=>!['glyph','glyph-skill','fedup-studio','getlockedin'].includes(p.slug)).map(p=>({slug:p.slug,name:p.name,href:p.liveUrl,image:p.image,description:p.description})),
];
export const personalProfiles=[
 {name:'Letterboxd',handle:'Sumit232',href:'https://letterboxd.com/Sumit232/',logo:'/logos/letterboxd.svg',image:'/previews/profile-letterboxd.jpg',note:'Films, favourites, and the things that stay with me.'},
 {name:'Spotify',handle:'jeezzzzz',href:'https://open.spotify.com/user/31awex72i3siw7q6tpbvml5n2vri',logo:'/logos/spotify.svg',image:'/previews/profile-spotify.jpg',note:'The playlists I come back to.'},
 {name:'Duolingo',handle:'ohsumitlearn',href:'https://www.duolingo.com/profile/ohsumitlearn',logo:'/logos/duolingo.svg',image:'/brands/duo.png',note:'Learning Spanish, one lesson at a time.'},
];
