let commentEditor=document.querySelector(".comment-editor");commentEditor&&new Quill(commentEditor,{modules:{toolbar:".comment-toolbar"},placeholder:"Write a Comment...",theme:"snow"}),$(function(){let t,n,s;s=(isDarkStyle?(t=config.colors_dark.borderColor,n=config.colors_dark.bodyBg,config.colors_dark):(t=config.colors.borderColor,n=config.colors.bodyBg,config.colors)).headingColor;var e=$(".datatables-category-list"),a=$(".select2");a.length&&a.each(function(){var e=$(this);select2Focus(e),e.wrap('<div class="position-relative"></div>').select2({dropdownParent:e.parent(),placeholder:e.data("placeholder")})}),e.length&&(e.DataTable({ajax:assetsPath+"json/ecommerce-category-list.json",columns:[{data:""},{data:"id"},{data:"categories"},{data:"total_products"},{data:"total_earnings"},{data:""}],columnDefs:[{className:"control",searchable:!1,orderable:!1,responsivePriority:1,targets:0,render:function(e,t,n,s){return""}},{targets:1,orderable:!1,searchable:!1,responsivePriority:4,checkboxes:!0,checkboxes:{selectAllRender:'<input type="checkbox" class="form-check-input">'},render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input">'}},{targets:2,responsivePriority:2,render:function(e,t,n,s){var a=n.categories,o=n.category_detail,r=n.cat_image,i=n.id;return'<div class="d-flex align-items-center"><div class="avatar-wrapper me-3 rounded-2 bg-label-secondary user-name"><div class="avatar">'+(r?'<img src="'+assetsPath+"img/ecommerce-images/"+r+'" alt="Product-'+i+'" class="rounded-2">':'<span class="avatar-initial rounded-2 bg-label-'+["success","danger","warning","info","dark","primary","secondary"][Math.floor(6*Math.random())]+'">'+(r=(((r=(a=n.category_detail).match(/\b\w/g)||[]).shift()||"")+(r.pop()||"")).toUpperCase())+"</span>")+'</div></div><div class="d-flex flex-column justify-content-center"><span class="text-heading fw-medium text-wrap">'+a+'</span><small class="text-truncate mb-0 d-none d-sm-block">'+o+"</small></div></div>"}},{targets:3,responsivePriority:3,render:function(e,t,n,s){return'<div class="text-sm-end pe-3">'+n.total_products+"</div>"}},{targets:4,orderable:!1,render:function(e,t,n,s){return"<div class='text-sm-end'>"+n.total_earnings+"</div>"}},{targets:-1,title:"Actions",searchable:!1,orderable:!1,render:function(e,t,n,s){return'<div class="d-flex align-items-sm-center justify-content-sm-center"><button class="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill me-1"><i class="ri-edit-box-line ri-22px"></i></button><button class="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ri-more-2-line ri-22px"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:0;" class="dropdown-item">View</a><a href="javascript:0;" class="dropdown-item">Suspend</a></div></div>'}}],order:[2,"desc"],dom:'<"card-header d-flex rounded-0 flex-wrap py-0 pb-5 pb-md-0"<"me-5 ms-n2"f><"d-flex justify-content-start justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center mb-0 gap-4"lB>>>t<"row mx-1"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',lengthMenu:[7,10,20,50,70,100],language:{sLengthMenu:"_MENU_",search:"",searchPlaceholder:"Search",paginate:{next:'<i class="ri-arrow-right-s-line"></i>',previous:'<i class="ri-arrow-left-s-line"></i>'}},buttons:[{extend:"collection",className:"btn btn-outline-secondary dropdown-toggle me-5 waves-effect waves-light",text:'<i class="ri-download-line me-1"></i> <span class="d-none d-sm-inline-block">Export</span>',buttons:[{extend:"print",text:'<i class="ri-printer-line me-1"></i>Print',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5],format:{body:function(e,t,n){var s;return e.length<=0?e:(e=$.parseHTML(e),s="",$.each(e,function(e,t){void 0!==t.classList&&t.classList.contains("user-name")?s+=t.lastChild.firstChild.textContent:void 0===t.innerText?s+=t.textContent:s+=t.innerText}),s)}}},customize:function(e){$(e.document.body).css("color",s).css("border-color",t).css("background-color",n),$(e.document.body).find("table").addClass("compact").css("color","inherit").css("border-color","inherit").css("background-color","inherit")}},{extend:"csv",text:'<i class="ri-file-text-line me-1" ></i>Csv',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5],format:{body:function(e,t,n){var s;return e.length<=0?e:(e=$.parseHTML(e),s="",$.each(e,function(e,t){void 0!==t.classList&&t.classList.contains("user-name")?s+=t.lastChild.firstChild.textContent:void 0===t.innerText?s+=t.textContent:s+=t.innerText}),s)}}}},{extend:"excel",text:'<i class="ri-file-excel-line me-1"></i>Excel',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5],format:{body:function(e,t,n){var s;return e.length<=0?e:(e=$.parseHTML(e),s="",$.each(e,function(e,t){void 0!==t.classList&&t.classList.contains("user-name")?s+=t.lastChild.firstChild.textContent:void 0===t.innerText?s+=t.textContent:s+=t.innerText}),s)}}}},{extend:"pdf",text:'<i class="ri-file-pdf-line me-1"></i>Pdf',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5],format:{body:function(e,t,n){var s;return e.length<=0?e:(e=$.parseHTML(e),s="",$.each(e,function(e,t){void 0!==t.classList&&t.classList.contains("user-name")?s+=t.lastChild.firstChild.textContent:void 0===t.innerText?s+=t.textContent:s+=t.innerText}),s)}}}},{extend:"copy",text:'<i class="ri-file-copy-line me-1"></i>Copy',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5],format:{body:function(e,t,n){var s;return e.length<=0?e:(e=$.parseHTML(e),s="",$.each(e,function(e,t){void 0!==t.classList&&t.classList.contains("user-name")?s+=t.lastChild.firstChild.textContent:void 0===t.innerText?s+=t.textContent:s+=t.innerText}),s)}}}}]},{text:'<i class="ri-add-line me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Add Category</span>',className:"add-new btn btn-primary ms-n1 waves-effect waves-light",attr:{"data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasEcommerceCategoryList"}}],responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(e){return"Details of "+e.data().categories}}),type:"column",renderer:function(e,t,n){n=$.map(n,function(e,t){return""!==e.title?'<tr data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><td> '+e.title+':</td> <td class="ps-0">'+e.data+"</td></tr>":""}).join("");return!!n&&$('<table class="table"/><tbody />').append(n)}}}}),$(".dataTables_length").addClass("my-0"),$(".dt-action-buttons").addClass("pt-0"))}),function(){var e=document.getElementById("eCommerceCategoryListForm");FormValidation.formValidation(e,{fields:{categoryTitle:{validators:{notEmpty:{message:"Please enter category title"}}},slug:{validators:{notEmpty:{message:"Please enter slug"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"is-valid",rowSelector:function(e,t){return".mb-5"}}),submitButton:new FormValidation.plugins.SubmitButton,autoFocus:new FormValidation.plugins.AutoFocus}})}();