(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['post'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"post\" data-distance=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"distance") || (depth0 != null ? lookupProperty(depth0,"distance") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"distance","hash":{},"data":data,"loc":{"start":{"line":2,"column":33},"end":{"line":2,"column":45}}}) : helper)))
    + "\" data-type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":2,"column":58},"end":{"line":2,"column":66}}}) : helper)))
    + "\" data-details=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"details") || (depth0 != null ? lookupProperty(depth0,"details") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"details","hash":{},"data":data,"loc":{"start":{"line":2,"column":82},"end":{"line":2,"column":93}}}) : helper)))
    + "\">\n    <div class=\"post-contents\">\n      \n      <div class=\"post-info-container\">\n\n        <div class=\"post-title\">\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":10},"end":{"line":8,"column":19}}}) : helper)))
    + "\n          <hr class=\"dashed\">\n        </div>\n        \n        <div class=\"post-distance\">\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"distance") || (depth0 != null ? lookupProperty(depth0,"distance") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"distance","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":22}}}) : helper)))
    + "\n        </div>\n        <div class=\"post-type\">\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":16,"column":10},"end":{"line":16,"column":18}}}) : helper)))
    + "\n        </div>\n        <div class=\"post-details\">\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"details") || (depth0 != null ? lookupProperty(depth0,"details") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"details","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":21}}}) : helper)))
    + "\n        </div>\n      </div>\n    </div>\n\n      \n</div>\n\n\n";
},"useData":true});
})();