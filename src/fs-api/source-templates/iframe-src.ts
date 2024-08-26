interface IframeSourceProps {
  formJsonHtml: string;
}
const iframeSource = (props: IframeSourceProps) => {
  const iframeSource =
    "'" + Buffer.from(props.formJsonHtml).toString('base64') + "'";

  return `<html>
    <head>
    <script>
        addEventListener("DOMContentLoaded", (event) => {
            const iframe = document.getElementById('fs-form-iframe-target');
            iframe.srcdoc = atob(${iframeSource});
        });
    </script>
    <script>
    (function(t,e,n,r,a){var c,i=e[a]=e[a]||{init:function(t){function e(t){
    i[t]=function(){i.q.push([t,[].slice.call(arguments,0)])}}var n,r;i.q=[],
    n="addListener track".split(" ");for(r in n)e(n[r]);
    i.q.push(["init",[t||{}]])}},s=t.createElement(r);s.async=1,s.src=n,
    c=t.getElementsByTagName(r)[0],c.parentNode.insertBefore(s,c)
    })(document,window,"https://www.formstack.com/js/fsa.js","script","FSATracker");

    FSATracker.init({"account":"886227", "endpoint":"https://www.formstack.com"});
  </script>
    </head>
    <body>
        <div><h3>IFrame Source</h3>
            This method supports standard submission.  It does not support UTM.  It does not support UTM with the helper script
            <iframe
                id='fs-form-iframe-target'  
                width='100%'
                height='100%'
                srcdoc=''
                
            </iframe>
            <div id='fsForm5786544'></div>
        </div>
    </body>
</html>
  `;
};
export { iframeSource };
