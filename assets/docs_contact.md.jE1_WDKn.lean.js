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
    `}a(),new MutationObserver(a).observe(s.value,{attributes:!0,childList:!0,subtree:!0}),Object.keys(n.value).forEach(e=>{Object.defineProperty(n.value,e,{get(){return this["_"+e]},set(i){this["_"+e]=i,a()}})})}),(t,a)=>(v(),l("div",null,a[0]||(a[0]=[m("",8)])))}}),f=c(p,[["__scopeId","data-v-c335275e"]]);export{g as __pageData,f as default};
