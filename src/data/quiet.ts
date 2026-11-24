export type QuietProject={slug:string;name:string;href:string;logo?:string;image?:string;description:string;tagline?:string;status?:string;live?:boolean;detail?:string;repo?:string;proof?:{label:string;href:string;title?:string}};
/* Copy and previews come from each live site, checked 24 November 2026 (Glyph's preview is from 3 November). */
/* Home shows these six; Work shows every project. */
export const featuredProjects:QuietProject[]=[
 {slug:'glyph',name:'Glyph',href:'https://glyph.software',logo:'/brands/glyph.svg',image:'/previews/glyph-2026-11.jpg',tagline:'AI brand identity for your next idea',description:'Describe your idea and get a logo, colours, typography and brand assets, then take the identity to your AI builder.',status:'Live',live:true,detail:'/projects/glyph'},
 {slug:'design-skill',name:'Design Skill',href:'https://designskill.site',logo:'/brands/design-skill.svg',image:'/previews/design-skill-2026-11-24.jpg',tagline:'Design skill for AI coding assistants',description:'Teaches your coding assistant to understand the product, choose a direction, build the interface and check what actually rendered.',status:'Open source',repo:'https://github.com/sumitttt4/Glyph-Skill'},
 {slug:'glaze',name:'Glaze',href:'https://glazeui.xyz',logo:'/brands/glaze.svg',image:'/previews/glaze-2026-11-24.jpg',tagline:'React components, solid or glass',description:'93 free components for interfaces, AI and voice, plus animated icons, each in four finishes. Copy the code, install with one command, or hand it to your agent.',status:'Open source',detail:'/projects/glaze',repo:'https://github.com/sumitttt4/glazeui'},
 {slug:'slate',name:'Slate',href:'https://motion-videos-nine.vercel.app',logo:'/brands/slate.svg',image:'/previews/slate-2026-11-24.jpg',tagline:'Launch films you can make yours',description:'A library of crafted launch films you can make yours. Swap in your brand and the film preview updates live.',status:'Early access',detail:'/projects/slate'},
 {slug:'fedup-studio',name:'Fedup Studio',href:'https://fedup.studio',logo:'/brands/fedup.svg',image:'/previews/fedup-studio-2026-11-24.jpg',tagline:'Landing-page code library',description:'A free library of complete landing pages taken from real open-source products. Preview a page, take the code, make it yours.',status:'Free'},
 {slug:'ineedthis',name:'INeedThis',href:'https://ineedthis.site',logo:'/brands/ineedthis.svg',image:'/previews/ineedthis-2026-11-24.jpg',tagline:'Every file tool, none of the uploads',description:'58 free file tools that run in your browser: PDFs, images, video and audio. Files never leave your device.',status:'Free'},
];
export const moreProjects:QuietProject[]=[
 {slug:'proofline',name:'Proofline',href:'https://proofline-lime.vercel.app/',tagline:'A local job-search workspace',logo:'/brands/proofline.svg',image:'/previews/proofline-2026-11-24.jpg',description:'A local job-search workspace: discover teams, connect your proof, and prepare an application or founder email.',status:'Early build'},
 {slug:'musiclb',name:'Musiclb',href:'https://musiclb.vercel.app/',tagline:'A music diary for you and friends',logo:'/brands/musiclb.png',image:'/previews/musiclb-2026-11-24.jpg',description:'A little music diary for you and your friends. Log a song, keep a memory.'},
];
export const allProjects:QuietProject[]=[...featuredProjects,...moreProjects];
export const personalProfiles=[
 {name:'Letterboxd',handle:'Sumit232',href:'https://letterboxd.com/Sumit232/',logo:'/logos/letterboxd.svg',image:'/previews/profile-letterboxd.jpg',note:'Films, favourites, and the things that stay with me.'},
 {name:'Spotify',handle:'jeezzzzz',href:'https://open.spotify.com/user/31awex72i3siw7q6tpbvml5n2vri',logo:'/logos/spotify.svg',image:'/previews/profile-spotify.jpg',note:'The playlists I come back to.'},
 {name:'Duolingo',handle:'ohsumitlearn',href:'https://www.duolingo.com/profile/ohsumitlearn',logo:'/logos/duolingo.svg',image:'/brands/duo.png',note:'Learning Spanish, one lesson at a time.'},
];
