/*!CK:3204444010!*//*1438009844,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["NuMEo"]); }

__d("TriggerablePageletLoader",["CSS","Event","OnVisible","Run","UIPagelet"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=[];function m(o){if(!l[o])return;l[o].__trigger&&l[o].__trigger.remove();delete l[o];}function n(o,p){"use strict";this._disabledTriggerKeys=[];this._pageletConfig=o;this._loaded=false;this._loading=false;this._triggerKeys=[];if(p)p.forEach(this.addTrigger.bind(this));j.onLeave(this.destroy.bind(this));}n.prototype.addTrigger=function(o){"use strict";o.__trigger=this._createTrigger(o);l.push(o);this._triggerKeys.push(l.length-1);};n.prototype.destroy=function(){"use strict";this.removeTriggers();if(this._pageletRequest){this._pageletRequest.cancel();this._pageletRequest=null;this._loading=false;this._loaded=false;}};n.prototype.disableTriggers=function(){"use strict";this._triggerKeys.forEach(function(o){if(l[o]){l[o].__trigger.remove();this._disabledTriggerKeys.push(o);}}.bind(this));};n.prototype.enableTriggers=function(){"use strict";if(this._loaded||this._loading)return;this._disabledTriggerKeys.forEach(function(o){if(l[o])l[o].__trigger=this._createTrigger(l[o]);}.bind(this));this._disabledTriggerKeys.length=0;};n.prototype._createTrigger=function(o){"use strict";if(this._loaded||this._loading)return;var p=this.onTrigger.bind(this,o);switch(o.type){case n.TRIGGER_CLICK:return h.listen(o.node,'click',function(q){if(q.isDefaultRequested())return;q.prevent();p();});case n.TRIGGER_ONVISIBLE:return new i(o.node,p,o.onVisibleStrict,o.onVisibleBuffer);case n.TRIGGER_NOW:return p();default:}};n.prototype.load=function(o){"use strict";if(this._loaded||this._loading)return;this._loading=true;this._loaded=false;g.addClass(this._pageletConfig.node,'async_saving');if(o&&o.node)g.addClass(o.node,'async_saving');var p=this._pageletConfig.options||{};p.displayCallback=this.onLoad.bind(this,o);if(p.crossPage===(void 0))p.crossPage=true;this._pageletRequest=k.loadFromEndpoint(this._pageletConfig.controller,this._pageletConfig.node,this._pageletConfig.data,p);};n.prototype.onLoad=function(o,p){"use strict";this._loaded=true;this._pageletRequest=null;g.removeClass(this._pageletConfig.node,'async_saving');if(o&&o.node)g.removeClass(o.node,'async_saving');if(this._pageletConfig.displayCallback){this._pageletConfig.displayCallback(p);}else p();};n.prototype.onTrigger=function(o){"use strict";o.callback&&o.callback(o);if(!this._loaded&&!this._loading)this.load(o);};n.prototype.removeTriggers=function(o){"use strict";this._triggerKeys.forEach(function(p){if(l[p]&&(!o||l[p].type===o))m(p);});};n.removeTrigger=function(o){"use strict";for(var p=0;p<l.length;p++)if(l[p]&&l[p].node===o)m(p);};Object.assign(n,{TRIGGER_CLICK:'click',TRIGGER_ONVISIBLE:'onvisible',TRIGGER_NOW:'now'});e.exports=n;},null);
__d("OGCollectionAddCuration",["AsyncRequest","DataStore","DOM","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k='OGCollectionAddCuration';function l(m,n,o,p,q,r){this._container=m;this._control=n;this._itemID=o;this._surface=q;this._display=r.display;if(n)j([n.subscribe('reload',this.reloadControl.bind(this))]);if(p)h.set(String(p),k,this);if(o)h.set(String(o),k,this);}Object.assign(l,{handleDeleteAction:function(m){var n=h.get(String(m),k);if(n)n.reloadControl();},handleAddItemSuccess:function(m,n,o){var p=h.get(String(m),k);h.set(String(n),k,p);p.insertMenuIntoDialog(o);},hideControl:function(m){var n=h.get(String(m),k);n.hideControl();},insertControl:function(m,n){var o=h.get(String(m),k);o.replaceControl(n);},reloadControl:function(m){var n=h.get(String(m),k);if(n)n.reloadControl();}});Object.assign(l.prototype,{hideControl:function(){this._control.hide();},reloadControl:function(){var m=new g('/ajax/collections/add_curation').setData({itemid:this._itemID,surface:this._surface,forceedit:true,display:this._display}).setHandler(this._handleAddCurationResponse.bind(this));m.send();},insertMenuIntoDialog:function(m){this._control.insertMenuIntoDialog(m);},replaceControl:function(m){i.replace(this._container,m);},getMenuControl:function(){return this._control;},_handleAddCurationResponse:function(m){this._control.destroy();i.replace(this._container,m.payload);}});e.exports=l;},null);
__d("MedleyPageletRequestData",["Arbiter","TidyArbiter"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={},j={get:function(){return i;},set:function(k){i=k;h.inform('Medley/requestDataSet',null,g.BEHAVIOR_STATE);}};e.exports=j;},null);
__d("TimelineAppSectionCuration",["Animation","AppSectionCurationState","Arbiter","AsyncSignal","CSS","DOM","Ease","Event","OnVisible","Parent","Style","TidyArbiterMixin","ProfileOverviewSection","cx","queryThenMutateDOM","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){b.__markCompiled&&b.__markCompiled();var w=0,x={},y={};function z(ea,fa,ga){var ha,ia;u(function(){ia=ea.offsetHeight;ha=fa===h.hide?0:ea.firstChild.offsetHeight;},function(){q.set(ea,'height',ia+'px');q.set(ea,'overflow','hidden');ha&&k.addClass(ea.parentNode,"_52bu");setTimeout(o.checkBuffer,0);var ja=l.getID(ea);y[ja]&&y[ja].stop();y[ja]=new g(ea).to('height',ha).ondone(function(){delete y[ja];if(ha){q.set(ea,'overflow','');q.set(ea.parentNode,'overflow','');}!ha&&k.removeClass(ea.parentNode,"_52bu");i.inform('reflow');}).duration(Math.abs(ha-ia)*1.5).ease(m.sineOut).go();});}function aa(ea,fa){if(ea){k.show(fa);k.hide(ea);}}function ba(ea,fa){if(ea){k.show(ea);k.hide(fa);}}function ca(ea,fa){s.callWithSection(ea,function(ga){new j('/ajax/timeline/collections/app_recs/',{collection_token:ga.getActiveCollection().getToken(),event_type:fa}).send();});}var da=Object.assign({addSection:function(ea,fa,ga){x[ea]={appClickLogged:false,buttons:fa,content:ga,id:ea,state:h.hide,previousState:h.hide,currentCollectionToken:(void 0),onVisible:null};q.set(ga,'height','0px');q.set(ga,'overflow','hidden');k.show(ga);for(var ha in fa)v([n.listen(fa[ha].hide_button,'click',da.informState.bind(null,h.hide,ea)),n.listen(fa[ha].hide_button,'click',da.informToggleDrawer.bind(null,'hide',ea)),n.listen(fa[ha].show_button,'click',da.informState.bind(null,ha,ea)),n.listen(fa[ha].show_button,'click',da.informToggleDrawer.bind(null,'show',ea))]);da.register(ea,function(ia,ja,ka,la){x[ea].onVisible&&x[ea].onVisible.remove();x[ea].onVisible=new o(ga,z.bind(null,ga,ia,la),true,w);for(var ma in fa)ba(fa[ma].show_button,fa[ma].hide_button);if(fa[ia])aa(fa[ia].show_button,fa[ia].hide_button);});},informState:function(ea,fa,ga,ha){if(typeof(ha)==='undefined')ha=true;if(x[fa]){var ia=x[fa].state;if(!ha&&ea==h.hide)ea=ia;if(!ha&&ga==x[fa].currentCollectionToken)ea=x[fa].previousState;if(ga)x[fa].currentCollectionToken=ga;if(x[fa].state!==ea){if(ea===h.showApps&&!x[fa].appClickLogged){x[fa].appClickLogged=true;ca(fa,'add_apps_click');}x[fa].previousState=ia;x[fa].state=ea;da.inform(ea,{obj:x[fa],oldState:ia});}}},informToggleDrawer:function(ea,fa){da.inform('toggle_drawer',{button_clicked:ea,section:x[fa]});},refreshState:function(ea,fa){da.inform(ea,{obj:x[fa],oldState:ea});},linkContent:function(ea,fa,ga){var ha=x[ea].buttons[h.showApps].show_button;k.show(p.byClass(ha,'hidden_elem'));new o(ha,function(){if(Math.floor(Math.random()*100)===0)ca(ea,'add_apps_imp');},true,w);da.register(ea,function(ia,ja,ka,la){if(ia==h.showItems){if(la==h.showApps)q.set(x[ea].content.parentNode,'overflow','hidden');k.show(fa);k.hide(ga);}else if(ia==h.showApps){k.hide(fa);k.show(ga);}});},register:function(ea,fa){var ga=da.subscribe([h.hide,h.showItems,h.showApps],function(ha,ia){if(ia.obj.id===ea)fa(ha,ia.obj,ga,ia.oldState);});},getSectionState:function(ea){if(x[ea])return x[ea].state;}},r);e.exports=da;},null);
__d("TimelineDynamicSection",["DOM","TimelineDynamicSectionMarkup","ProfileOverviewSection","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();for(var l in i)if(i.hasOwnProperty(l))n[l]=i[l];var m=i===null?null:i.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=i;function n(o,p,q){"use strict";i.call(this,o,o,q);this._controller=p;this._data=null;this._node=null;this._triggerLoader=null;}n.prototype._createNode=function(){"use strict";var o=["_30f"];this._wrapperClass&&o.push(this._wrapperClass);return g.create('div',{className:o.join(' '),id:this.nodeID},[h.throbber.cloneNode(true)]);};n.prototype.getNode=function(){"use strict";if(!this._node)this._node=k(this.nodeID)||this._createNode();return this._node;};e.exports=n;},null);
__d("TimelineAppCollection",["Arbiter","CSS","DOM","DOMQuery","Event","MedleyPageletRequestData","NumberFormatConfig","PageTransitions","Parent","ProfileOverviewDOMID","TidyArbiter","TidyArbiterMixin","TimelineAppSectionCuration","TimelineDynamicSection","TimelineDynamicSectionMarkup","ProfileOverviewSection","TriggerablePageletLoader","classWithMixins","csx","cx","ads-lib-formatters","ge","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca){b.__markCompiled&&b.__markCompiled();var da=500,ea=8;function fa(ma){var na=ba(la.getIDByToken(ma));if(!na)return;return i.scry(na,"._620")[0];}function ga(ma,na){if(na)if(na.isDefaultRequested&&na.isDefaultRequested()){return;}else if(na.prevent)na.prevent();var oa=ma._parentSection,pa=oa._parentSection;v.setActiveSectionID(oa.id);oa.setActiveCollection(ma);if(oa.isActiveAppSection()){if(!h.hasClass(pa.getNode(),"_c4f")){h.addClass(pa.getNode(),"_c4f");pa.freezeChildren();}ma._isFullyLoaded&&pa.addSectionTeasers();}if(!pa.isOverviewProfileTab()&&oa.isActiveAppSection()){g.inform("save_facebar_query",true);var qa=ma.href;n.rewriteCurrentURI(n.getCurrentURI().getUnqualifiedURI(),qa);}g.inform('Medley/tab-change',{section:ma,appSection:oa,appMedley:pa});}function ha(ma,na){var oa=ma._parentSection;na.data.overview=!oa.isActiveAppSection();na.data.cursor=null;ga(ma);}var ia=x(t,ca(r));for(var ja in ia)if(ia.hasOwnProperty(ja))la[ja]=ia[ja];var ka=ia===null?null:ia.prototype;la.prototype=Object.create(ka);la.prototype.constructor=la;la.__superConstructor__=ia;function la(ma){"use strict";ia.call(this,la.getIDByToken(ma.token),ma.controller);this._contentLoader=null;this._isFrozen=false;this._isFullyLoaded=false;this._cursor=0;this._tabNode=ma.tab_node;this._tabCount=ma.tab_count>0?ma.tab_count:0;this._token=ma.token;this._ftid=null;this.auxContent=null;this.curationContent=null;this._itemPlaceholderMarkup=null;this._order=ma.order;this.href=ma.href;this._sortContent=null;this._rootClass=ma.root_class;this._wrapperClass=ma.wrapper_class;this._importerState=ma.importer_state;this.refreshCount();if(!this._tabNode)return;if(ba(this.nodeID)){k.listen(this._tabNode,'click',ga.bind(null,this));}else setTimeout(this.createTriggerLoader.bind(this),0);}la.prototype.addContentLoader=function(ma,na,oa){"use strict";this._cursor=na;q.subscribe('Medley/requestDataSet',function(){var pa={node:ma};if(h.hasClass(ma,"_3t3")&&!oa){pa.type=w.TRIGGER_CLICK;}else if(this._isFrozen&&!oa){i.remove(ma);pa.node=u.pager.cloneNode(true);i.appendContent(this.getNode(),pa.node);pa.type=w.TRIGGER_CLICK;}else{pa.onVisibleBuffer=da;pa.onVisibleStrict=true;pa.type=w.TRIGGER_ONVISIBLE;}if(pa.type===w.TRIGGER_CLICK)pa.callback=v.setActiveSectionID.bind(null,this.id);var qa=Object.assign({displayCallback:function(sa){i.remove(pa.node);sa();},options:{append:true}},this.getDefaultPageletConfig()),ra=this._parentSection;qa.data.overview=!ra.isActiveAppSection();this._triggerLoader=null;this._contentLoader=new w(qa,[pa]);}.bind(this));};la.prototype._createNode=function(){"use strict";var ma=ka._createNode.call(this);ma.setAttribute('aria-role','tabpanel');return ma;};la.prototype.createTriggerLoader=function(){"use strict";if(!this._pageletConfig)this._pageletConfig=this.getDefaultPageletConfig();q.subscribe('Medley/requestDataSet',function(){var ma={callback:ha.bind(null,this,this._pageletConfig),node:this._tabNode,type:w.TRIGGER_CLICK};this._triggerLoader=new w(this._pageletConfig,[ma]);}.bind(this));};la.prototype.disableContentLoader=function(){"use strict";this._contentLoader&&this._contentLoader.disableTriggers();};la.prototype.enableContentLoader=function(){"use strict";var ma=this._triggerLoader||this._contentLoader;ma&&ma.enableTriggers();};la.prototype.freeze=function(){"use strict";this._isFrozen=true;if(!this._contentLoader||this._contentLoader._loading)return;this._contentLoader.removeTriggers(w.TRIGGER_ONVISIBLE);var ma=j.scry(this.getNode(),"._3t3");if(!ma.length){var na=j.scry(this.getNode(),"._359")[0];na.length&&this.addContentLoader(na,this._cursor);}};la.prototype.getCount=function(){"use strict";return this._tabCount;};la.prototype.getDefaultPageletConfig=function(){"use strict";return {controller:this._controller,data:Object.assign({collection_token:this._token,cursor:this._cursor},l.get(),{ftid:this._ftid,order:this._order,sk:this._parentSection._sk,importer_state:this._importerState}),node:this.getNode()};};la.prototype.getMedleySiteKey=function(){"use strict";return this._parentSection._parentSection._sk;};la.prototype.getRootClass=function(){"use strict";return this._rootClass;};la.prototype.flashCountIf=function(){"use strict";if(!this.isActiveCollection()&&this._tabNode){h.addClass(this._tabNode,"_4-k9");setTimeout(h.removeClass.bind(null,this._tabNode,"_4-k9"),800);}};la.prototype.isActiveCollection=function(){"use strict";return this._parentSection.getActiveCollection()===this;};la.prototype.registerAuxContent=function(ma){"use strict";if(ma.nodeType==11)ma=i.create('span',null,ma);this._resetAuxContent();this.auxContent=ma;this._parentSection.addAuxContent(this.auxContent);h.conditionShow(this.auxContent,this.isActiveCollection());};la.prototype.registerAddCurationContent=function(ma,na,oa,pa,qa){"use strict";if(this.curationContent)return;this.curationContent=(ma.nodeType==11)?i.create('span',null,ma):ma;if(!this.isActiveCollection())return;this.curationContentState=na;this._itemPlaceholderMarkup=qa;this._parentSection.addCurationContent(this.curationContent,this,oa);if(pa)s.subscribe('toggle_drawer',function(event,ra){if(ra.button_clicked==='show'){this.curationContentState='show_items';}else this.curationContentState='hide';}.bind(this));};la.prototype.makeActive=function(ma){"use strict";if(ma){this._parentSection.resetMinHeight();this._resetAuxContent();this._resetContent();}ga(this);};la.prototype.nullStateCurationContent=function(){"use strict";this._parentSection.nullStateCurationContent();};la.prototype.registerSortContent=function(ma,na){"use strict";this._sortContent&&i.remove(this._sortContent);this._sortContent=ma;na.subscribeOnce('change',function(oa,pa){i.setContent(i.find(ma,"._57oy"),pa.label);this._sort(pa.value);}.bind(this));};la.prototype.refreshCount=function(){"use strict";if(!this._tabNode)return;var ma=j.find(this._tabNode,"._3d0");if(this._tabCount>0){i.setContent(ma,aa.formatNumber(this._tabCount,0,m.numberDelimiter,''));}else i.setContent(ma,'');};la.prototype._resetAuxContent=function(){"use strict";if(this.auxContent){i.remove(this.auxContent);this.auxContent=null;}};la.prototype._resetContent=function(){"use strict";this._contentLoader&&this._contentLoader.destroy();i.remove(this.getNode());this._node=null;i.appendContent(j.find(this._parentSection.getNode(),"div._3i9"),this.getNode());this.addContentLoader(j.find(this.getNode(),"._359"),0);};la.prototype.setFTID=function(ma){"use strict";this._ftid=ma;};la.prototype._sort=function(ma){"use strict";this._order=ma;this._resetContent();var na=this._parentSection,oa=na._parentSection;if(!oa.isOverviewProfileTab()&&na.isActiveAppSection()){var pa=n.getCurrentURI();pa.addQueryData({order:this._order});n.rewriteCurrentURI(n.getCurrentURI().getUnqualifiedURI(),pa);}};la.prototype.thaw=function(){"use strict";this._isFrozen=false;};la.prototype.getToken=function(){"use strict";return this._token;};la.prototype.getParentSection=function(){"use strict";return this._parentSection;};la.addPlaceholderToCollection=function(ma,na,oa){"use strict";oa=typeof oa!=='undefined'?oa:{};var pa=i.scry(na,"._gx7")[0],qa='',ra='';if(pa){qa=pa.text;ra=pa.href;}var sa=i.scry(na,"._gx8 .img")[0],ta=sa&&sa.src,ua=i.scry(na,"._3owb")[0],va=ua&&ua.getAttribute('data-obj');la.addGenericPlaceholderToCollection(ma,Object.assign(oa,{entityID:va,imageSrc:ta,link:ra,title:qa}));};la.addGenericPlaceholderToCollection=function(ma,na){"use strict";if(!na.suppressCount)this.incrementCount(la.getIDByToken(ma));if(!na.entityID)return;v.callWithSection(la.getIDByToken(ma),function(oa){oa.inform(la.ADDING_PLACEHOLDER);var pa=oa._parentSection,qa=fa(ma);if(!qa)return;var ra=i.scry(qa,'[data-obj="'+na.entityID+'"]')[0],sa=oa._itemPlaceholderMarkup.cloneNode(true);if(!oa._itemPlaceholderMarkup)return;sa.setAttribute('data-item',na.entityID);if(ra&&na.replaceExistingElement){i.replace(ra.parentNode,sa);}else{if(ra){i.remove(ra.parentNode);}else if(!pa.isActiveAppSection()&&qa.children.length>=ea)h.addClass(qa.children[ea-1],"_51k9");i.prependContent(qa,sa);}});};la.replaceItem=function(ma,na,oa){"use strict";var pa=o.byClass(ma,"_620"),qa=i.scry(pa,'div[data-obj="'+na+'"]')[0];if(qa){la.inform(la.NEW_ITEM,{grid:pa,newItem:oa});i.replace(qa.parentNode,oa);}};la.addItemToCollectionAndIncrementCount=function(ma,na,oa){"use strict";this.incrementCount(oa);this.addItemToCollection(ma,na,oa);};la.addItemToCollection=function(ma,na,oa){"use strict";var pa=ba(oa);if(!pa)return;var qa=i.scry(pa,"._620")[0],ra=qa.parentNode.nextSibling;if(ra&&h.hasClass(ra,"_3t3"))i.remove(qa.lastChild);this.inform(la.NEW_ITEM,{grid:qa,newItem:ma});var sa=i.find(qa,'[data-item="'+na+'"]'+"._2804");if(sa){i.replace(sa,ma);return;}i.prependContent(qa,ma);};la.addMultipleToCollection=function(ma,na){"use strict";for(var oa in ma)this.addItemToCollection(ma[oa],oa,na);};la.createFromArray=function(ma){"use strict";return ma.map(function(na){return new la(na);});};la.decrementCount=function(ma){"use strict";v.callWithSection(ma,function(na){if(na._tabCount>0){na._tabCount--;na.refreshCount();na.flashCountIf();}});};la.enableContentLoader=function(ma,na,oa){"use strict";v.callWithSection(ma,function(pa){pa.addContentLoader(na,oa);});};la.getIDByToken=function(ma){"use strict";return p.PREFIX_APP_COLLECTION+ma;};la.incrementCount=function(ma){"use strict";v.callWithSection(ma,function(na){na._tabCount++;na.refreshCount();na.flashCountIf();});};la.registerAuxContent=function(ma,na){"use strict";v.callWithSection(ma,function(oa){oa.registerAuxContent(na);});};la.registerAddCurationContent=function(ma,na,oa,pa,qa,ra){"use strict";v.callWithSection(ma,function(sa){sa.registerAddCurationContent(na,oa,pa,qa,ra);});};la.registerSortContent=function(ma,na,oa){"use strict";v.callWithSection(ma,function(pa){pa.registerSortContent(na,oa);});};la.clickTabNode=function(ma,na){"use strict";v.callWithSection(la.getIDByToken(ma),function(oa){if(oa._triggerLoader)oa._triggerLoader.addTrigger({callback:ha.bind(null,oa,oa._pageletConfig),node:oa._tabNode,type:w.TRIGGER_NOW});ga(oa);});};la.setLoaded=function(ma){"use strict";v.callWithSection(ma,function(na){na.setIsLoaded(true);na._parentSection.inform('loaded',na);na._parentSection.unsetMinHeight();});};la.setFullyLoaded=function(ma){"use strict";v.callWithSection(ma,function(na){na._isFullyLoaded=true;var oa=na._parentSection;if(oa.isActiveAppSection())oa._parentSection.addSectionTeasers();});};la.setFTID=function(ma,na){"use strict";v.callWithSection(ma,function(oa){oa.setFTID(na);});};la.switchToNullStateCurationContent=function(ma){"use strict";v.callWithSection(la.getIDByToken(ma),function(na){na.nullStateCurationContent();});};Object.assign(la,r,{NEW_ITEM:'TimelineAppCollection/newItem',ADDING_PLACEHOLDER:'TimelineAppCollection/addingPlaceholder'});e.exports=la;},null);
__d("OGCollectionAddObject",["AsyncRequest","CSS","DOM","DOMQuery","Form","JSLogger","Parent","TidyArbiterMixin","TimelineAppCollection","ProfileOverviewSection","csx","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();var t=l.create('og_collection_add_object'),u=Object.assign({ADD_PLACEHOLDER:'OGCollectionAddObject/addPlaceholder',NEW_ITEM:'OGCollectionAddObject/newItem',PLACEHOLDER:'OGCollectionAddObject/placeholder',REMOVE_PLACEHOLDER:'OGCollectionAddObject/removePlaceholder',init:function(v,w,x,y){p.callWithSection(y,function(z){this.initImpl(v,w,x,z.getNode(),y,z.id);}.bind(this));},initInReport:function(v,w,x){var y=m.byClass(x,"_w8_");this.initImpl(v,w,x,y,null,null);},initImpl:function(v,w,x,y,z,aa){var ba=j.scry(y,"._620")[0];if(!ba){t.error('grid_not_found',{collection_id:z,section:aa,csx:'.public/fbTimelineCollectionGrid/root'});return;}w.subscribe('select',function(ca,da){if(!da.selected.uid||da.selected.type.indexOf('disabled')!=-1)return;u.inform(u.ADD_PLACEHOLDER,z);var ea=ba.nextSibling,fa=null;if(ea&&h.hasClass(ea,"_3t3")){h.hide(ba.lastChild);fa=ba.lastChild;}o.addGenericPlaceholderToCollection(k.serialize(x).collection_token,{entityID:da.selected.uid});u.inform(u.PLACEHOLDER,{grid:ba});var ga=Object.assign({action:'add',mechanism:'typeahead'},k.serialize(x));new g().setURI(v).setData(ga).setRelativeTo(ba).setErrorHandler(function(ha){var ia=i.scry(ba,'[data-item="'+da.selected.uid+'"]')[0];if(ia)i.remove(ia);u.inform(u.REMOVE_PLACEHOLDER,z);fa&&h.show(fa);}).setHandler(function(ha){fa&&i.remove(fa);}).setFinallyHandler(function(ha){u.inform(u.PLACEHOLDER,{grid:ba});}).send();});},replaceItem:function(v,w,x){var y=i.scry(v,'div[data-obj="'+w+'"]')[0];if(y){var z=m.byClass(y,"_30f");if(z)u.inform(u.REMOVE_PLACEHOLDER,z.id);i.remove(y.parentNode);}var aa=i.find(v,'[data-item="'+w+'"]'+"._2804");i.replace(aa,x);this.inform(u.NEW_ITEM,{grid:v,newItem:x});},prependItem:function(v,w){var x=j.scry(s(v),"._620")[0];i.prependContent(x,w);this.inform(u.NEW_ITEM,{grid:x,newItem:w});}},n);e.exports=u;},null);
__d("OGCollectionBatchAddCuration",["AsyncRequest","Event","OGCollectionAddCuration","Parent","Run"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={},m;function n(p){for(var q=0;q<l[p].listeners.length;q++)l[p].listeners[q].remove();l[p]=null;}var o={loadControls:function(p,q,r){if(!q||!Array.isArray(q))return;l[r]=l[r]||{tokens:[],listeners:[]};l[r].tokens=l[r].tokens.concat(q);var s=j.byClass(p,'fbTimelineUnit');l[r].listeners.push(h.listen(s,'mouseenter',function(){new g('/ajax/collections/batch_add_curation').setData({collectionitemtokens:l[r].tokens.join(),surface:r}).send();n(r);}));if(!m){m=true;k.onLeave(function(){for(var t in l)l[t]&&n(t);l={};m=null;});}},attachControls:function(p,q){for(var r=0;r<p.length;r++)i.insertControl(p[r],q[r]);}};e.exports=o;},null);
__d("ProfileInfoRequestSuggestion",["CSS","Event","tidyEvent"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={listenThinker:function(k,l,m){m=m||'hidden_elem';i(h.listen(k,'click',g.removeClass.bind(g,l,m)));}};e.exports=j;},null);
__d("TimelineOGCollectionReportGrid",["CSS","OGCollectionAddObject"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={init:function(j,k){h.subscribe([h.NEW_ITEM,h.PLACEHOLDER],i.hideOverflowNodes.bind(null,j,k));},hideOverflowNodes:function(j,k,l,m){if(m.grid!=j)return;for(var n=0;n<j.childNodes.length;n++)g.conditionShow(j.childNodes[n],n<k);}};e.exports=i;},null);