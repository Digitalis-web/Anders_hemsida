function close_edit_view(){$("#editor").css("visibility","hidden")}function show_edit_view(e){$("#editor").css("visibility","visible");var r=$(e).find("span"),t=$(r).text();t=t.trim();var n=$(e).attr("name");$(".edit_name").val(n),$(".edit_text_new").val(t),$(".edit_text_old").val(t)}function on_ready_grid(){for(var e="<div class='i_grid_item' style='width:{width}px; height: {height}px; background-color: {color}'><div class='cover'>Demo fit zone</div></div>",r=["rgb(142, 68, 173)","rgb(243, 156, 18)","rgb(211, 84, 0)","rgb(0, 106, 63)","rgb(41, 128, 185)","rgb(192, 57, 43)","rgb(135, 0, 0)","rgb(39, 174, 96)"],t=1,n=1,s="",o="",i=0;i<28;++i)n=1+3*Math.random()<<0,t=1+3*Math.random()<<0,o=r[r.length*Math.random()<<0],s+=e.replace(/\{height\}/g,150*n).replace(/\{width\}/g,150*t).replace("{color}",o);$(".i_media_container").html(s),$(function(){var e=new Freewall(".i_media_container");e.reset({selector:".i_grid_item",animate:!1,cellW:160,cellH:160,delay:30,onResize:function(){e.refresh($(window).width()-30,$(window).height()-30)}}),e.fitZone($(window).width()-30,$(window).height()-30)})}function on_ready_product_scroller(){init_product_slider(),init_arrows()}function init_arrows(e,r,t){$(e).click(function(){move(!1,t)}),$(r).click(function(){move(!0,t)})}function init_product_slider(){for(var e=document.getElementsByClassName("product_slider_container"),r=0;r<e.length;r++){var t=e[r];init_arrows(t.getElementsByClassName("i_products_arrow_r"),t.getElementsByClassName("i_products_arrow_l"),t);for(var n=t.getElementsByClassName("i_products_sliders"),s=0;s<n.length;s++){var o=n[s],i=get_width_in_percentage(o),a=i*s+"%";$(o).css("left",a)}}}function move(e,r){if(!sliding){sliding=!0;var t=1;e&&(t=-1);var n=r.getElementsByClassName("i_products_sliders"),s=get_width_in_percentage(n[0]);"0px"==$(n[0]).css("left")&&e&&(t=0);var o=Math.round(100/s);n.length<o&&(t=0);var i=Math.round(s*(o-1));Math.round(get_left_in_percentage(n[n.length-1]))!=i||e||(t=0);for(var a=0;a<n.length;a++){var c=n[a],d=get_left_in_percentage(c),l=d-s*t+"%";$(c).animate({left:l},500,function(){sliding=!1})}}}function get_left_in_percentage(e){var r=$(e).clone().appendTo("body").wrap('<div class = "remove_me" style="display: none"></div>').css("left");return r=r.substr(0,r.length-1),$(".remove_me").remove(),r}function get_width_in_percentage(e){var r=$(e).clone().appendTo("body").wrap('<div class = "remove_me" style="display: none"></div>').css("width");return r=r.substr(0,r.length-1),$(".remove_me").remove(),r}function on_ready_product_sorter(){for(var e=document.getElementsByClassName("pe_product"),r=0;r<e.length;r++){var t=e[r];products.push($(t).clone());var n,s,o=t.getElementsByClassName("pe_type")[0].innerHTML.trim();"hem"==o?(home_products.push(t),n=getProductPrice(t),home_prices.push(n),s=getProductName(t),home_names.push(s)):(church_products.push(t),n=getProductPrice(t),church_prices.push(n),s=getProductName(t),church_names.push(s)),prices.push(n),names.push(names)}current_products=products,current_names=names,current_prices=prices}function changeType(e,r){highlight(e),"hem"==r?(current_products=home_products,current_prices=home_prices,current_names=home_names):"kyrka"==r?(current_products=church_products,current_prices=church_prices,current_names=church_names):(current_products=products,current_prices=prices,current_names=names),forceUpdate()}function echoProducts(e){0==e.length&&(e=current_products);var r=document.getElementsByClassName("pe_prod_container")[0];$(".pe_product").remove();for(var t=0;t<products.length;t++){$(e[t]).find(".pe_price").html();$(r).append(e[t])}}function forceUpdate(){for(var e=document.getElementsByClassName("pe_sort_buttons")[0].children,r="",t=0;t<e.length;t++){"true"==e[t].getAttribute("chosen")&&(r=e[t])}""==r?echoProducts(current_products):$(r).trigger("click")}function sortByPrice(e){highlight(e),echoProducts(sortArrayByOther(current_products,current_prices))}function sortByName(e){highlight(e),echoProducts(sortArrayByOther(current_products,current_names))}function highlight(e){var r=e.parentNode,t=r.children;$(t).attr("chosen","false"),$(e).attr("chosen","true"),$(t).css("background",""),$(e).css("background","blue")}function sortArrayByOther(e,r){for(var t=[],n=0;n<e.length;n++)t.push({A:r[n],B:e[n]});t.sort(function(e,r){return"String"==typeof e.A?e.A>r.A:e.A-r.A}),r=[],e=[];for(var n=0;n<t.length;n++)r.push(t[n].A),e.push(t[n].B);return e}function getProductPrice(e){var r=e.getElementsByClassName("pe_price")[0].innerHTML.trim();return r=1*r.replace(" ","")}function getProductName(e){return e.getElementsByClassName("pe_name")[0].innerHTML.trim()}function on_ready_slider(){init_sliders();for(var e=0;e<all_sliders.length;e++)slider_go_to_page(e,0);slider_speed=600,$(".all_slider_container").css("visibility","visible")}function slider_go_to_page(e,r){if(!sliding){sliding=!0;var t=all_sliders[e];t.classList.contains("no_content")&&!0;var n=$(".slider_list_container[slider_number='"+e+"']"),s=$(t).children().length-2;if(s>0){r>=s?r=0:r<0&&(r=s-1);var o=$(".slider_page[slider_number='"+e+"']"),i=o[r],a=current_page[e],c=o[a];$(o).css("opacity","0"),$(c).css("opacity","1"),$(c).css("z-index","10"),$(i).css("z-index","15"),$(i).animate({opacity:1},slider_speed,function(){sliding=!1});var d=":nth-child("+(r+1)+")";if($(t).hasClass("no_list")){if(!$(t).hasClass("no_dots")){var l=$(".slider_dots_container[slider_number='"+e+"']"),_=$(l).find(d);jQuery(l).find(".slider_dot").not(_).animate({backgroundColor:dot_not_selected_background,borderColor:border_not_selected_color},slider_speed),jQuery(_).animate({backgroundColor:dot_selected_background,borderColor:border_selected_color},slider_speed)}}else{var u=$(n).find(d).not("p");jQuery(n).find(".slider_list_object").not(u).animate({backgroundColor:not_selected_background,color:not_selected_color},slider_speed),jQuery(u).not("p").animate({backgroundColor:selected_background,color:selected_color},slider_speed)}current_page[e]=r}}}function move(e,r){var t=$(r).attr("slider_number"),n=current_page[t]+1;e&&(n-=2),slider_go_to_page(t,n)}function init_sliders(){var e=document.getElementsByClassName("all_slider_container");$(e).css("visibility","visible");$(window).width();slider_dot_width="1.0";for(var r=0;r<e.length;r++){var t=e[r];$(t).attr("slider_number",r),current_page.push(0),all_sliders.push(t);var n=t.getElementsByClassName("slider_page"),s=n.length,o=$(t).parent();if($(t).hasClass("no_auto_slide")||setInterval(function(){move(!1,t)},5e3),$(t).hasClass("no_list")){if(!$(t).hasClass("no_dots")){var i=$("<div class = 'slider_dots_container center_horizontally_css'>"),a=$("<div class = 'inner_dots_container full_height center_horizontally_css'>");$(i).attr("slider_number",r),$(a).attr("slider_number",r),$(i).append(a),$(o).append(i)}}else{var c=$("<div class = 'slider_list_container'>");$(c).attr("slider_number",r);var d=100/s+"%";$(o).append(c)}for(var l=0;l<n.length;l++){var _=n[l];$(_).attr("slider_number",r);var u;if(!$(t).hasClass("no_list")){var p=document.createElement("div");p.className+="slider_list_object",$(p).css("width",d);var h=_.id,g=$("<p class = 'list_object_text center_vertically_css'>");$(g).html(h),$(c).append(p),$(p).append(g),$(g).attr("slider_number",r),$(p).attr("slider_number",r),u=p}if(!$(t).hasClass("no_dots")){var m=$("<div class = 'slider_dot'>"),f=slider_dot_width;$(m).css("width",f+"vw"),$(m).css("height",f+"vw"),$(m).css("margin-left",2*f+"vw"),l==n.length-1&&$(m).css("margin-right",2*f+"vw"),$(a).append(m),u=m}$(u).click(function(){var e=this.parentNode,r=Array.prototype.indexOf.call(e.children,this);slider_go_to_page($(e).attr("slider_number"),r)})}if($(t).hasClass("no_arrows")){var v=$("<img class = '' src=''>"),y=$("<img class = '' src=''>");$(t).append(v),$(t).append(y)}else{var v=$("<img class = 'slider_arrow slider_arrow_left' src='img/Index_slider/left_arrow.svg'>"),y=$("<img class = 'slider_arrow slider_arrow_right' src='img/Index_slider/right_arrow.svg'>");$(v).attr("slider_number",r),$(y).attr("slider_number",r),$(t).append(v),$(t).append(y),$(v).click(function(){move(!0,this)}),$(y).click(function(){move(!1,this)})}}}function on_ready_text_effect(){init_texts()}function init_texts(){for(var e=document.getElementsByClassName("text-effect"),r=0;r<e.length;r++){var t=e[r],n=t.innerHTML;t.innerHTML="";for(var s=0;s<n.length;s++)$(t).append("<span>"+n[s]+"</span>");$("body").on("appear",".text-effect",function(e,r){$(this).hasClass("text-effect-done")||($(this).addClass("text-effect-done"),start_effect(this))}),$(t).hover(function(){})}}function start_effect(e){effect_letter($(e).find("span"),0)}function effect_letter(e,r){if(!(r>=e.length)){var t=e[r];$(t).velocity({translateZ:0,rotateX:"5deg",rotateZ:"5deg",color:"#DDDDDD"},{duration:120,complete:function(){$(t).velocity({translateZ:0,rotateX:0,rotateY:0,rotateZ:0,color:"#FFFFFF"},{duration:120})}}),r+=1,setTimeout(function(){effect_letter(e,r)},120)}}function onYouTubeIframeAPIReady(){var e;e=new YT.Player("organvideo",{videoId:"z8kBoDdQOgc",playerVars:{autoplay:1,controls:0,showinfo:0,modestbranding:1,loop:1,fs:0,cc_load_policy:0,iv_load_policy:3,autohide:1},events:{onReady:function(e){e.target.mute()},onStateChange:function(r){r.data===YT.PlayerState.ENDED&&e.playVideo()}}})}window.addEventListener("load",function(){var e=document.getElementById("load");$(document.body.removeChild(e)).fadeOut("slow")}),$(document).ready(on_ready_product_scroller);var sliding=!1;$(document).ready(on_ready_product_sorter);var current_products=[],current_prices=[],current_names=[],church_products=[],church_prices=[],church_names=[],home_products=[],home_prices=[],home_names=[],products=[],prices=[],names=[];$(document).ready(on_ready_slider);var sliding=!1,current_page=[],all_sliders=[],slider_speed=0,selected_background="#1c2d84",not_selected_background="#AAAAAA",selected_color="white",not_selected_color="black",dot_selected_background="white",dot_not_selected_background="gray",border_selected_color="gray",border_not_selected_color="gray";$(document).ready(on_ready_text_effect);