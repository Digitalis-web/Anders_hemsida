function on_ready_admin(){$(".add_item").click(function(){var e=this,t=$(this).parent(),a=$(t).find(".template").first().clone().removeClass("template");$(a).find("input").val(""),$(t).append(a),$(a).insertBefore(e),update_remove_listener()}),update_remove_listener()}function update_remove_listener(){$(".remove_item").click(function(){var e=$(this).parent();$(e).parent().children().length-2>1&&$(e).remove()}),$(".image_list_item .remove_item").click(function(){var e=$(this).attr("image_id");if(void 0!=e){var t="<input value = "+e+" type =  'hidden' name = 'removed_images[]'>";$("#form").append(t)}})}function send_form_stored_image(){send_form("","functions/update_stored_image.php","form_stored_image")}function compress_image_single(e,t){compress_image(e,function(){setTimeout(function(){send_form("","functions/update_stored_image.php","form_stored_image")},3e3)})}function compress_image(e,t){e=e||window.event;var a=e.target||e.srcElement,n=a.parentNode,i=a.name,r=a.files[0];if(void 0!=r){var o=r.type,d=get_filename_from_path(a.value),m=$(a).attr("image_id");void 0==m&&(m="none");var s=document.createElement("img");s.className+="always_hidden",s.className+=" tmp_holder",s.setAttribute("holder_name",i),s.setAttribute("filename",d),s.setAttribute("image_id",m);$(n).find(".tmp_holder[holder_name='"+i+"']").remove();$(n).append(s);var l=new FileReader;l.onload=function(e){s.src=e.target.result,s.setAttribute("mime",o),"none"!=t&&t()},l.readAsDataURL(r)}else $("[holder_name='"+i+"']").remove()}function send_form(e,t,a){e.disabled=!0;for(var n=new FormData(document.getElementById(a)),i=document.getElementsByClassName("tmp_holder"),r=0;r<i.length;r++){var o=i[r],d=o.getAttribute("holder_name"),m=o.getAttribute("mime"),s=o.naturalWidth,l=o.naturalHeight,c=l/s;s>maxWidth&&(s=maxWidth,l=c*maxWidth);var u="";if("image/png"!=m){var g=document.createElement("canvas");g.width=s,g.height=l;g.getContext("2d").drawImage(o,0,0,s,l),u=g.toDataURL(m,.7)}else u=o.src;u+="@)(@#!#!#"+$(o).attr("filename")+"@)(@#!#!#"+$(o).attr("image_id"),"[]"!=d.substring(d.length-2,d.length)&&n.delete(d),n.append(d,u)}$.ajax({url:t,type:"POST",data:n,cache:!1,contentType:!1,processData:!1}).success(function(e){console.log(e),console.log(t);var a="";if("add_product.php"==t)a="Product has been edited or added",window.location.replace("admin?view=products&message="+a);else if("add_media.php"==t)a="Media post has been edited or added",window.location.replace("admin?view=media&message="+a);else{var n=Math.floor(1e3*Math.random()),i=window.location.href;i.indexOf("?")>-1?i+="&r="+n:i+="?r="+n,window.location.href=i}})}function compressPNG(e,t,a){var n=e.naturalWidth,i=e.naturalHeight,r=document.createElement("canvas");r.width=n*t,r.height=i*t,r.getContext("2d").drawImage(e,0,0,r.width,r.height);var o=document.createElement("img");o.src=r.toDataURL(a);var d=document.createElement("canvas");return d.width=n,d.height=i,d.getContext("2d").drawImage(o,0,0,d.width,d.height),d.toDataURL(a)}function get_filename_from_path(e){if(e){var t=e.indexOf("\\")>=0?e.lastIndexOf("\\"):e.lastIndexOf("/"),a=e.substring(t);0!==a.indexOf("\\")&&0!==a.indexOf("/")||(a=a.substring(1))}return a}function open_input(e){console.log("asdas");var t=$("[image_id="+e+"]");console.log(t),$(t).trigger("click")}$(document).ready(on_ready_admin);var maxWidth=1500;