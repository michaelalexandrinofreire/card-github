export default function NavBar(){
 return(
  <header>
   <a href="https://cardgithubapi.vercel.app/" title="Card do Github">
    <img src="/favicon.ico" alt="" className="iconNavbar"/>
   </a>
   <div className="link-git">
    <a href="https://github.com/" className="header-link" target="blank" title="github">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#ffffff" width="16" height="16">
      <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.278 6.533 5.447 7.59.398.074.542-.172.542-.384 0-.19-.007-.693-.01-1.361-2.214.482-2.678-1.063-2.678-1.063C2.135 12.17 1.758 11.9 1.758 11.9c-.722-.494.055-.484.055-.484.8.057 1.222.823 1.222.823.713 1.221 1.87.868 2.324.663.072-.517.278-.868.505-1.068-1.77-.2-3.634-.885-3.634-3.93 0-.867.309-1.577.824-2.134-.083-.2-.36-1.008.079-2.101 0 0 .666-.213 2.181.814A7.57 7.57 0 0 1 8 3.618c.627.003 1.258.084 1.855.249 1.516-1.027 2.181-.814 2.181-.814.439 1.093.162 1.901.08 2.101.516.557.824 1.267.824 2.134 0 3.053-1.868 3.727-3.647 3.922.287.246.543.731.543 1.474 0 1.063-.01 1.921-.01 2.187 0 .21.142.461.548.382C13.727 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8z"/>
     </svg>
     GitHub
    </a>
    <a href="https://api.github.com/users" className="header-link" target="blank" title="github API">
     🌐 GitHub API
    </a>
   </div>
   
  </header>
 )
}