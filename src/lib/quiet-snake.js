/** A single subtle entrance; navigation and footer remain sharp. */
export function revealQuietPage(scope){
 const media=matchMedia('(prefers-reduced-motion: reduce)');if(media.matches)return()=>{};
 const main=scope.querySelector('main');if(!main)return()=>{};
 const animation=main.animate([{filter:'blur(1.5px)',opacity:.9},{filter:'blur(0px)',opacity:1}],{duration:360,easing:'cubic-bezier(.23,1,.32,1)'});
 const cancel=()=>animation.cancel();media.addEventListener('change',cancel);return()=>{cancel();media.removeEventListener('change',cancel)};
}
