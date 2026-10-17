(() => {
  'use strict';
  const id='G-XRQGG55QC7',key='powergroup-analytics-consent-v1';
  const live=location.hostname==='powergroup-robotica.github.io';
  let loaded=false;
  function preference(){try{return localStorage.getItem(key)}catch{return null}}
  function track(){
    if(!live||loaded||preference()!=='accepted')return;
    loaded=true;
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){window.dataLayer.push(arguments)};
    window.gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
    window.gtag('js',new Date());
    window.gtag('config',id,{page_location:location.origin+location.pathname,page_referrer:cleanReferrer(),allow_google_signals:false,allow_ad_personalization_signals:false});
    const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+id;document.head.append(script);
  }
  function cleanReferrer(){try{const u=new URL(document.referrer);return u.origin+u.pathname}catch{return ''}}
  function clearCookies(){document.cookie.split(';').forEach(part=>{const name=part.split('=')[0].trim();if(!/^_ga(?:_|$)/.test(name))return;['','; domain='+location.hostname,'; domain=.github.io'].forEach(domain=>{document.cookie=name+'=; Max-Age=0; path=/'+domain})})}
  function choose(value){try{localStorage.setItem(key,value)}catch{}window['ga-disable-'+id]=value!=='accepted';if(value==='accepted')track();else{if(window.gtag)window.gtag('consent','update',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});clearCookies()}document.querySelector('#analytics-choice')?.remove()}
  function showChoice(){
    if(document.querySelector('#analytics-choice'))return;
    const box=document.createElement('aside');box.id='analytics-choice';box.setAttribute('aria-label','Preferencias de estadísticas');
    const text=document.createElement('p');text.textContent='¿Nos permitís medir las visitas con Google Analytics? Nos ayuda a mejorar la web. Podés aceptar o rechazar.';box.append(text);
    const actions=document.createElement('div');
    ['Aceptar','Rechazar'].forEach((label,i)=>{const button=document.createElement('button');button.type='button';button.textContent=label;button.addEventListener('click',()=>choose(i===0?'accepted':'rejected'));actions.append(button)});
    const link=document.createElement('a');link.href='privacidad.html';link.textContent='Privacidad';actions.append(link);box.append(actions);document.body.append(box);
  }
  const style=document.createElement('style');style.textContent='#analytics-choice{position:fixed;bottom:18px;left:18px;right:18px;max-width:680px;margin:auto;z-index:1000;padding:20px;border:1px solid #c195dd;border-radius:16px;background:#261832;color:#faf2ff;box-shadow:0 8px 40px #0009;font:16px/1.6 Arial,sans-serif}#analytics-choice p{margin:0 0 14px}#analytics-choice>div{display:flex;gap:12px;align-items:center;flex-wrap:wrap}#analytics-choice button{font:700 15px Arial,sans-serif;min-height:44px;padding:10px 18px;border-radius:9px;border:1px solid #dba4e6;background:#452d57;color:white;cursor:pointer}#analytics-choice button:first-child{background:#e99bd5;color:#21102b}#analytics-choice a{color:#f1c6eb}#analytics-choice button:focus-visible,#analytics-choice a:focus-visible{outline:3px solid white;outline-offset:3px}.analytics-settings{display:block;margin:18px auto;padding:10px;background:transparent;border:1px solid #8c699e;border-radius:8px;color:#dcc8e6;font:14px Arial,sans-serif;cursor:pointer}';document.head.append(style);
  document.addEventListener('DOMContentLoaded',()=>{const settings=document.createElement('button');settings.type='button';settings.className='analytics-settings';settings.textContent='Privacidad y estadísticas';settings.addEventListener('click',showChoice);document.querySelector('footer, .footer')?.append(settings);if(preference()===null)showChoice();else track()});
})();
