/*!CK:4170548529!*//*1438006018,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Sk6rR"]); }

__d("NamePronunciationLogEvent",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={PLAY_NAME:"play_name",PREVIEW_NAME:"preview_name",PREVIEW_FULL:"preview_full",PREVIEW_SYLLABLE:"preview_syllable",PREVIEW_CUSTOM:"preview_custom",OPEN_EDITOR:"open_editor",CANCEL_EDITING:"cancel_editing",SEE_TIPS:"see_tips",HIDE_TIPS:"hide_tips",CREATE:"create",ERROR:"error",EDIT:"edit",DELETE:"delete"};},null);
__d("TTSVoiceFlavor",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={FLAVOR_ECHO:"echo",FLAVOR_PRONOUNCER:"pronouncer"};},null);
__d("PronunciationBanzaiLogger",["Banzai","NamePronunciationLogEvent"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={formatCustomPlayerData:function(j,k,l){if(!j)return null;var m=Object.assign({},j);switch(k){case 'first':m.firstname_text=l;break;case 'last':m.lastname_text=l;break;}m.event=h.PREVIEW_CUSTOM;return m;},formatStaticPlayerData:function(j,k,l){if(!j)return null;var m=Object.assign({},j);switch(k){case 'first':m.firstname_text=l.phoneme;m.firstname_sampa=l.sampa;m.firstname_option=l.option;break;case 'last':m.lastname_text=l.phoneme;m.lastname_sampa=l.sampa;m.lastname_option=l.option;break;}m.event=h.PREVIEW_NAME;return m;},formatPreviewPlayerData:function(j,k,l){if(!j||!k||!l)return null;var m=Object.assign({},j);m.firstname_text=k.phoneme;m.firstname_sampa=k.sampa;m.lastname_text=l.phoneme;m.lastname_sampa=l.sampa;m.event=h.PREVIEW_FULL;return m;},logSyllableSuggestionClick:function(j,k,l){var m=Object.assign({},j);switch(k){case 'first':m.firstname_text=l;break;case 'last':m.lastname_text=l;break;}m.event=h.PREVIEW_SYLLABLE;this.logToBanzai(m);},logToBanzai:function(j){if(j!==null)g.post('name_pronunciation_play',j);},logSeeTipsClick:function(j,k){if(!j)return null;var l=Object.assign({},j);l.event=k?h.SEE_TIPS:h.HIDE_TIPS;this.logToBanzai(l);}};e.exports=i;},null);
__d("XText2SpeechController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/tts\/",{text:{type:"String",required:true},voice:{type:"String"},samplerate:{type:"Int",defaultValue:44100},format:{type:"String",defaultValue:"mp3"},pid:{type:"Int",defaultValue:3},d:{type:"Bool",defaultValue:false},language:{type:"String",defaultValue:"en"},country:{type:"String",defaultValue:"US"},gender:{type:"String",defaultValue:"female"},flavor:{type:"String",defaultValue:"echo"},id:{type:"Int"},speed:{type:"Int",defaultValue:110},range:{type:"Bool",defaultValue:false}});},null);
__d("TextToSpeechAudioMixin",["PronunciationBanzaiLogger","React","TTSVoiceFlavor","URI","XText2SpeechController","getObjectValues"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=h,n=m.PropTypes,o={propTypes:{flavor:n.oneOf(l(i)),gender:n.string,logData:n.object,onEnded:n.func,onPlay:n.func,profileID:n.string,pronunciation:n.string},getDefaultProps:function(){return {flavor:i.FLAVOR_PRONOUNCER,logData:null,pronunciation:''};},getInitialState:function(){return {loading:false,playing:false};},componentWillReceiveProps:function(p){if(this.props.pronunciation!==p.pronunciation)this.shouldLoad=true;},componentDidMount:function(){var p=h.findDOMNode(this.refs.audio);p.addEventListener('canplay',this._handleCanPlay);p.addEventListener('ended',this._handleEnded);p.addEventListener('loadstart',this._handleLoadStart);p.addEventListener('pause',this._handleEnded);p.addEventListener('playing',this._handlePlaying);p.addEventListener('timeupdate',this._handleTimeUpdate);},componentWillUnmount:function(){var p=h.findDOMNode(this.refs.audio);p.removeEventListener('canplay',this._handleCanPlay);p.removeEventListener('ended',this._handleEnded);p.removeEventListener('loadstart',this._handleLoadStart);p.removeEventListener('pause',this._handleEnded);p.removeEventListener('playing',this._handlePlaying);p.removeEventListener('timeupdate',this._handleTimeUpdate);},_handleLoadStart:function(){if(this.props.pronunciation!=='')this.setState({loading:true});},_handleCanPlay:function(){this.setState({loading:false});if(this.shouldPlay){this.shouldPlay=false;this.play();}},_handleOnClick:function(){if(this.props.pronunciation==='')return;this.play();},_handleEnded:function(){if(this.props.onEnded)this.props.onEnded();this.setState({playing:false});},_handlePlaying:function(){this.setState({playing:true});var p=this.props.logData;g.logToBanzai(p);this.props.onPlay&&this.props.onPlay();},_handleTimeUpdate:function(){var p=h.findDOMNode(this.refs.audio);if(this.state.playing&&p.currentTime===0&&p.duration===0){this.shouldLoad=true;this._handleEnded();}},play:function(){var p=h.findDOMNode(this.refs.audio);if(this.shouldLoad){this.shouldPlay=true;p.load();this.shouldLoad=false;return;}p.play();},_getURIForText:function(p){return this._getURIForTextAndFormat(p,'mp3');},_getURIForTextAndFormat:function(p,q){if(p==='')return new j('');return k.getURIBuilder().setString('flavor',this.props.flavor).setString('text',p).setString('gender',this.props.gender).setInt('id',this.props.profileID).setString('format',q).getURI();}};e.exports=o;},null);
__d("PronounceNameButton.react",["Keys","React","ReactComponentWithPureRenderMixin","TextToSpeechAudioMixin","Image.react","XUISpinner.react","cx","ix","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=h,q=p.PropTypes,r=12,s=16,t=h.createClass({displayName:"PronounceNameButton",propTypes:{size:q.oneOf(['small','medium'])},getDefaultProps:function(){return {size:'medium'};},mixins:[i,j],render:function(){var u=null;if(this.state.loading)u=h.createElement(l,{background:"light",className:(("_4brk")+(this.props.size==='medium'?' '+"__3c":'')),size:"small"});var v=this.props.pronunciation==='',w,x;if(this.props.size==='small'){x=r;if(v){w=n('/images/language_technology/playBtn_disabled_small.png');}else w=n('/images/language_technology/playBtn_small.png');}else{x=s;if(v){w=n('/images/language_technology/playBtn_disabled.png');}else w=n('/images/language_technology/play_button.png');}return (h.createElement("span",h.__spread({},this.props,{className:o(this.props.className,(("_d2c")+(this.props.size==='small'?' '+"__3d":'')+(this.props.size==='medium'?' '+"__3e":'')+(v?' '+"_4brl":''))),onClick:this._handleOnClick,onKeyDown:this._handleKeyDown,tabIndex:0}),h.createElement(k,{className:"_4brm",height:x,ref:"image",src:w,width:x}),u,h.createElement("audio",{preload:"auto",ref:"audio"},h.createElement("source",{src:this._getURIForText(this.props.pronunciation),type:"audio/mpeg"}))));},_handleKeyDown:function(event){switch(event.keyCode){case g.RETURN:case g.SPACE:this._handleOnClick();}}});e.exports=t;},null);