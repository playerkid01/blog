import{_ as c,p as r,v as d,c as l,o as v,ae as m}from"./chunks/framework.Cd-3tpCq.js";const g=JSON.parse('{"title":"📞 联系我","description":"","frontmatter":{},"headers":[],"relativePath":"docs/contact.md","filePath":"docs/contact.md"}'),u={name:"docs/contact.md"},p=Object.assign(u,{setup(h){const s=r([]),n=r({name:"",content:""});function o(){const t=localStorage.getItem("messages");t&&(s.value=JSON.parse(t))}return d(()=>{o();const t=document.getElementById("message-board");function a(){t.innerHTML=`
      <div class="message-form">
        <input type="text" placeholder="您的姓名" value="${n.value.name}" oninput="this.parentElement.parentElement.__vueParentComponent.proxy.formData.name = this.value">
        <textarea placeholder="请输入留言内容" oninput="this.parentElement.parentElement.__vueParentComponent.proxy.formData.content = this.value">${n.value.content}</textarea>
        <button onclick="this.parentElement.parentElement.__vueParentComponent.proxy.submitMessage()">提交留言</button>
      </div>
      <div class="message-list">
        ${s.value.length>0?s.value.map(e=>`
            <div class="message-item" data-id="${e.id}">
              <div class="message-header">
                <div class="message-name">${e.name}</div>
                <div class="message-date">${e.date}</div>
              </div>
              <div class="message-content">${e.content.replace(/\n/g,"<br>")}</div>
              <div class="message-actions">
                <button class="delete-btn" onclick="this.parentElement.parentElement.parentElement.__vueParentComponent.proxy.deleteMessage(${e.id})">🗑️ 删除</button>
              </div>
            </div>
          `).join(""):'<div class="no-messages">暂无留言，快来成为第一个留言的人吧！</div>'}
      </div>
    `}a(),new MutationObserver(a).observe(s.value,{attributes:!0,childList:!0,subtree:!0}),Object.keys(n.value).forEach(e=>{Object.defineProperty(n.value,e,{get(){return this["_"+e]},set(i){this["_"+e]=i,a()}})})}),(t,a)=>(v(),l("div",null,a[0]||(a[0]=[m('<h1 id="📞-联系我" tabindex="-1" data-v-c335275e>📞 联系我 <a class="header-anchor" href="#📞-联系我" aria-label="Permalink to &quot;📞 联系我&quot;" data-v-c335275e>​</a></h1><h2 id="关于我" tabindex="-1" data-v-c335275e>关于我 <a class="header-anchor" href="#关于我" aria-label="Permalink to &quot;关于我&quot;" data-v-c335275e>​</a></h2><p data-v-c335275e>你好！我是一名热爱编程的小学生，目前正在学习C++。这个网站是我分享学习心得和编程乐趣的地方。</p><h2 id="联系方式" tabindex="-1" data-v-c335275e>联系方式 <a class="header-anchor" href="#联系方式" aria-label="Permalink to &quot;联系方式&quot;" data-v-c335275e>​</a></h2><ul data-v-c335275e><li data-v-c335275e>📧 邮箱：3787530398@qq.com</li><li data-v-c335275e>🔗 B站：<a href="https://space.bilibili.com/3546673517168960" target="_blank" rel="noreferrer" data-v-c335275e>playerkid01的个人空间</a></li><li data-v-c335275e>🐱 GitHub：<a href="https://github.com/playerkid01" target="_blank" rel="noreferrer" data-v-c335275e>playerkid01</a></li></ul><h2 id="留言板" tabindex="-1" data-v-c335275e>留言板 <a class="header-anchor" href="#留言板" aria-label="Permalink to &quot;留言板&quot;" data-v-c335275e>​</a></h2><p data-v-c335275e>欢迎在下方留言，提出你的问题或建议：</p><div id="message-board" data-v-c335275e></div>',8)])))}}),f=c(p,[["__scopeId","data-v-c335275e"]]);export{g as __pageData,f as default};
