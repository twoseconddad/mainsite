/*!CK:1343428337!*//*1436796139,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["AhTud"]); }

__d("GroupsMemberCountUpdater",["Arbiter","DOM"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(){}i.subscribeMemberCount=function(j){g.subscribe('GroupsMemberCount/changeText',function(k,l){h.setContent(j,l);});};i.subscribeNewMemberCount=function(j){g.subscribe('GroupsMemberCount/changeNewMembersText',function(k,l){h.setContent(j,l);});};e.exports=i;},null);
__d("NotificationsSelector",["Parent","submitForm","AsyncRequest","Event"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(m,n,o){n.subscribe('change',function(p,q){o.value=q.value;var r=g.byTag(m,'form');r&&h(r);});}function l(m,n,o,p,q,r){n.subscribe('change',function(s,t){new i().setURI('/ajax/groups/notifications/update.php').setData({setting:t.value,group_id:p}).setMethod('POST').send();});if(q)q.subscribe('hide',function(){if(r)new i().setURI(r).setData({group_id:p}).setMethod('POST').send();});j.listen(m,'click',function(){if(q&&q.isShown())q.hide();});}e.exports.bindForm=k;e.exports.updateNotif=l;},null);
__d("XGroupsRHCSuggestionXoutController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/groups\/xout_suggested_group\/",{id:{type:"Int",required:true}});},null);
__d("GroupSuggestionXoutHandler",["AsyncRequest","CSS","csx","DOM","Event","XGroupsRHCSuggestionXoutController"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m={onclick:function(n,o,p){k.listen(n,'click',function(){var q=l.getURIBuilder().setInt('id',o).getURI();new g().setURI(q).send();var r=j.find(document,'#'+p);j.remove(r);var s=j.scry(document,"div._1spx");if(s.length===0){var t=j.find(document,'#GroupsRHCSuggestionSection');if(t!==null)j.remove(t);}});},hide:function(n,o){k.listen(o,'mouseover',function(){h.show(n);});k.listen(o,'mouseleave',function(){h.hide(n);});}};e.exports=m;},null);
__d("GroupsAddTypeaheadView",["Arbiter","ContextualTypeaheadView"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(){"use strict";if(h!==null)h.apply(this,arguments);}k.prototype.select=function(l){"use strict";var m=this.results[this.index];g.inform('GroupsMemberSuggestion/remove',m.uid);if(m.is_member){this.reset();}else j.select.call(this,l);};e.exports=k;},null);
__d("GroupsAddMemberTypeahead",["Arbiter","DOM","Typeahead","ge"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(l,m){if(l&&m)this.init(l,m);}Object.assign(k.prototype,{init:function(l,m){l.subscribe('select',function(n,o){g.inform('GroupsAddMemberTypeahead/add',{gid:m,uid:o.selected.uid,name:o.selected.text,photo:o.selected.photo});var p=l.getData().getExclusions();p.push(o.selected.uid);l.getData().setExclusions(p);});g.subscribe('GroupsAddMemberTypeahead/updateGroupToken',this.resetTypeaheadCaches.bind(this));},resetTypeaheadCaches:function(l,m){var n=h.scry(j('pagelet_group_'),'.uiTypeahead:not(.uiPlacesTypeahead)');for(var o=0;o<n.length;o++){var p=i.getInstance(n[o]);if(p){var q=p.getData();q.updateToken(m.token);p.getCore().subscribe('focus',q.bootstrap.bind(q));}}}});e.exports=k;},null);
__d("legacy:GroupsAddMemberTypeahead",["GroupsAddMemberTypeahead"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.GroupsAddMemberTypeahead=b('GroupsAddMemberTypeahead');},3);
__d("LitestandRHCAds",["AdsRefreshHandler","Arbiter","DOMQuery","Event","NavigationMessage","Run","SubscriptionsHandler","csx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p,q,r,s,t;function u(){q&&q.forceLoadIfEnoughTimePassed(0);}function v(){var aa=i.scry(r,"._5f85 a")[0];if(aa)p.addSubscriptions(j.listen(aa,'click',u));}function w(){var aa=o(s);if(aa&&t){aa.appendChild(t);t=null;}}function x(){if(q){q.cleanup();q=null;}if(p){p.release();p=null;}t=null;}function y(aa,ba){t=ba;u();}var z={init:function(aa,ba,ca){r=o(aa);s=aa;q=new g(r,ba,ca).subscribeDefaultEventsForRefresh();p=new m();p.addSubscriptions(h.subscribe(k.NAVIGATION_BEGIN,x),h.subscribe('AdsRefreshHandler/AdsLoaded',v),h.subscribe('AdsRefreshHandler/AdsLoaded',w),h.subscribe('ProfileQuestionAnswered',y));v();l.onLeave(x);}};e.exports=z;},null);
__d("GroupAddMemberCustomTypeahead",["Typeahead"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();for(var h in g)if(g.hasOwnProperty(h))j[h]=g[h];var i=g===null?null:g.prototype;j.prototype=Object.create(i);j.prototype.constructor=j;j.__superConstructor__=g;function j(k,l,m,n,o){"use strict";g.call(this,k,l,m,n);this._memberSuggestions=o;}j.prototype.containsInSuggestedMembers=function(k){"use strict";var l=parseInt(k,10);return this._memberSuggestions.indexOf(l)>-1;};j.prototype.addSuggestedMember=function(k){"use strict";var l=parseInt(k,10);this._memberSuggestions.push(l);};j.prototype.removeSuggestedMember=function(k){"use strict";var l=parseInt(k,10),m=this._memberSuggestions.indexOf(l);if(m>-1)this._memberSuggestions.splice(m,1);};e.exports=j;},null);
__d("PopoverMenuDynamicIcon",["Button","CSS","DOM","DOMQuery","csx"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(m){"use strict";this._popoverMenu=m;}l.prototype.enable=function(){"use strict";this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',this._onSetMenu.bind(this));};l.prototype.disable=function(){"use strict";this._popoverMenu.unsubscribe(this._setMenuSubscription);this._setMenuSubscription=null;this._removeChangeSubscription();};l.prototype._onSetMenu=function(){"use strict";this._removeChangeSubscription();this._menu=this._popoverMenu.getMenu();this._changeSubscription=this._menu.subscribe('change',function(m,n){var o=n.item;if(n[0])o=n[0].item;if(!o)return;var p=o.getIcon();p=p?p.cloneNode(true):null;var q=this._popoverMenu.getTriggerElem(),r=j.scry(q,"span._55pe")[0];if(r){var s=r.firstChild;if(h.hasClass(s,'img')){i.replace(s,p);}else i.prependContent(r,p);}else g.setIcon(q,p);}.bind(this));};l.prototype._removeChangeSubscription=function(){"use strict";if(this._changeSubscription){this._menu.unsubscribe(this._changeSubscription);this._changeSubscription=null;}};Object.assign(l.prototype,{_setMenuSubscription:null,_changeSubscription:null});e.exports=l;},null);
__d("TypeaheadSubmitOnSelect",["Form"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i){"use strict";this._typeahead=i;}h.prototype.enable=function(){"use strict";this._subscription=this._typeahead.subscribe('select',function(){var i=this._typeahead.getCore().getElement().form;if(i)i.getAttribute('rel')=='async'?g.bootstrap(i):i.submit();}.bind(this));};h.prototype.disable=function(){"use strict";this._typeahead.unsubscribe(this._subscription);this._subscription=null;};Object.assign(h.prototype,{_subscription:null});e.exports=h;},null);
__d("legacy:SubmitOnSelectTypeaheadBehavior",["TypeaheadSubmitOnSelect"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.submitOnSelect=function(h){h.enableBehavior(g);};},3);
__d("TypeaheadShowResultsOnFocus",["Event","Keys"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(j){"use strict";this._typeahead=j;}i.prototype.enable=function(){"use strict";this._typeahead.getCore().resetOnKeyup=false;this._subscription=this._typeahead.subscribe('bootstrap',function(j,k){this.firstFetch(k,this._typeahead.getCore(),this._typeahead.getData());}.bind(this));this._keyUpListener=g.listen(this._typeahead.getCore().getElement(),'keyup',function(event){if(g.getKeyCode(event)==h.BACKSPACE||g.getKeyCode(event)==h.DELETE)this.respond(this._typeahead.getCore(),this._typeahead.getData());}.bind(this));this._focusListener=g.listen(this._typeahead.getCore().getElement(),'focus',function(event){this.respond(this._typeahead.getCore(),this._typeahead.getData());}.bind(this));};i.prototype.disable=function(){"use strict";this._typeahead.unsubscribe(this._subscription);this._subscription=null;this._keyUpListener.remove();this._keyUpListener=null;this._focusListener.remove();this._focusListener=null;};i.prototype.firstFetch=function(j,k,l){"use strict";!j.bootstrapping&&this.respond(k,l);};i.prototype.respond=function(j,k){"use strict";if(!j.getValue())this.refreshAndShowNeededResults(j,k);};i.prototype.refreshAndShowNeededResults=function(j,k){"use strict";var l=this.getUidsFromData(k);j.setValue('');var m=k.buildUids(' ',l);k.respond('',m);};i.prototype.getUidsFromData=function(j){"use strict";var k=j.getAllEntries(),l=[];for(var m in k)l.push({uid:k[m].uid,index:k[m].index});l.sort(function(n,o){return n.index-o.index;});return l.map(function(n){return n.uid;});};Object.assign(i.prototype,{_subscription:null,_keyUpListener:null,_focusListener:null});e.exports=i;},null);
__d("TypeaheadCustomGroupShowMemberSuggestionsOnFocus",["TypeaheadShowResultsOnFocus"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();for(var h in g)if(g.hasOwnProperty(h))j[h]=g[h];var i=g===null?null:g.prototype;j.prototype=Object.create(i);j.prototype.constructor=j;j.__superConstructor__=g;function j(){"use strict";if(g!==null)g.apply(this,arguments);}j.prototype.enable=function(){"use strict";i.enable.call(this);this.enableCustomizedFeature();};j.prototype.firstFetch=function(k,l,m){"use strict";setTimeout(function(){i.firstFetch.call(this,k,l,m);}.bind(this),200);};j.prototype.enableCustomizedFeature=function(){"use strict";this._typeahead.getCore().noResetAfterSelect=true;this._typeahead.subscribe('select',function(k,l){this._typeahead.removeSuggestedMember(l.selected.uid);this.refreshAndShowNeededResults(this._typeahead.getCore(),this._typeahead.getData());}.bind(this));};j.prototype.getUidsFromData=function(k){"use strict";var l=k.getAllEntries(),m=[];for(var n in l)if(this._typeahead.containsInSuggestedMembers(l[n].uid))m.push({uid:l[n].uid,index:l[n].index});m.sort(function(o,p){return o.index-p.index;});return m.map(function(o){return o.uid;});};e.exports=j;},null);
__d("TypeaheadCustomGroupShowMemberSuggestionsOnRHCFocus",["TypeaheadCustomGroupShowMemberSuggestionsOnFocus"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();for(var h in g)if(g.hasOwnProperty(h))j[h]=g[h];var i=g===null?null:g.prototype;j.prototype=Object.create(i);j.prototype.constructor=j;j.__superConstructor__=g;function j(){"use strict";if(g!==null)g.apply(this,arguments);}j.prototype.enableCustomizedFeature=function(){"use strict";this._typeahead.subscribe('select',function(k,l){this._typeahead.removeSuggestedMember(l.selected.uid);}.bind(this));};e.exports=j;},null);
__d("TypeaheadPreventSubmitOnEnter",["Event","Keys"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(j){"use strict";this._typeahead=j;}i.prototype.enable=function(){"use strict";var j=this._typeahead.getCore().getElement();this._listener=g.listen(j,'keypress',function(k){if(g.getKeyCode(k)==h.RETURN)k.kill();});};i.prototype.disable=function(){"use strict";this._listener.remove();this._listener=null;};Object.assign(i.prototype,{_listener:null});e.exports=i;},null);