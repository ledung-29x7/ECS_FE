!async function(){let i=document.querySelector(".kanban-update-item-sidebar"),e=document.querySelector(".kanban-wrapper"),t=document.querySelector(".comment-editor"),a=document.querySelector(".kanban-add-new-board"),n=[].slice.call(document.querySelectorAll(".kanban-add-board-input")),d=document.querySelector(".kanban-add-board-btn"),r=document.querySelector("#due-date"),o=$(".select2"),l=document.querySelector("html").getAttribute("data-assets-path"),s=new bootstrap.Offcanvas(i);var c=await fetch(l+"json/kanban.json");function u(e){return e.id?"<div class='badge "+$(e.element).data("color")+" rounded-pill'> "+e.text+"</div>":e.text}function b(){return"<div class='dropdown'><i class='dropdown-toggle ri-more-2-line ri-20px cursor-pointer' id='board-dropdown' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'></i><div class='dropdown-menu dropdown-menu-end' aria-labelledby='board-dropdown'><a class='dropdown-item delete-board' href='javascript:void(0)'> <i class='ri-delete-bin-7-line'></i> <span class='align-middle'>Delete</span></a><a class='dropdown-item' href='javascript:void(0)'><i class='ri-edit-2-line'></i> <span class='align-middle'>Rename</span></a><a class='dropdown-item' href='javascript:void(0)'><i class='ri-archive-line'></i> <span class='align-middle'>Archive</span></a></div></div>"}function m(){return"<div class='dropdown kanban-tasks-item-dropdown'><i class='dropdown-toggle ri-more-2-line ri-20px text-muted' id='kanban-tasks-item-dropdown' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'></i><div class='dropdown-menu dropdown-menu-end' aria-labelledby='kanban-tasks-item-dropdown'><a class='dropdown-item' href='javascript:void(0)'>Copy task link</a><a class='dropdown-item' href='javascript:void(0)'>Duplicate task</a><a class='dropdown-item delete-task' href='javascript:void(0)'>Delete</a></div></div>"}function p(e,t,a,n,d){var r=t?" pull-up":"",i=a?"avatar-"+a:"",o=null==d?" ":d.split(",");return null==e?" ":e.split(",").map(function(e,t,a){a=n&&t!==a.length-1?" me-"+n:"";return"<div class='avatar "+i+a+"'data-bs-toggle='tooltip' data-bs-placement='top'title='"+o[t]+"'><img src='"+l+"img/avatars/"+e+"' alt='Avatar' class='rounded-circle "+r+"'></div>"}).join(" ")}c.ok||console.error("error",c),c=await c.json(),r&&r.flatpickr({monthSelectorType:"static",altInput:!0,altFormat:"j F, Y",dateFormat:"Y-m-d"}),o.length&&o.each(function(){var e=$(this);select2Focus(e),e.wrap("<div class='position-relative'></div>").select2({placeholder:"Select Label",dropdownParent:e.parent(),templateResult:u,templateSelection:u,escapeMarkup:function(e){return e}})}),t&&new Quill(t,{modules:{toolbar:".comment-toolbar"},placeholder:"Write a Comment... ",theme:"snow"});let v=new jKanban({element:".kanban-wrapper",gutter:"12px",widthBoard:"250px",dragItems:!0,boards:c,dragBoards:!0,addItemButton:!0,buttonContent:"+ Add Item",itemAddOptions:{enabled:!0,content:"+ Add New Item",class:"kanban-title-button btn btn-default text-heading fw-normal shadow-none text-capitalize",footer:!1},click:function(e){var t=e,a=(t.getAttribute("data-eid")?t.querySelector(".kanban-text"):t).textContent,n=t.getAttribute("data-due-date"),d=new Date,r=d.getFullYear(),n=n?n+", "+r:d.getDate()+" "+d.toLocaleString("en",{month:"long"})+", "+r,d=t.getAttribute("data-badge-text"),r=t.getAttribute("data-assigned");s.show(),i.querySelector("#title").value=a,i.querySelector("#due-date").nextSibling.value=n,$(".kanban-update-item-sidebar").find(o).val(d).trigger("change"),i.querySelector(".assigned").innerHTML="",i.querySelector(".assigned").insertAdjacentHTML("afterbegin",p(r,!1,"sm","2",e.getAttribute("data-members"))+"<div class='avatar avatar-sm ms-2'><span class='avatar-initial rounded-circle bg-label-secondary'><i class='ri-add-line'></i></span></div>")},buttonClick:function(e,a){let n=document.createElement("form");n.setAttribute("class","new-item-form"),n.innerHTML='<div class="mb-4"><textarea class="form-control add-new-item" rows="2" placeholder="Add Content" autofocus required></textarea></div><div class="mb-4"><button type="submit" class="btn btn-primary btn-sm me-4">Add</button><button type="button" class="btn btn-outline-secondary btn-sm cancel-add-item">Cancel</button></div>',v.addForm(a,n),n.addEventListener("submit",function(e){e.preventDefault();var t=[].slice.call(document.querySelectorAll(".kanban-board[data-id="+a+"] .kanban-item"));v.addElement(a,{title:"<span class='kanban-text'>"+e.target[0].value+"</span>",id:a+"-"+t.length+1});[].slice.call(document.querySelectorAll(".kanban-board[data-id="+a+"] .kanban-text")).forEach(function(e){e.insertAdjacentHTML("beforebegin",m())});e=[].slice.call(document.querySelectorAll(".kanban-item .kanban-tasks-item-dropdown"));e&&e.forEach(function(e){e.addEventListener("click",function(e){e.stopPropagation()})}),[].slice.call(document.querySelectorAll(".kanban-board[data-id="+a+"] .delete-task")).forEach(function(e){e.addEventListener("click",function(){var e=this.closest(".kanban-item").getAttribute("data-eid");v.removeElement(e)})}),n.remove()}),n.querySelector(".cancel-add-item").addEventListener("click",function(e){n.remove()})}}),g=(e&&new PerfectScrollbar(e),document.querySelector(".kanban-container")),f=[].slice.call(document.querySelectorAll(".kanban-title-board")),k=[].slice.call(document.querySelectorAll(".kanban-item"));k&&k.forEach(function(e){var t,a,n="<span class='kanban-text'>"+e.textContent+"</span>";let d="";null!==e.getAttribute("data-image")&&(d="<img class='img-fluid mb-2 rounded-3' src='"+l+"img/elements/"+e.getAttribute("data-image")+"'>"),e.textContent="",void 0!==e.getAttribute("data-badge")&&void 0!==e.getAttribute("data-badge-text")&&e.insertAdjacentHTML("afterbegin",(t=e.getAttribute("data-badge"),a=e.getAttribute("data-badge-text"),"<div class='d-flex justify-content-between flex-wrap align-items-center mb-2'><div class='item-badges d-flex'> <div class='badge rounded-pill bg-label-"+t+"'> "+a+"</div></div>"+m()+"</div>"+d+n)),void 0===e.getAttribute("data-comments")&&void 0===e.getAttribute("data-due-date")&&void 0===e.getAttribute("data-assigned")||e.insertAdjacentHTML("beforeend",(t=e.getAttribute("data-attachments"),a=e.getAttribute("data-comments"),n=e.getAttribute("data-assigned"),e=e.getAttribute("data-members"),"<div class='d-flex justify-content-between align-items-center flex-wrap mt-2'><div> <span class='align-middle me-4'><i class='ri-attachment-2 ri-20px me-1'></i><span class='attachments'>"+t+"</span></span> <span class='align-middle'><i class='ri-wechat-line ri-20px me-1'></i><span> "+a+" </span></span></div><div class='avatar-group d-flex align-items-center assigned-avatar'>"+p(n,!0,"xs",null,e)+"</div></div>"))});[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e){return new bootstrap.Tooltip(e)});c=[].slice.call(document.querySelectorAll(".kanban-tasks-item-dropdown")),c&&c.forEach(function(e){e.addEventListener("click",function(e){e.stopPropagation()})}),d&&d.addEventListener("click",()=>{n.forEach(e=>{e.value="",e.classList.toggle("d-none")})}),g&&g.appendChild(a),f&&f.forEach(function(e){e.addEventListener("mouseenter",function(){this.contentEditable="true"}),e.insertAdjacentHTML("afterend",b())}),c=[].slice.call(document.querySelectorAll(".delete-board")),c&&c.forEach(function(e){e.addEventListener("click",function(){var e=this.closest(".kanban-board").getAttribute("data-id");v.removeBoard(e)})}),c=[].slice.call(document.querySelectorAll(".delete-task")),c&&c.forEach(function(e){e.addEventListener("click",function(){var e=this.closest(".kanban-item").getAttribute("data-eid");v.removeElement(e)})}),c=document.querySelector(".kanban-add-board-cancel-btn");c&&c.addEventListener("click",function(){n.forEach(e=>{e.classList.toggle("d-none")})}),a&&a.addEventListener("submit",function(e){e.preventDefault();var e=this.querySelector(".form-control").value,t=e.replace(/\s+/g,"-").toLowerCase(),t=(v.addBoards([{id:t,title:e}]),document.querySelectorAll(".kanban-board:last-child")[0]),e=(t&&(t.querySelector(".kanban-title-board").insertAdjacentHTML("afterend",b()),t.querySelector(".kanban-title-board").addEventListener("mouseenter",function(){this.contentEditable="true"})),t.querySelector(".delete-board"));e&&e.addEventListener("click",function(){var e=this.closest(".kanban-board").getAttribute("data-id");v.removeBoard(e)}),n&&n.forEach(e=>{e.classList.add("d-none")}),g&&g.appendChild(a)}),i.addEventListener("hidden.bs.offcanvas",function(){i.querySelector(".ql-editor").firstElementChild.innerHTML=""}),i&&i.addEventListener("shown.bs.offcanvas",function(){[].slice.call(i.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e){return new bootstrap.Tooltip(e)})})}();