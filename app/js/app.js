function close_edit_view(){$("#editor").css("display","none")}function show_edit_view(e){$("#editor").css("display","block");var t=$(e).find("span"),r=$(t).text();r=r.trim();var n=$(e).attr("name");$(".edit_name").val(n),$(".edit_text_new").val(r),$(".edit_text_old").val(r)}function on_ready_grid(){init_grids()}function init_grids(){for(var e=document.getElementsByClassName("grid_container"),t=0;t<e.length;t++){var r=e[t],n=r.getElementsByClassName("grid_temp_holder")[0],o=r.getElementsByClassName("grid_item");if(isDesktop()){var a=$(n).find(".grid_item[size=big]"),i=$(n).find(".grid_item[size=medium]"),s=$(n).find(".grid_item[size=small]");$(o).css("marginLeft",gap_size+"%"),$(o).css("marginTop",gap_size+"vh");for(var l=[],c=0;c<4;c++){var d=document.createElement("div");d.className="grid_part",$(d).attr("filled",0),l[c]=d,$(r).append(d)}var _=100-gap_size,u=100-gap_size;$(a).css("width",_+"%"),$(a).css("height",u+"%");for(var c=0;c<a.length;c++){var f=a[c],p=$(l).filter("[filled=0]").first();p.append(f),p.attr("filled",4)}var _=100-gap_size,u=50-gap_size;$(i).css("width",_+"%"),$(i).css("height",u+"%");for(var c=0;c<i.length;c++){var f=i[c],m=$(l).filter("[filled=0]").first();if(m.length>0)$(m).append(f),$(m).attr("filled",2);else{var g=$(l).filter("[filled=2]").first();g.length>0&&($(g).append(f),$(g).attr("filled",4))}}var _=50-gap_size,u=50-gap_size;$(s).css("width",_+"%"),$(s).css("height",u+"%");for(var c=0;c<s.length;c++){var f=s[c],p=$(l).not("[filled=4]").first(),y=1*$(p).attr("filled");$(p).append(f),$(p).attr("filled",y+1)}Math.ceil(o.length/items_per_part)}else{var d=document.createElement("div");d.className="grid_part",$(r).append(d);for(var c=0;c<o.length;c++)$(d).append(o[t])}$(n).remove()}}function set_text_color(e){for(var t=0;t<e.length;t++){var r=e[t],n=r.getElementsByTagName("img")[0],o=r.getElementsByTagName("h1")[0],a=Math.round(getAverageRGB(n)),i=a;i=i>10?30:250,i="rgb("+i+", "+i+", "+i+")",$(o).css("color",i)}}function getAverageRGB(e){var t,r,n,o,a={r:0,g:0,b:0},i=document.createElement("canvas"),s=i.getContext&&i.getContext("2d"),l=-4,c={r:0,g:0,b:0},d=0;if(!s)return a;n=i.height=e.naturalHeight||e.offsetHeight||e.height,r=i.width=e.naturalWidth||e.offsetWidth||e.width,s.drawImage(e,0,0,r,.3*n);try{t=s.getImageData(0,0,r,n)}catch(e){return a}for(o=t.data.length;(l+=20)<o;)++d,c.r+=t.data[l],c.g+=t.data[l+1],c.b+=t.data[l+2];c.r=~~(c.r/d),c.g=~~(c.g/d),c.b=~~(c.b/d);c.r,c.g,c.b;return(c.r+c.g+c.b)/3}function init_part(e,t,r,n){}function on_ready_load_images(){for(var e=$("[src_desktop_only]"),t=0;t<e.length;t++){var r=e[t];if(isDesktop()){var n=$(r).attr("src_desktop_only");$(r).attr("src",n)}}}function isDesktop(){return"none"!=$("#desktop_check").css("display")}function on_ready_map(){setTimeout(function(){initMap()},1e3),$(".i_map_text_container").click(function(){hide_map_cover()}),$(document).click(function(e){var t=e.target;$(t).parents().hasClass("i_map")||show_map_cover()})}function initMap(){var e=document.getElementById("map");if(void 0!=e&&void 0!=google){var t={lat:55.4017259,lng:10.3595234},r=new google.maps.Map(e,{zoom:14,center:t,disableDefaultUI:!0}),n=[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}];r.setOptions({styles:n});new google.maps.Marker({position:t,map:r});console.log("kör1234")}}function show_map_cover(){$(".i_map_text_container").fadeIn()}function hide_map_cover(){$(".i_map_text_container").fadeOut()}function on_ready_admin_media(){var e=document.getElementsByClassName("select_type")[0];void 0!=e&&update_inputs(e),$(".i_media_inner").click(function(){var e=$(this).attr("media_id");$("#i_load_container").load("views/media_event.php?media_id="+e,{},function(){init_single_post()})})}function init_single_post(){$(".media_even").click(function(e){$(e.target).hasClass("media_even")&&$("#i_load_container").html("")}),$(".media_even_close").click(function(){$("#i_load_container").html("")})}function update_inputs(e){"image"==e.value?($(".image_post_only").show(),$(".video_post_only").hide()):($(".image_post_only").hide(),$(".video_post_only").show())}function on_ready_misc(){$("#admin_info_cross").click(function(){$(".admin_info_container").fadeOut()})}function on_ready(){isDesktop()||($(".nav_d").css("visibility","visible"),init_mc_button(),init_nav_links(),toggle_nav_menu(),fade_duration=500)}function toggle_nav_menu(){nav_menu_visible=!nav_menu_visible,$(".nav_d").fadeToggle(fade_duration),nav_menu_visible?jQuery(".McButton b").animate({"background-color":button_open_color},fade_duration):jQuery(".McButton b").animate({"background-color":button_closed_color},fade_duration)}function init_mc_button(){var e=$("[data=hamburger-menu]");e.find("b:nth-child(1)"),e.find("b:nth-child(2)"),e.find("b:nth-child(3)");$(e).click(function(){toggle_nav(!1)})}function toggle_nav(e){var t=$("[data=hamburger-menu]"),r=t.find("b:nth-child(1)"),n=(t.find("b:nth-child(2)"),t.find("b:nth-child(3)"));if(!nav_in_animation||e){nav_in_animation=!0;toggle_nav_menu(),$(t).toggleClass("active"),t.hasClass("active")?(r.velocity({top:"50%"},{duration:160,easing:"swing"}),n.velocity({top:"50%"},{duration:160,easing:"swing"}).velocity({rotateZ:"90deg"},{duration:640,delay:200,easing:[500,20]}),t.velocity({rotateZ:"135deg"},{duration:640,delay:200,easing:[500,20],complete:function(){nav_in_animation=!1}})):(t.velocity("reverse"),n.velocity({rotateZ:"0deg"},{duration:640,easing:[500,20]}).velocity({top:"100%"},{duration:160,easing:"swing"}),r.velocity("reverse",{delay:640,complete:function(){nav_in_animation=!1}}))}}function init_nav_links(){$(".nav_link").click(function(){toggle_nav(!0)})}function on_ready_offert(){init_add_to_cart(),$(".offert_close").click(function(){close_offert()}),$(".offert_send").click(function(){send_offert(),display_thankyou()}),$(".offert_open").click(function(){open_offert()}),$(document).click(function(e){$(e.target).hasClass("offert")&&close_offert()})}function load_cart(){$(".offert_product").load("functions/echo_cart",function(){init_offert()})}function display_thankyou(){$(".offert_form").hide(),$(".offert_product").hide(),$(".offert_thankyou").show()}function send_offert(){var e=$("#email").val(),t=$("#name").val(),r=$("#phone").val();$.ajax({url:"functions/send_offert.php",type:"GET",data:"email="+e+"&name="+t+"&phone="+r+"&sec=sueweuey"}).success(function(e){})}function init_offert(){$(".cart_remove").click(function(){var e=$(this).attr("product_id");$.ajax({url:"functions/alter_cart.php",type:"GET",data:"remove=&product_id="+e}).success(function(e){load_cart()})})}function open_offert(){$(".offert").css("display","block"),load_cart()}function close_offert(){$(".offert").css("display","none")}function init_add_to_cart(){$(".send_offert").click(function(){var e=$(this).attr("product_id");$.ajax({url:"functions/alter_cart.php",type:"GET",data:"add=&product_id="+e}).success(function(e){open_offert()})})}function on_ready_product_scroller(){init_product_slider(),init_arrows()}function init_arrows(e,t,r){$(e).click(function(){move(!1,r)}),$(t).click(function(){move(!0,r)})}function init_product_slider(){for(var e=document.getElementsByClassName("product_slider_container"),t=0;t<e.length;t++){var r=e[t];all_product_sliders[t]=r;init_arrows(r.getElementsByClassName("i_products_arrow_r"),r.getElementsByClassName("i_products_arrow_l"),r);var n=r.getElementsByClassName("i_products_sliders");all_product_num[t]=n.length,n.length>0&&(product_width=get_width_in_percentage(n[0]));for(var o=0;o<n.length;o++){var a=n[o],i=product_width*o+"%";$(a).css("left",i)}}}function move(e,t){var t=t.getElementsByClassName("i_products_slider")[0],r=all_product_sliders.indexOf(t);if(!1===currently_sliding){currently_sliding=!0;var n=-1;e&&(n=1);var o=t.getElementsByClassName("i_products_sliders"),a=Math.round(100/product_width);if(o.length<=a)return void(currently_sliding=!1);var i=all_current_left[r];"aut"!=i&&void 0!=i||($(t).css("left","0%"),i=0),i=Math.round(1e3*i)/1e3;var s=1*i+product_width*n;s=Math.round(1e3*s)/1e3;var l=all_current_left[r],c=Math.round(l);isNaN(c)&&(c=0),$(t).animate({left:s+"%"},900,"easeOutQuint",function(){currently_sliding=!1});var d=get_left_in_percentage(o[o.length-1]);if(Math.round(-(d-product_width*(a-1)))==c&&!e){var _=o[0],u=$(_).clone();$(_).remove(),$(t).append(u),$(u).css("left",1*d+1*product_width+"%")}var f=get_left_in_percentage(o[0]),p=Math.round(f);if(console.log("current_left: "+c),console.log("first_product_left_round: "+p),c==-p&&e){var m=o[o.length-1],g=$(m).clone();$(m).remove(),$(t).prepend(g),$(g).css("left",1*f-1*product_width+"%")}else console.log("not left");all_current_left[r]=s}else console.log("notready")}function get_left_in_percentage(e){var t=$(e).clone().appendTo("body").wrap('<div class = "remove_me" style="display: none"></div>').css("left");return t=t.substr(0,t.length-1),$(".remove_me").remove(),t}function get_margin_left_in_percentage(e){var t=$(e).clone().appendTo("body").wrap('<div class = "remove_me" style="display: none"></div>').css("margin-left");return t=t.substr(0,t.length-1),$(".remove_me").remove(),t}function get_width_in_percentage(e){var t=$(e).clone().appendTo("body").wrap('<div class = "remove_me" style="display: none"></div>').css("width");return t=t.substr(0,t.length-1),$(".remove_me").remove(),t}function on_ready_product_sorter(){for(var e=document.getElementsByClassName("pe_prod_prod"),t=0;t<e.length;t++){var r=e[t];products.push($(r).clone());var n=getProductPrice(r);getProductName(r);console.log(n),prices.push(n),names.push(names)}}function echoProducts(e){var t=document.getElementsByClassName("pe_prod_container2")[0];$(".pe_prod_prod").remove(),console.log("removing");for(var r=0;r<e.length;r++)console.log("1231231"),$(t).append(e[r]),console.log(products[r])}function forceUpdate(){for(var e=document.getElementsByClassName("pe_sort_buttons")[0].children,t="",r=0;r<e.length;r++){"true"==e[r].getAttribute("chosen")&&(t=e[r])}""==t?echoProducts(products):$(t).trigger("click")}function sortByPrice(e){highlight(e),echoProducts(sortArrayByOther(products,prices))}function sortByName(e){highlight(e),echoProducts(sortArrayByOther(products,names))}function highlight(e){var t=e.parentNode,r=t.children;$(r).attr("chosen","false"),$(e).attr("chosen","true"),$(r).css("background",""),$(e).css("background","blue")}function sortArrayByOther(e,t){for(var r=[],n=0;n<e.length;n++)r.push({A:t[n],B:e[n]});r.sort(function(e,t){return"String"==typeof e.A?e.A>t.A:e.A-t.A}),t=[],e=[];for(var n=0;n<r.length;n++)t.push(r[n].A),e.push(r[n].B);return e}function getProductPrice(e){var t=e.getElementsByClassName("pe_price")[0].innerHTML.trim();return t=1*t.replace(" ","")}function getProductName(e){return e.getElementsByClassName("pe_name")[0].innerHTML.trim()}function on_ready_slider(){init_sliders();for(var e=0;e<all_sliders.length;e++)slider_go_to_page(e,0);slider_speed=600,$(".all_slider_container").css("visibility","visible")}function slider_go_to_page(e,t){if(!(section_currently_sliding=!1)){section_currently_sliding=!0;var r=all_sliders[e],n=$(".slider_list_container[slider_number='"+e+"']");$(r).hasClass("no_auto_slide")||(clearInterval(intervals[e]),enable_autoslide(e));var o=$(r).children().length-2;if(o>0){t>=o?t=0:t<0&&(t=o-1);var a=$(".slider_page[slider_number='"+e+"']"),i=a[t],s=current_page[e],l=a[s];$(a).css("opacity","0"),$(l).css("opacity","1"),$(i).css("z-index","15"),$(l).css("z-index","10"),$(i).animate({opacity:1},slider_speed,function(){section_currently_sliding=!1});var c=":nth-child("+(t+1)+")";if($(r).hasClass("no_list")){if(!$(r).hasClass("no_dots")){var d=$(".slider_dots_container[slider_number='"+e+"']"),_=$(d).find(c);jQuery(d).find(".slider_dot").not(_).animate({backgroundColor:dot_not_selected_background,borderColor:border_not_selected_color},slider_speed),jQuery(_).animate({backgroundColor:dot_selected_background,borderColor:border_selected_color},slider_speed)}}else{var u=$(n).find(c).not("p");jQuery(n).find(".slider_list_object").not(u).animate({backgroundColor:not_selected_background,color:not_selected_color},slider_speed),jQuery(u).not("p").animate({backgroundColor:selected_background,color:selected_color},slider_speed)}current_page[e]=t}}}function move_section(e,t){var r=$(t).attr("slider_number"),n=current_page[r]+1;e&&(n-=2),slider_go_to_page(r,n)}function init_sliders(){var e=document.getElementsByClassName("all_slider_container");$(e).css("visibility","visible");$(window).width();slider_dot_width="1.0";for(var t=0;t<e.length;t++){var r=e[t];$(r).attr("slider_number",t),current_page.push(0),all_sliders.push(r);var n=r.getElementsByClassName("slider_page"),o=n.length,a=$(r).parent();if($(r).hasClass("no_auto_slide")||enable_autoslide(t),$(r).hasClass("no_list")){if(!$(r).hasClass("no_dots")){var i=$("<div class = 'slider_dots_container center_horizontally_css'>"),s=$("<div class = 'inner_dots_container full_height center_horizontally_css'>");$(i).attr("slider_number",t),$(s).attr("slider_number",t),$(i).append(s),$(a).append(i)}}else{var l=$("<div class = 'slider_list_container'>");$(l).attr("slider_number",t);var c=100/o+"%";$(a).append(l)}for(var d=0;d<n.length;d++){var _=n[d];$(_).attr("slider_number",t);var u;if(!$(r).hasClass("no_list")){var f=document.createElement("div");f.className+="slider_list_object",$(f).css("width",c);var p=_.id,m=$("<p class = 'list_object_text center_vertically_css'>");$(m).html(p),$(l).append(f),$(f).append(m),$(m).attr("slider_number",t),$(f).attr("slider_number",t),u=f}if(!$(r).hasClass("no_dots")&&(!$(r).hasClass("desktop_only")||isDesktop())){var g=$("<div class = 'slider_dot'>"),y=slider_dot_width;$(g).css("width",y+"vw"),$(g).css("height",y+"vw"),$(g).css("margin-left",2*y+"vw"),d==n.length-1&&$(g).css("margin-right",2*y+"vw"),$(s).append(g),u=g}$(u).click(function(){var e=this.parentNode,t=Array.prototype.indexOf.call(e.children,this);slider_go_to_page($(e).attr("slider_number"),t)})}if($(r).hasClass("no_arrows")){var v=$("<img class = '' src=''>"),h=$("<img class = '' src=''>");$(r).append(v),$(r).append(h)}else if(!$(r).hasClass("desktop_only")||isDesktop()){var v=$("<img class = 'slider_arrow slider_arrow_left' src='img/Index_slider/left_arrow.svg'>"),h=$("<img class = 'slider_arrow slider_arrow_right' src='img/Index_slider/right_arrow.svg'>");$(v).attr("slider_number",t),$(h).attr("slider_number",t),$(r).append(v),$(r).append(h),$(v).click(function(){move_section(!0,this)}),$(h).click(function(){move_section(!1,this)})}}}function reenable_effects(e){}function enable_autoslide(e){if(isDesktop()){var t=all_sliders[e],r=setInterval(function(){move_section(!1,t)},5e3);intervals[e]=r}}function on_ready_text_effect(){init_texts()}function init_texts(){var e=document.getElementsByClassName("text-effect");$(e).css("display","block");for(var t=0;t<e.length;t++){var r=e[t],n=r.innerHTML;r.innerHTML="";for(var o=0;o<n.length;o++)$(r).append("<span>"+n[o]+"</span>");$("body").on("appear",".text-effect",function(e,t){$(this).hasClass("text-effect-done")||($(this).addClass("text-effect-done"),start_effect(this))}),$(r).hover(function(){})}}function start_effect(e){effect_letter($(e).find("span"),0)}function effect_letter(e,t){if(!(t>=e.length)){var r=e[t];$(r).velocity({translateZ:0,rotateX:"5deg",rotateZ:"5deg",color:"#DDDDDD"},{duration:120,complete:function(){$(r).velocity({translateZ:0,rotateX:0,rotateY:0,rotateZ:0,color:"#FFFFFF"},{duration:120})}}),t+=1,setTimeout(function(){effect_letter(e,t)},120)}}function onYouTubeIframeAPIReady(){$(document).ready(on_ready_video)}function on_ready_video(){isDesktop()&&(player=new YT.Player("organvideo",{videoId:"z8kBoDdQOgc",playerVars:{controls:0,showinfo:0,modestbranding:1,loop:1,fs:0,cc_load_policy:0,iv_load_policy:3,autohide:1,rel:0},events:{onReady:function(e){onPlayerReady(e)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&player.playVideo()}}}))}function onPlayerReady(e){e.target;iframe=$("#organvideo"),e.target.playVideo(),e.target.mute(),setupListener()}function setupListener(){$("#video-trigger").on("click",function(){fullscreen(),isMuted?(player.unMute(),isMuted=!1):(player.mute(),isMuted=!0)})}function fullscreen(){var e=document.getElementById("organvideo");e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen()}$(document).ready(on_ready_grid);var items_per_part=4,gap_size=1;$(document).ready(on_ready_load_images),$(document).ready(on_ready_map);var map_cover_visible=!0;$(document).ready(on_ready_admin_media),$(document).ready(on_ready_misc),$(document).ready(on_ready);var fade_duration=0,nav_menu_visible=!0,button_open_color="white",button_closed_color="white",McButton=$("[data=hamburger-menu]"),McBar1=McButton.find("b:nth-child(1)"),McBar2=McButton.find("b:nth-child(2)"),McBar3=McButton.find("b:nth-child(3)"),nav_in_animation=!1;$(document).ready(on_ready_offert),$(document).ready(on_ready_product_scroller);var all_product_sliders=[],all_product_num=[],all_current_left=[],currently_sliding=!1,product_width;$(document).ready(on_ready_product_sorter);var products=[],prices=[],names=[];$(document).ready(on_ready_slider);var section_currently_sliding=!1,current_page=[],all_sliders=[],slider_speed=0,intervals=[],selected_background="#1c2d84",not_selected_background="#AAAAAA",selected_color="white",not_selected_color="black",dot_selected_background="white",dot_not_selected_background="gray",border_selected_color="gray",border_not_selected_color="gray";$(document).ready(on_ready_text_effect);var player,iframe,isMuted=!0;