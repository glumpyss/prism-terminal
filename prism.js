/*! Prism Terminal — made by Trent. Single-file app: include with <script src="prism.js"></script> */
(()=>{
const CSS=`
:root{--bg:#0d1117;--bg2:#161b22;--fg:#d6deeb;--dim:#6b7689;--acc:#7aa2f7;--acc2:#bb9af7;--ok:#9ece6a;--err:#f7768e;--bd:#262d3a;--fs:14px;--op:1}
*{box-sizing:border-box}html,body{height:100%;margin:0}
body{background:radial-gradient(1200px 600px at 20% -10%,color-mix(in srgb,var(--acc) 18%,transparent),transparent),radial-gradient(900px 500px at 100% 110%,color-mix(in srgb,var(--acc2) 16%,transparent),transparent),#05070b;font-family:"JetBrains Mono","Fira Code",ui-monospace,Menlo,Consolas,monospace;color:var(--fg);display:flex;padding:14px}
#prism{display:contents}
#win{flex:1;display:flex;flex-direction:column;min-width:0;background:color-mix(in srgb,var(--bg) calc(var(--op)*100%),transparent);border:1px solid var(--bd);border-radius:14px;overflow:hidden;box-shadow:0 30px 80px #000a,0 0 0 1px #ffffff08 inset;backdrop-filter:blur(14px)}
#top{display:flex;align-items:center;gap:10px;background:var(--bg2);border-bottom:1px solid var(--bd);padding:8px 10px 0}
.dots{display:flex;gap:7px;padding:0 6px 8px}.dots i{width:12px;height:12px;border-radius:50%;display:block}
.dots i:nth-child(1){background:#ff5f57}.dots i:nth-child(2){background:#febc2e}.dots i:nth-child(3){background:#28c840}
#tabs{display:flex;gap:4px;flex:1;overflow-x:auto;scrollbar-width:none;align-items:flex-end}
.tab{display:flex;align-items:center;gap:8px;padding:8px 12px;font-size:12px;color:var(--dim);border-radius:9px 9px 0 0;cursor:pointer;white-space:nowrap;border:1px solid transparent;border-bottom:none;user-select:none;max-width:220px}
.tab:hover{background:#ffffff08;color:var(--fg)}
.tab.on{background:var(--bg);color:var(--fg);border-color:var(--bd);box-shadow:0 -2px 0 var(--acc) inset}
.tab .m{width:8px;height:8px;border-radius:50%;background:var(--acc);flex:none}
.tab .x{opacity:.5;border-radius:4px;padding:0 4px}.tab .x:hover{background:#ffffff18;opacity:1}
.tab span.t{overflow:hidden;text-overflow:ellipsis}
.ib{background:none;border:none;color:var(--dim);cursor:pointer;font:inherit;font-size:16px;padding:6px 10px;border-radius:7px;margin-bottom:4px}
.ib:hover{background:#ffffff10;color:var(--fg)}
.brand{font-size:11px;letter-spacing:.12em;color:var(--acc);margin:0 4px 6px;white-space:nowrap}.brand i{font-style:normal;color:var(--dim);letter-spacing:.04em;margin-left:6px}
#mid{flex:1;display:flex;min-height:0}
#out{flex:1;min-width:0;overflow-y:auto;padding:16px 20px;font-size:var(--fs);line-height:1.6;scroll-behavior:smooth}
#out::-webkit-scrollbar{width:8px}#out::-webkit-scrollbar-thumb{background:var(--bd);border-radius:8px}
.ln{white-space:pre-wrap;word-break:break-word;margin:0}
.cmd .p{color:var(--ok)}.cmd .a{color:var(--acc)}
.dim{color:var(--dim)}.err{color:var(--err)}.ok{color:var(--ok)}.acc{color:var(--acc)}
.ai{margin:6px 0 12px;padding:10px 14px;border-left:2px solid var(--acc2);background:color-mix(in srgb,var(--acc2) 7%,transparent);border-radius:0 8px 8px 0}
.ai .body{white-space:pre-wrap;word-break:break-word}
.ai .who{font-size:11px;color:var(--acc2);margin-bottom:4px;letter-spacing:.05em}
.ai pre{background:#0006;border:1px solid var(--bd);border-radius:8px;padding:10px;overflow-x:auto;margin:8px 0;white-space:pre}
.ai code{color:var(--acc)}.ai pre code{color:var(--fg)}
.fc{display:inline-block;margin:6px 0;padding:4px 10px;border:1px solid var(--bd);border-radius:8px;background:#0005;color:var(--ok);font-size:12px}
.fn{margin-top:6px;font-size:12px}.fn div{color:var(--ok)}
.cur::after{content:"▮";color:var(--acc);animation:b 1s steps(2) infinite}@keyframes b{50%{opacity:0}}
#bar{display:flex;align-items:center;gap:8px;padding:12px 20px;border-top:1px solid var(--bd);background:color-mix(in srgb,var(--bg2) 60%,transparent)}
#ps{color:var(--ok);font-size:var(--fs);white-space:nowrap}#ps b{color:var(--acc);font-weight:600}
#in{flex:1;background:none;border:none;outline:none;color:var(--fg);font:inherit;font-size:var(--fs);caret-color:var(--acc);min-width:0}
#st{display:flex;gap:14px;padding:5px 14px;font-size:11px;color:var(--dim);background:var(--bg2);border-top:1px solid var(--bd);align-items:center}
#st .sp{flex:1}.pill{padding:1px 8px;border-radius:99px;background:color-mix(in srgb,var(--acc) 20%,transparent);color:var(--acc);cursor:pointer}
#stop{display:none;color:var(--err);cursor:pointer}
#fp{width:220px;border-left:1px solid var(--bd);background:color-mix(in srgb,var(--bg2) 50%,transparent);padding:12px;overflow-y:auto;font-size:12px}
#fp.hide{display:none}h4{margin:0 0 8px;font-size:11px;letter-spacing:.1em;color:var(--dim);font-weight:500}
.fi{display:flex;align-items:center;gap:6px;padding:6px 8px;border-radius:7px}.fi:hover{background:#ffffff0c}
.fi .n{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer}
.fi b{font-weight:400;opacity:.5;padding:0 4px;border-radius:4px;cursor:pointer}.fi b:hover{opacity:1;background:#ffffff18}
#panel{position:fixed;right:24px;top:70px;width:310px;max-width:calc(100% - 48px);max-height:calc(100% - 100px);overflow-y:auto;background:var(--bg2);border:1px solid var(--bd);border-radius:12px;padding:14px;box-shadow:0 20px 60px #000b;display:none;z-index:9;font-size:12px}
#panel.show{display:block}
.sw{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:12px}
.sw button,.mods button{font:inherit;font-size:11px;border:1px solid var(--bd);border-radius:8px;padding:7px 4px;cursor:pointer;color:var(--fg);background:var(--bg)}
.sw button.on,.mods button.on{border-color:var(--acc);box-shadow:0 0 0 1px var(--acc)}
.mods{display:flex;flex-direction:column;gap:6px;margin-bottom:12px}.mods button{text-align:left;padding:8px 10px}
.mods small{display:block;color:var(--dim);margin-top:2px}
select,#keys input{width:100%;font:inherit;font-size:12px;background:var(--bg);color:var(--fg);border:1px solid var(--bd);border-radius:8px;padding:7px 8px;margin-bottom:12px}
#keys label{display:block;color:var(--dim);margin-bottom:2px}#keys input{margin-bottom:8px}
label.r{display:flex;align-items:center;gap:8px;margin-bottom:8px;color:var(--dim)}label.r input{flex:1;accent-color:var(--acc)}
#pv,#ed{position:fixed;inset:40px;z-index:20;display:none;flex-direction:column;background:var(--bg2);border:1px solid var(--bd);border-radius:12px;overflow:hidden;box-shadow:0 30px 80px #000c}
#pv.show,#ed.show{display:flex}#pv>div,#ed>div{padding:6px 12px;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--dim)}
#pv iframe{flex:1;border:0;background:#fff}
#ed textarea{flex:1;background:var(--bg);color:var(--fg);border:0;outline:none;padding:14px;font:inherit;font-size:13px;resize:none;tab-size:2}
#pal{position:fixed;inset:0;z-index:30;display:none;align-items:flex-start;justify-content:center;padding-top:14vh;background:#0008;backdrop-filter:blur(4px)}
#pal.show{display:flex}#pal>div{width:min(560px,92%);background:var(--bg2);border:1px solid var(--bd);border-radius:12px;overflow:hidden;box-shadow:0 30px 80px #000c}
#pq{width:100%;background:none;border:none;border-bottom:1px solid var(--bd);outline:none;color:var(--fg);font:inherit;font-size:14px;padding:14px 16px}
#pl{max-height:320px;overflow-y:auto}.pi{padding:9px 16px;font-size:13px;cursor:pointer}.pi.on{background:color-mix(in srgb,var(--acc) 22%,transparent)}
.cp{float:right;font:inherit;font-size:10px;background:#ffffff12;color:var(--dim);border:none;border-radius:5px;padding:2px 7px;cursor:pointer}.cp:hover{color:var(--fg)}
#mx{position:fixed;inset:0;z-index:40;display:none;background:#000}
@media(max-width:700px){#fp{display:none}.brand i{display:none}}
`;
const HTML=`
<div id="win">
 <div id="top"><div class="dots"><i></i><i></i><i></i></div><div id="tabs"></div><button class="ib" id="add" title="New tab (Ctrl+T)">+</button><span class="brand">◆ PRISM<i>made by Trent</i></span><button class="ib" id="fbtn" title="Files">🗂</button><button class="ib" id="gear" title="Settings, models and keys">⚙</button></div>
 <div id="mid"><div id="out"></div><div id="fp"><h4>FILES</h4><div id="fl"></div></div></div>
 <div id="bar"><span id="ps"></span><input id="in" autocomplete="off" spellcheck="false" autofocus placeholder="Ask anything · /help · Ctrl+K for the command palette"></div>
 <div id="st"><span id="s1"></span><span id="stop">■ stop (Esc)</span><span class="sp"></span><span id="s4"></span><span class="pill" id="s2"></span><span id="s3"></span></div>
</div>
<div id="pv"><div><span></span><button class="ib" style="margin:0">✕</button></div><iframe sandbox="allow-scripts"></iframe></div>
<div id="pal"><div><input id="pq" placeholder="Type a command…" autocomplete="off" spellcheck="false"><div id="pl"></div></div></div>
<div id="ed"><div><span></span><span><button class="ib" id="eds" style="margin:0">Save</button><button class="ib" id="edx" style="margin:0">✕</button></span></div><textarea spellcheck="false"></textarea></div>
<canvas id="mx"></canvas>
<div id="panel">
 <h4>THEME</h4><div class="sw" id="sw"></div>
 <h4>MODEL FOR THIS TAB</h4><select id="msel"></select>
 <h4>MODE</h4><div class="mods" id="modes"></div>
 <h4>DISPLAY</h4>
 <label class="r">Font <input type="range" id="fs" min="11" max="20" value="14"></label>
 <label class="r">Glass <input type="range" id="op" min="55" max="100" value="100"></label>
 <label class="r">Accent <input type="color" id="ac" value="#7aa2f7"></label>
 <h4 style="margin-top:14px">API KEYS</h4><div id="keys"></div>
 <div class="dim">Keys are stored only in this browser and sent only to the provider you pick.</div>
</div>`;
const sty=document.createElement("style");sty.textContent=CSS;document.head.append(sty);
document.title="Prism Terminal — made by Trent";
const root=document.createElement("div");root.id="prism";root.innerHTML=HTML;document.body.append(root);

const $=s=>document.querySelector(s),out=$("#out"),inp=$("#in");
const THEMES={
 "Tokyo Night":{bg:"#0d1117",bg2:"#161b22",fg:"#d6deeb",dim:"#6b7689",acc:"#7aa2f7",acc2:"#bb9af7",ok:"#9ece6a",err:"#f7768e",bd:"#262d3a"},
 "Dracula":{bg:"#1e1f29",bg2:"#282a36",fg:"#f8f8f2",dim:"#6272a4",acc:"#bd93f9",acc2:"#ff79c6",ok:"#50fa7b",err:"#ff5555",bd:"#3a3d4f"},
 "Matrix":{bg:"#020a04",bg2:"#06140a",fg:"#8dffa8",dim:"#2f7a45",acc:"#39ff6a",acc2:"#00e5a0",ok:"#39ff6a",err:"#ff4d6d",bd:"#0f3a1c"},
 "Nord":{bg:"#2e3440",bg2:"#3b4252",fg:"#e5e9f0",dim:"#7b88a1",acc:"#88c0d0",acc2:"#b48ead",ok:"#a3be8c",err:"#bf616a",bd:"#4c566a"},
 "Sunset":{bg:"#1a1019",bg2:"#241621",fg:"#ffe9dc",dim:"#9a7a80",acc:"#ff9e64",acc2:"#ff5f8f",ok:"#c3e88d",err:"#ff5370",bd:"#3b2433"},
 "Paper":{bg:"#fbf8f1",bg2:"#efe9dc",fg:"#2b2a33",dim:"#8a8576",acc:"#3b5bdb",acc2:"#9c36b5",ok:"#2f9e44",err:"#e03131",bd:"#d9d1bd"},
 "Cyberpunk":{bg:"#0b0014",bg2:"#14002a",fg:"#f5e9ff",dim:"#8a6aa8",acc:"#00f0ff",acc2:"#ff2bd6",ok:"#39ff88",err:"#ff3860",bd:"#2e1450"},
 "Gruvbox":{bg:"#282828",bg2:"#32302f",fg:"#ebdbb2",dim:"#928374",acc:"#fabd2f",acc2:"#d3869b",ok:"#b8bb26",err:"#fb4934",bd:"#504945"},
 "Solarized":{bg:"#002b36",bg2:"#073642",fg:"#93a1a1",dim:"#586e75",acc:"#268bd2",acc2:"#6c71c4",ok:"#859900",err:"#dc322f",bd:"#0a4452"},
 "Catppuccin":{bg:"#1e1e2e",bg2:"#181825",fg:"#cdd6f4",dim:"#7f849c",acc:"#89b4fa",acc2:"#cba6f7",ok:"#a6e3a1",err:"#f38ba8",bd:"#313244"},
 "Rosé Pine":{bg:"#191724",bg2:"#1f1d2e",fg:"#e0def4",dim:"#6e6a86",acc:"#c4a7e7",acc2:"#ebbcba",ok:"#9ccfd8",err:"#eb6f92",bd:"#26233a"},
 "Synthwave":{bg:"#1a1033",bg2:"#241546",fg:"#f0e6ff",dim:"#8b72c0",acc:"#ff7edb",acc2:"#36f9f6",ok:"#72f1b8",err:"#fe4450",bd:"#3a2468"},
 "Ocean":{bg:"#0a192f",bg2:"#112240",fg:"#ccd6f6",dim:"#8892b0",acc:"#64ffda",acc2:"#7aa2f7",ok:"#64ffda",err:"#ff6b6b",bd:"#233554"},
 "Monokai":{bg:"#272822",bg2:"#1e1f1c",fg:"#f8f8f2",dim:"#75715e",acc:"#a6e22e",acc2:"#f92672",ok:"#a6e22e",err:"#f92672",bd:"#3e3d32"},
 "Ember":{bg:"#1c0f0a",bg2:"#2a1710",fg:"#ffe8d6",dim:"#a8806b",acc:"#ff7a1a",acc2:"#ffc300",ok:"#b5e48c",err:"#ff4d4d",bd:"#44251a"},
 "Midnight OLED":{bg:"#000000",bg2:"#0a0a0a",fg:"#e6e6e6",dim:"#666666",acc:"#ffffff",acc2:"#9aa0ff",ok:"#7cfc9a",err:"#ff6b6b",bd:"#1c1c1c"}
};
const MODES={
 general:{name:"General",note:"All-purpose assistant",sys:"You are a helpful, sharp assistant."},
 coder:{name:"Coder",note:"Writes real code files",sys:"You are an expert software engineer. Write clean, working code and save it as proper files."},
 designer:{name:"Web Designer",note:"Builds gorgeous HTML pages",sys:"You are a top web designer. Build polished, self-contained HTML/CSS/JS pages with distinctive style and save them as .html files."},
 writer:{name:"Writer",note:"Docs, essays, copy",sys:"You are a skilled writer and editor. Save longer pieces as .md files."},
 analyst:{name:"Analyst",note:"Data, CSVs, reports",sys:"You are a rigorous data analyst. Produce CSV/JSON/Markdown files for structured results."}
};
const PROV={
 claudeai:{n:"Claude (inside claude.ai)",nokey:1},
 anthropic:{n:"Anthropic",url:"https://api.anthropic.com/v1/messages",k:"a"},
 openai:{n:"OpenAI",url:"https://api.openai.com/v1/chat/completions"},
 gemini:{n:"Google Gemini",k:"g"},
 groq:{n:"Groq",url:"https://api.groq.com/openai/v1/chat/completions"},
 openrouter:{n:"OpenRouter",url:"https://openrouter.ai/api/v1/chat/completions"},
 mistral:{n:"Mistral",url:"https://api.mistral.ai/v1/chat/completions"},
 deepseek:{n:"DeepSeek",url:"https://api.deepseek.com/chat/completions"},
 xai:{n:"xAI",url:"https://api.x.ai/v1/chat/completions"},
 ollama:{n:"Ollama (local)",url:"http://localhost:11434/v1/chat/completions",nokey:1}
};
// [provider, model id, display name, note, claude.ai tier]. Add your own with /addmodel.
const DEF=[
 ["claudeai","claude-sonnet-5-5","Claude Sonnet 5.5","Free inside claude.ai","default"],
 ["claudeai","claude-haiku-5-5","Claude Haiku 5.5","Free inside claude.ai","quick"],
 ["claudeai","claude-opus-5-5","Claude Opus 5.5","Free inside claude.ai","complex"],
 ["anthropic","claude-sonnet-5-5","Claude Sonnet 5.5","Anthropic API"],
 ["anthropic","claude-haiku-5-5","Claude Haiku 5.5","Anthropic API"],
 ["anthropic","claude-opus-5-5","Claude Opus 5.5","Anthropic API"],
 ["openai","gpt-4o","GPT-4o","OpenAI"],
 ["openai","gpt-4o-mini","GPT-4o mini","OpenAI"],
 ["openai","gpt-4.1","GPT-4.1","OpenAI"],
 ["gemini","gemini-2.5-pro","Gemini 2.5 Pro","Google"],
 ["gemini","gemini-2.5-flash","Gemini 2.5 Flash","Google"],
 ["groq","llama-3.3-70b-versatile","Llama 3.3 70B","Groq (very fast)"],
 ["groq","llama-3.1-8b-instant","Llama 3.1 8B","Groq (instant)"],
 ["openrouter","meta-llama/llama-3.3-70b-instruct","Llama 3.3 70B","OpenRouter"],
 ["openrouter","deepseek/deepseek-chat","DeepSeek Chat","OpenRouter"],
 ["openrouter","qwen/qwen-2.5-72b-instruct","Qwen 2.5 72B","OpenRouter"],
 ["openrouter","mistralai/mistral-large","Mistral Large","OpenRouter"],
 ["mistral","mistral-large-latest","Mistral Large","Mistral"],
 ["mistral","codestral-latest","Codestral","Mistral (code)"],
 ["deepseek","deepseek-chat","DeepSeek V3","DeepSeek"],
 ["deepseek","deepseek-reasoner","DeepSeek R1","DeepSeek (reasoning)"],
 ["xai","grok-3","Grok 3","xAI"],
 ["xai","grok-3-mini","Grok 3 mini","xAI"],
 ["ollama","llama3.2","Llama 3.2 (local)","Runs on your PC"],
 ["ollama","qwen2.5-coder","Qwen 2.5 Coder (local)","Runs on your PC"]
];
const ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}};
const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
let cfg=Object.assign({theme:"Tokyo Night",fs:14,op:100,model:"openai/gpt-4o-mini",custom:[]},ld("prism_cfg",{}));
let KEYS=ld("prism_keys",{}),files=ld("prism_fs",{});
const save=()=>sv("prism_cfg",cfg),fsSave=()=>sv("prism_fs",files);
let tabs=[],cur=null,n=0,sample=null,busy=false,hist=[],hi=0,ctl=null,edP=null,pal=[],pi=0,ML={};
function buildModels(){ML={};[...DEF,...cfg.custom.map(c=>[c.p,c.id,c.name||c.id,"custom"])].forEach(([p,id,name,note,tier])=>{if(p==="claudeai"&&!sample)return;ML[p+"/"+id]={p,id,name,note,tier}})}
buildModels();
const normP=p=>String(p||"").trim().replace(/^(\.?\/)+/,"").replace(/\.\.+\//g,"");
const icon=p=>({html:"🌐",md:"📝",json:"🧾",csv:"📊",py:"🐍",js:"📜",css:"🎨",txt:"📄"}[(p.split(".").pop()||"").toLowerCase()]||"📄");
const esc=s=>s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const attr=s=>esc(s).replace(/"/g,"&quot;");
function md(s){
 return esc(s).replace(/```(\w*)\n?([\s\S]*?)(```|$)/g,(m,l,c)=>"<pre><code>"+c.replace(/\n$/,"")+"</code></pre>").replace(/`([^`\n]+)`/g,"<code>$1</code>").replace(/\*\*([^*\n]+)\*\*/g,"<b>$1</b>");
}
function fmt(s){return md(s.replace(/<<<FILE:([^>\n]+)>>>[\s\S]*?(<<<END>>>|$)/g,(m,p,e)=>"\u0001"+p.trim()+(e?"":" …")+"\u0002")).replace(/\u0001([^\u0002]*)\u0002/g,'<div class="fc">✚ <b>$1</b></div>')}
const scroll=()=>{out.scrollTop=out.scrollHeight};
function line(html,cls){const d=document.createElement("div");d.className="ln "+(cls||"");d.innerHTML=html;cur.el.append(d);scroll();return d}

function applyTheme(){
 const t=THEMES[cfg.theme]||THEMES["Tokyo Night"],r=document.documentElement.style;
 for(const k in t)r.setProperty("--"+k,t[k]);
 if(cfg.acc)r.setProperty("--acc",cfg.acc);
 $("#ac").value=cfg.acc||t.acc;r.setProperty("--fs",cfg.fs+"px");r.setProperty("--op",cfg.op/100);
 $("#fs").value=cfg.fs;$("#op").value=cfg.op;renderPanel();save();
}
function setTheme(k){cfg.theme=k;cfg.acc=null;applyTheme();if(cur)status()}
function renderPanel(){
 const sw=$("#sw");sw.innerHTML="";
 for(const k in THEMES){const b=document.createElement("button");b.textContent=k;b.style.background=THEMES[k].bg;b.style.color=THEMES[k].acc;if(k===cfg.theme)b.className="on";b.onclick=()=>setTheme(k);sw.append(b)}
 const sel=$("#msel");sel.innerHTML="";const g={};
 for(const k in ML){const m=ML[k];(g[m.p]=g[m.p]||document.createElement("optgroup")).label=PROV[m.p].n;const o=document.createElement("option");o.value=k;o.textContent=m.name+(PROV[m.p].nokey||KEYS[m.p]?"":"  🔒");g[m.p].append(o)}
 Object.values(g).forEach(x=>sel.append(x));if(cur)sel.value=cur.model;
 sel.onchange=()=>setModel(sel.value);
 const md2=$("#modes");md2.innerHTML="";
 for(const k in MODES){const b=document.createElement("button");if(cur&&cur.mode===k)b.className="on";b.innerHTML=MODES[k].name+"<small>"+MODES[k].note+"</small>";b.onclick=()=>setMode(k);md2.append(b)}
 const ke=$("#keys");ke.innerHTML="";
 for(const p in PROV){if(PROV[p].nokey)continue;const l=document.createElement("label");l.textContent=PROV[p].n;const i=document.createElement("input");i.type="password";i.placeholder="paste API key";i.autocomplete="off";i.value=KEYS[p]||"";i.oninput=()=>{KEYS[p]=i.value.trim();sv("prism_keys",KEYS)};i.onchange=()=>renderPanel();ke.append(l,i)}
}
function newTab(model){
 const t={id:++n,title:"session-"+n,model:model||(cur?cur.model:cfg.model),msgs:[],mode:cur?cur.mode:"general",el:document.createElement("div")};
 tabs.push(t);switchTo(t);
 line('<span class="acc">◆ Prism Terminal</span> <span class="dim">· made by Trent · tab '+t.id+'</span>');
 line('<span class="dim">Type a message to chat. /help for commands · /key to add an API key · Ctrl+K for the palette.</span>');line("");return t;
}
function switchTo(t){cur=t;out.replaceChildren(t.el);renderTabs();status();renderPanel();scroll();inp.focus()}
function closeTab(t){
 if(tabs.length===1)return line('<span class="err">Cannot close the last tab.</span>');
 const i=tabs.indexOf(t);tabs.splice(i,1);
 if(cur===t){cur=null;switchTo(tabs[Math.max(0,i-1)])}else renderTabs();
}
function renderTabs(){
 const el=$("#tabs");el.innerHTML="";
 tabs.forEach(t=>{const d=document.createElement("div");d.className="tab"+(t===cur?" on":"");
  d.innerHTML='<i class="m"></i><span class="t">'+esc(t.title)+'</span><span class="x">×</span>';
  d.onclick=()=>t!==cur&&switchTo(t);d.querySelector(".x").onclick=e=>{e.stopPropagation();closeTab(t)};
  d.ondblclick=()=>{const v=prompt("Rename tab",t.title);if(v){t.title=v;renderTabs()}};el.append(d)});
}
const mOf=t=>ML[t.model]||ML[Object.keys(ML)[0]];
function status(){
 $("#ps").innerHTML="<b>"+esc(cur.title)+"</b> ❯";
 $("#s1").textContent="tab "+(tabs.indexOf(cur)+1)+" of "+tabs.length+" · "+cur.msgs.length+" msgs";
 $("#s2").textContent="◆ "+mOf(cur).name+" · "+MODES[cur.mode].name;
 $("#s3").textContent=cfg.theme;
}
function findModel(a){a=a.toLowerCase();if(ML[a])return a;return Object.keys(ML).find(k=>k.toLowerCase().includes(a)||ML[k].name.toLowerCase().includes(a))}
function setModel(k){
 const key=ML[k]?k:findModel(k||"");
 if(!key)return line('<span class="err">No such model. Try /models or /addmodel</span>');
 cur.model=key;cfg.model=key;save();status();renderPanel();
 const m=ML[key];line('<span class="ok">✓ Model: '+esc(m.name)+'</span> <span class="dim">('+PROV[m.p].n+')</span>'+(PROV[m.p].nokey||KEYS[m.p]?"":' <span class="err">no key yet: /key '+m.p+' YOUR_KEY</span>'));
}
function setMode(k){if(!MODES[k])return line('<span class="err">Unknown mode. Try /modes</span>');cur.mode=k;status();renderPanel();line('<span class="ok">✓ Mode: '+MODES[k].name+'</span>')}

function renderFiles(){
 const el=$("#fl");el.innerHTML="";const ks=Object.keys(files).sort();
 if(!ks.length){el.innerHTML='<div class="dim">No files yet. Ask the AI to create one, e.g. “build me a landing page”.</div>';return}
 ks.forEach(p=>{const d=document.createElement("div");d.className="fi";
  d.innerHTML='<span>'+icon(p)+'</span><span class="n" title="'+attr(p)+'">'+esc(p)+'</span><b title="Open">▶</b><b title="Download">⬇</b><b title="Delete">✕</b>';
  const [v,s,x]=d.querySelectorAll("b");
  d.querySelector(".n").onclick=()=>run("/cat "+p);v.onclick=()=>/\.html?$/i.test(p)?preview(p):edit(p);s.onclick=()=>dl(p);x.onclick=()=>{delete files[p];fsSave();renderFiles()};
  el.append(d)});
}
function dl(p){
 if(files[p]===undefined)return line('<span class="err">No such file: '+esc(p)+'</span>');
 const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([files[p]],{type:"text/plain"}));a.download=p.split("/").pop();document.body.append(a);a.click();a.remove();
 line('<span class="ok">✓ Downloading '+esc(a.download)+'</span>');
}
function preview(p){
 if(files[p]===undefined)return line('<span class="err">No such file: '+esc(p)+'</span>');
 $("#pv iframe").srcdoc=files[p];$("#pv span").textContent="▶ "+p;$("#pv").classList.add("show");
}
function edit(p){edP=normP(p);if(!edP)return;$("#ed>div>span").textContent="✎ "+edP;const ta=$("#ed textarea");ta.value=files[edP]||"";$("#ed").classList.add("show");ta.focus()}
function edSave(){const v=$("#ed textarea").value;if(edP&&v){files[edP]=v;fsSave();renderFiles();line('<span class="ok">✓ Saved '+esc(edP)+'</span>')}$("#ed").classList.remove("show");inp.focus()}

async function sse(res,pick,on){
 const rd=res.body.getReader(),dc=new TextDecoder();let buf="",full="";
 for(;;){const {done,value}=await rd.read();if(done)break;buf+=dc.decode(value,{stream:true});let i;
  while((i=buf.indexOf("\n"))>=0){const ln=buf.slice(0,i).trim();buf=buf.slice(i+1);if(ln.indexOf("data:")!==0)continue;const d=ln.slice(5).trim();if(d==="[DONE]")continue;
   try{const x=pick(JSON.parse(d));if(x){full+=x;on(full)}}catch(e){}}}
 return full;
}
async function chat(M,sys,msgs,on,sig){
 const P=PROV[M.p],key=KEYS[M.p];
 if(M.p==="claudeai"){const pl=msgs.map((m,i)=>i?m:{role:m.role,content:sys+"\n\n"+m.content});const r=await sample(pl,{model:M.id,modelTier:M.tier,cache:false,signal:sig,onText:({text})=>on(text)});return r.text}
 let url=P.url;const h={"Content-Type":"application/json"};let b;
 if(P.k==="a"){h["x-api-key"]=key;h["anthropic-version"]="2023-06-01";h["anthropic-dangerous-direct-browser-access"]="true";b={model:M.id,max_tokens:8192,system:sys,messages:msgs,stream:true}}
 else if(P.k==="g"){url="https://generativelanguage.googleapis.com/v1beta/models/"+M.id+":streamGenerateContent?alt=sse";h["x-goog-api-key"]=key;b={systemInstruction:{parts:[{text:sys}]},contents:msgs.map(m=>({role:m.role==="assistant"?"model":"user",parts:[{text:m.content}]}))}}
 else{if(key)h.Authorization="Bearer "+key;b={model:M.id,stream:true,messages:[{role:"system",content:sys},...msgs]}}
 const res=await fetch(url,{method:"POST",headers:h,body:JSON.stringify(b),signal:sig});
 if(!res.ok)throw new Error(res.status+" "+(await res.text()).slice(0,300));
 const pick=P.k==="a"?x=>x.type==="content_block_delta"&&x.delta&&x.delta.text:P.k==="g"?x=>x.candidates&&x.candidates[0]&&x.candidates[0].content&&(x.candidates[0].content.parts||[]).map(p=>p.text||"").join(""):x=>x.choices&&x.choices[0]&&x.choices[0].delta&&x.choices[0].delta.content;
 return sse(res,pick,on);
}
function addCopy(b){b.querySelectorAll("pre").forEach(p=>{const c=document.createElement("button");c.className="cp";c.textContent="copy";c.onclick=()=>{const cd=p.querySelector("code");try{navigator.clipboard.writeText(cd?cd.innerText:"")}catch(e){}c.textContent="copied ✓"};p.prepend(c)})}
async function ask(text){
 if(busy)return;
 const t=cur,M=mOf(t),P=PROV[M.p];
 if(!P.nokey&&!KEYS[M.p])return line('<span class="err">No API key for '+P.n+'.</span> <span class="dim">Run /key '+M.p+' YOUR_KEY, or open ⚙ settings. Or pick another model with /models.</span>');
 busy=true;ctl=new AbortController();$("#stop").style.display="inline";const t0=performance.now();
 const box=document.createElement("div");box.className="ai";
 box.innerHTML='<div class="who">◆ '+esc(M.name.toUpperCase())+' · '+MODES[t.mode].name.toUpperCase()+'</div><div class="body cur"><span class="dim">Thinking…</span></div><div class="fn"></div>';
 t.el.append(box);scroll();
 const body=box.querySelector(".body"),fn=box.querySelector(".fn");let part="";
 const refs=Object.keys(files).filter(p=>text.includes(p)).map(p=>"\n\n[Current contents of "+p+"]\n"+files[p]).join("");
 const msgs=[...t.msgs,{role:"user",content:text+refs}];
 const sys=MODES[t.mode].sys+(t.sys?" "+t.sys:"")+" You live inside a terminal emulator. Be concise; plain text, short paragraphs, no headers or tables. To create or overwrite a file, output a line <<<FILE:path/name.ext>>>, then the complete file contents, then a line <<<END>>>. Never wrap the contents in markdown fences. Use this for any substantial code, page, document or data, then add one or two lines on what you made (the user can /preview .html files, /cat to read, /save to download). Workspace files: "+(Object.keys(files).join(", ")||"none")+".";
 try{
  const full=await chat(M,sys,msgs,x=>{part=x;body.innerHTML=fmt(x);if(cur===t)scroll()},ctl.signal);
  part=full||part;body.classList.remove("cur");body.innerHTML=fmt(part);addCopy(body);
  t.msgs=[...msgs.slice(0,-1),{role:"user",content:text},{role:"assistant",content:part}];
 }catch(e){
  body.classList.remove("cur");
  if(ctl.signal.aborted||(e&&e.name==="AbortError")){body.innerHTML=fmt(part)+'<div class="dim">■ stopped</div>';if(part)t.msgs=[...msgs.slice(0,-1),{role:"user",content:text},{role:"assistant",content:part}]}
  else body.innerHTML=fmt(part)+'<div class="err">'+esc((e&&e.message)||"Request failed")+(/Failed to fetch|NetworkError/i.test((e&&e.message)||"")?" — network/CORS problem. Check your key, connection, or (Ollama) OLLAMA_ORIGINS.":"")+'</div>';
 }
 const re=/<<<FILE:([^>\n]+)>>>\n?([\s\S]*?)\n?<<<END>>>/g;let m,c=0;
 while((m=re.exec(part))){const p=normP(m[1]);if(!p)continue;files[p]=m[2];c++;const d=document.createElement("div");d.innerHTML='✚ saved <span class="acc">'+esc(p)+'</span> <span class="dim">· '+m[2].split("\n").length+' lines</span>';fn.append(d)}
 if(c){fsSave();renderFiles()}
 busy=false;$("#stop").style.display="none";$("#s4").textContent=((performance.now()-t0)/1000).toFixed(1)+"s";status();if(cur===t)scroll();
}

const HELP=[
 ["/help","show this list"],["/models","list all models (🔒 = needs a key)"],["/model &lt;name&gt;","switch model, e.g. /model gpt-4o"],
 ["/key &lt;prov&gt; &lt;key&gt;","save an API key: openai, anthropic, gemini, groq, openrouter, mistral, deepseek, xai"],["/keys","show which keys are set"],
 ["/addmodel &lt;prov&gt; &lt;id&gt; [name]","add any model ID to a provider"],["/rmmodel &lt;name&gt;","remove a custom model"],
 ["/theme &lt;name&gt;","change theme (/themes lists 16)"],["/font &lt;11-20&gt;","font size"],["/new · /close · /rename","manage tabs"],["/fork","duplicate tab with its conversation"],
 ["/modes · /mode &lt;name&gt;","AI personas"],["/system &lt;text&gt;","custom instructions for this tab"],["/retry","regenerate last answer"],
 ["/ls · /cat · /rm &lt;f&gt;","list, read, delete files"],["/edit &lt;f&gt; · /preview &lt;f&gt; · /save &lt;f&gt;","edit, run HTML, download"],["/export","download transcript"],
 ["/calc &lt;expr&gt;","calculator"],["/stats · /time","info"],["/clear","clear screen and memory"],["/matrix · /palette","fun · Ctrl+K"],["/neofetch","about"]
];
const CMDS=["/help","/models","/model ","/key ","/keys","/addmodel ","/rmmodel ","/theme ","/themes","/font ","/new","/close","/rename ","/fork","/modes","/mode ","/system ","/retry","/ls","/cat ","/rm ","/edit ","/preview ","/save ","/export","/calc ","/stats","/time","/clear","/matrix","/palette","/neofetch"];
async function run(raw){
 const v=raw.trim();if(!v)return;hist.push(v);hi=hist.length;
 line('<span class="p">'+esc(cur.title)+'</span> <span class="a">❯</span> '+esc(v),"cmd");
 if(v[0]!=="/")return ask(v);
 const [c,...r]=v.slice(1).split(/\s+/),a=r.join(" ");
 switch(c){
  case "help":HELP.forEach(h=>line('  <span class="acc">'+h[0]+'</span>\n      <span class="dim">'+h[1]+'</span>'));break;
  case "models":{let last="";for(const k in ML){const m=ML[k];if(m.p!==last){line('\n<span class="acc2" style="color:var(--acc2)">'+PROV[m.p].n+'</span>');last=m.p}line('  '+(k===cur.model?'<span class="ok">●</span>':'○')+' '+esc(m.name)+' <span class="dim">'+esc(m.id)+(PROV[m.p].nokey||KEYS[m.p]?"":" 🔒")+'</span>')}break}
  case "model":setModel(a);break;
  case "key":{const [p,...k]=a.split(/\s+/);if(!PROV[p]||PROV[p].nokey)line('<span class="err">Usage: /key &lt;provider&gt; &lt;key&gt;. Providers: '+Object.keys(PROV).filter(x=>!PROV[x].nokey).join(", ")+'</span>');else{KEYS[p]=k.join("");sv("prism_keys",KEYS);renderPanel();line('<span class="ok">✓ Key saved for '+PROV[p].n+'</span>')}break}
  case "keys":Object.keys(PROV).filter(p=>!PROV[p].nokey).forEach(p=>line('  '+(KEYS[p]?'<span class="ok">●</span>':'○')+' '+PROV[p].n));break;
  case "addmodel":{const [p,id,...nm]=a.split(/\s+/);if(!PROV[p]||!id)line('<span class="err">Usage: /addmodel &lt;provider&gt; &lt;model-id&gt; [display name]</span>');else{cfg.custom.push({p,id,name:nm.join(" ")||id});save();buildModels();renderPanel();line('<span class="ok">✓ Added '+esc(id)+' to '+PROV[p].n+'</span>')}break}
  case "rmmodel":{const k=findModel(a);const i=cfg.custom.findIndex(x=>x.p+"/"+x.id===k);if(i<0)line('<span class="err">Not a custom model</span>');else{cfg.custom.splice(i,1);save();buildModels();renderPanel();line('<span class="ok">✓ Removed</span>')}break}
  case "themes":Object.keys(THEMES).forEach(k=>line('  <span class="acc">'+k+'</span>'));break;
  case "theme":{const k=Object.keys(THEMES).find(x=>x.toLowerCase()===a.toLowerCase());if(k){setTheme(k);line('<span class="ok">✓ Theme: '+k+'</span>')}else line('<span class="err">Unknown theme. Try /themes</span>');break}
  case "font":{const s=+a;if(s>=11&&s<=20){cfg.fs=s;applyTheme()}else line('<span class="err">Use a size from 11 to 20</span>');break}
  case "new":newTab();break;
  case "close":closeTab(cur);break;
  case "rename":if(a){cur.title=a;renderTabs();status()}break;
  case "fork":{const m=cur.msgs.slice(),mo=cur.mode,sy=cur.sys,ot=cur.title,t=newTab(cur.model);t.msgs=m;t.mode=mo;t.sys=sy;t.title=ot+" (fork)";renderTabs();status();line('<span class="dim">↳ forked with '+m.length+' messages of context</span>');break}
  case "modes":for(const k in MODES)line('  '+(k===cur.mode?'<span class="ok">●</span>':'○')+' <span class="acc">'+k.padEnd(9)+'</span> '+MODES[k].name+' <span class="dim">— '+MODES[k].note+'</span>');break;
  case "mode":setMode(a.toLowerCase());break;
  case "system":cur.sys=a;line(a?'<span class="ok">✓ Custom instructions set for this tab</span>':'<span class="dim">Custom instructions cleared</span>');break;
  case "retry":{const m=cur.msgs;if(m.length>=2){const u=m[m.length-2].content;cur.msgs=m.slice(0,-2);ask(u)}else line('<span class="err">Nothing to retry</span>');break}
  case "ls":{const ks=Object.keys(files).sort();if(!ks.length)line('<span class="dim">No files yet.</span>');ks.forEach(p=>line('  '+icon(p)+' <span class="acc">'+esc(p)+'</span> <span class="dim">'+files[p].length+' chars</span>'));break}
  case "cat":if(files[a]!==undefined)line(esc(files[a]));else line('<span class="err">No such file: '+esc(a)+'</span>');break;
  case "rm":if(files[a]!==undefined){delete files[a];fsSave();renderFiles();line('<span class="ok">✓ Deleted '+esc(a)+'</span>')}else line('<span class="err">No such file: '+esc(a)+'</span>');break;
  case "edit":if(a)edit(a);else line('<span class="err">Usage: /edit &lt;file&gt;</span>');break;
  case "preview":preview(a);break;
  case "save":dl(a);break;
  case "files":$("#fp").classList.toggle("hide");break;
  case "export":{const nm="transcript-"+cur.title+".md";files[nm]="# "+cur.title+"\n\n"+cur.msgs.map(m=>"**"+(m.role==="user"?"You":mOf(cur).name)+"**\n\n"+m.content).join("\n\n---\n\n");fsSave();renderFiles();dl(nm);break}
  case "calc":try{const ex=a.replace(/\^/g,"**"),ok=Object.getOwnPropertyNames(Math);if(!/^[\d\s+\-*/().%,a-zA-Z_]+$/.test(ex)||(ex.match(/[a-zA-Z_]+/g)||[]).some(w=>!ok.includes(w)))throw 0;line('<span class="acc">= '+Function("with(Math){return ("+ex+")}")()+'</span>')}catch(e){line('<span class="err">Cannot evaluate. Try /calc sqrt(2)*3^2</span>')}break;
  case "stats":line('  tabs '+tabs.length+' · messages '+tabs.reduce((s,x)=>s+x.msgs.length,0)+' · files '+Object.keys(files).length+' · models '+Object.keys(ML).length);break;
  case "time":line('<span class="acc">'+new Date().toLocaleString()+'</span>');break;
  case "clear":cur.el.innerHTML="";cur.msgs=[];status();break;
  case "matrix":matrix();break;
  case "palette":palOpen();break;
  case "neofetch":line('<span class="acc">   ◆◆◆◆◆</span>   <b>prism</b>@terminal  <span class="dim">made by Trent</span>\n<span class="acc">  ◆     ◆</span>  ─────────────\n<span class="acc">  ◆ ◆◆◆ ◆</span>  <span style="color:var(--acc2)">Theme</span>   '+cfg.theme+'\n<span class="acc">  ◆     ◆</span>  <span style="color:var(--acc2)">Model</span>   '+esc(mOf(cur).name)+'\n<span class="acc">   ◆◆◆◆◆</span>   <span style="color:var(--acc2)">Models</span>  '+Object.keys(ML).length+' across '+new Set(Object.values(ML).map(m=>m.p)).size+' providers');break;
  default:line('<span class="err">Command not found: /'+esc(c)+'</span> <span class="dim">(try /help)</span>');
 }
}
function palItems(){
 const it=[{n:"New tab",f:()=>newTab()},{n:"Close tab",f:()=>closeTab(cur)},{n:"Fork tab",f:()=>run("/fork")},{n:"Toggle files sidebar",f:()=>$("#fp").classList.toggle("hide")},{n:"Open settings and API keys",f:()=>$("#panel").classList.add("show")},{n:"Clear screen",f:()=>run("/clear")},{n:"Export transcript",f:()=>run("/export")},{n:"Matrix rain",f:()=>matrix()}];
 for(const k in ML)it.push({n:"Model: "+ML[k].name+" ("+PROV[ML[k].p].n+")",f:()=>setModel(k)});
 for(const k in MODES)it.push({n:"Mode: "+MODES[k].name,f:()=>setMode(k)});
 for(const k in THEMES)it.push({n:"Theme: "+k,f:()=>setTheme(k)});
 Object.keys(files).forEach(p=>it.push({n:"Edit file: "+p,f:()=>edit(p)}));
 return it;
}
function palOpen(q){$("#pal").classList.add("show");$("#pq").value=q||"";palFilter();$("#pq").focus()}
function palClose(){$("#pal").classList.remove("show");inp.focus()}
function palFilter(){const q=$("#pq").value.toLowerCase();pal=palItems().filter(x=>x.n.toLowerCase().includes(q));pi=0;palDraw()}
function palDraw(){const l=$("#pl");l.innerHTML="";pal.forEach((x,i)=>{const d=document.createElement("div");d.className="pi"+(i===pi?" on":"");d.textContent=x.n;d.onclick=()=>{palClose();x.f()};l.append(d)})}
function matrix(){
 const c=$("#mx"),x=c.getContext("2d");c.width=innerWidth;c.height=innerHeight;c.style.display="block";const y=Array(Math.floor(c.width/16)).fill(0);let on=true;
 const stop=()=>{on=false;c.style.display="none";removeEventListener("keydown",stop);c.onclick=null};
 setTimeout(()=>{addEventListener("keydown",stop);c.onclick=stop},300);
 (function f(){if(!on)return;x.fillStyle="#0003";x.fillRect(0,0,c.width,c.height);x.fillStyle="#39ff6a";x.font="14px monospace";y.forEach((v,i)=>{x.fillText(String.fromCharCode(0x30a0+Math.random()*96),i*16,v*16);y[i]=v*16>c.height&&Math.random()>.975?0:v+1});requestAnimationFrame(f)})();
}

$("#pq").oninput=palFilter;
$("#pq").onkeydown=e=>{if(e.key==="Escape")palClose();else if(e.key==="ArrowDown"){pi=Math.min(pal.length-1,pi+1);palDraw();e.preventDefault()}else if(e.key==="ArrowUp"){pi=Math.max(0,pi-1);palDraw();e.preventDefault()}else if(e.key==="Enter"&&pal[pi]){const x=pal[pi];palClose();x.f()}};
inp.addEventListener("keydown",e=>{
 if(e.key==="Enter"){const v=inp.value;inp.value="";run(v)}
 else if(e.key==="ArrowUp"){if(hi>0){inp.value=hist[--hi];e.preventDefault()}}
 else if(e.key==="ArrowDown"){hi=Math.min(hist.length,hi+1);inp.value=hist[hi]||"";e.preventDefault()}
 else if(e.key==="Tab"){e.preventDefault();const c=CMDS.find(x=>inp.value&&x.startsWith(inp.value));if(c)inp.value=c}
});
document.addEventListener("keydown",e=>{
 if((e.metaKey||e.ctrlKey)&&e.key==="k"){e.preventDefault();palOpen()}
 if(e.key==="Escape"){if(ctl&&busy)ctl.abort();$("#ed").classList.remove("show");$("#pv").classList.remove("show");$("#panel").classList.remove("show")}
 if((e.metaKey||e.ctrlKey)&&e.key==="t"){e.preventDefault();newTab()}
 if((e.metaKey||e.ctrlKey)&&e.key==="w"){e.preventDefault();closeTab(cur)}
 if(e.altKey&&/^[1-9]$/.test(e.key)&&tabs[e.key-1])switchTo(tabs[e.key-1]);
});
out.addEventListener("click",()=>{if(!getSelection().toString())inp.focus()});
$("#add").onclick=()=>newTab();
$("#gear").onclick=()=>$("#panel").classList.toggle("show");
$("#fbtn").onclick=()=>$("#fp").classList.toggle("hide");
$("#s2").onclick=()=>palOpen("Model: ");
$("#stop").onclick=()=>ctl&&ctl.abort();
$("#pv button").onclick=()=>$("#pv").classList.remove("show");
$("#eds").onclick=edSave;$("#edx").onclick=()=>$("#ed").classList.remove("show");
$("#ed textarea").onkeydown=e=>{if((e.metaKey||e.ctrlKey)&&e.key==="s"){e.preventDefault();edSave()}else if(e.key==="Tab"){e.preventDefault();document.execCommand("insertText",false,"  ")}};
$("#fs").oninput=e=>{cfg.fs=+e.target.value;applyTheme()};
$("#op").oninput=e=>{cfg.op=+e.target.value;applyTheme()};
$("#ac").oninput=e=>{cfg.acc=e.target.value;applyTheme()};
applyTheme();renderFiles();newTab(ML[cfg.model]?cfg.model:Object.keys(ML)[0]);
(async()=>{try{if(window.claude){sample=await claude.use("sample");if(sample){buildModels();if(!KEYS[mOf(cur).p]&&!PROV[mOf(cur).p].nokey){cur.model="claudeai/claude-sonnet-5-5";cfg.model=cur.model}renderPanel();status();line('<span class="ok">✓ Claude models available free inside claude.ai</span>')}}}catch(e){}})();
})();
