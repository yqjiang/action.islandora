Class.create("Islandora", {
  initialize: function () {
    this.mgr = new ResourcesManager();
  },
  loadDatepicker: function() {
    if (typeof jQuery === 'undefined') {
      this.mgr.loadJSResource('plugins/action.sfudora/res/js/jquery.js', 'jquery_core');
    }
    if (!jQuery.hasOwnProperty("datepicker")) {
      this.mgr.loadJSResource('plugins/action.sfudora/res/lib/jquery-ui/ui/jquery.ui.core.js', 'jquery_ui_core');
      this.mgr.loadJSResource('plugins/action.sfudora/res/lib/jquery-ui/ui/jquery.ui.datepicker.js', 'jquery_ui_datepicker');
      this.mgr.loadCSSResource('plugins/action.sfudora/res/lib/jquery-ui/themes/base/jquery.ui.all.css');

      // Apply some default options, if none are provided.
      defaults = {
        dateFormat: jQuery.datepicker.W3C,
        changeMonth: true,
        changeYear: true,
        yearRange: "c-10:c+3"
      };
      jQuery.datepicker.setDefaults(defaults);
    }
  },
  addDatepicker: function (selector, options) {
    this.loadDatepicker();

    options = typeof options !== 'undefined' ? options : {};

    jQuery(selector).datepicker(options);
  }
});
