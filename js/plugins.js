/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));

// place any jQuery/helper plugins in here, instead of separate, slower script files.

// Toggles & Switches = Watchers
document.addEventListener('DOMContentLoaded', function() {
  console.log('Toggles & Switches');

  [].forEach.call(document.querySelectorAll('[data-toggle], [data-switch-on], [data-switch-off], [data-toggle-replace], [data-switch-replace]'), function(btn) {
    btn.addEventListener('ToggleSwitch.toggled', function() {
      console.log("Toggled!", this);
    });

    btn.addEventListener('ToggleSwitch.added', function() {
      console.log("Added!", this);
    });

    btn.addEventListener('ToggleSwitch.removed', function() {
      console.log("Removed!", this);
    });

    btn.addEventListener('ToggleSwitch.replaced', function() {
      console.log("Replaced!", this);
    });
  });

  var toggleWatchers = {
    btn: document.querySelector('.add-toggle'),
    list: document.querySelector('.toggle-watchers'),
    num: 1,
    i: 0,
    newListItem: null,
    newItem: null
  };

  toggleWatchers.btn.addEventListener('click', function(e) {
    for(toggleWatchers.i = 0; toggleWatchers.i < toggleWatchers.num; toggleWatchers.i++) {
      toggleWatchers.newListItem = document.createElement('li');
      toggleWatchers.newItem = document.createElement('a');

      toggleWatchers.newItem.setAttribute('href', '#');
      toggleWatchers.newItem.setAttribute('data-toggle', '');
      toggleWatchers.newItem.innerHTML = 'Toggle';

      toggleWatchers.newListItem.appendChild(toggleWatchers.newItem);
      toggleWatchers.list.appendChild(toggleWatchers.newListItem);
    }

    toggleWatchers.num++;
  });

  var switchWatchers = {
    btn: document.querySelector('.add-switch'),
    list: document.querySelector('.switch-watchers'),
    num: 1,
    i: 0,
    newListItem: null,
    newItem: null
  };

  switchWatchers.btn.addEventListener('click', function(e) {
    for(switchWatchers.i = 0; switchWatchers.i < switchWatchers.num; switchWatchers.i++) {
      switchWatchers.newListItem = document.createElement('li');
      switchWatchers.newItem = document.createElement('a');

      switchWatchers.newItem.setAttribute('href', '#');
      switchWatchers.newItem.setAttribute('data-switch-on', '');
      switchWatchers.newItem.innerHTML = 'Switch';

      switchWatchers.newListItem.appendChild(switchWatchers.newItem);
      switchWatchers.list.appendChild(switchWatchers.newListItem);
    }

    switchWatchers.num++;
  });

});

// OnScroll
// https://foundation.zurb.com/building-blocks/blocks/scrollhide-nav.html
// Used for .site-header
var prev = 0;
var $window = $(window);
var nav = $('.onscroll');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('unfixed', scrollTop > prev);
  prev = scrollTop;
});