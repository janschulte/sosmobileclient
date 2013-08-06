var SettingsView = Backbone.View.extend({

  events: {
    'click .refresh-stations': 'refreshStations'
  },

  initialize: function(){
    console.log("init settings view");
    //model to observe: current_data

  },

  render: function() {
    var template = Handlebars.helpers.getTemplate('settings');
    var listHtml = template();

    var settingsModalsTemplate = Handlebars.helpers.getTemplate('settingsModals');
    var settingsModalsHtml = settingsModalsTemplate();
    
    this.$el.empty().html(listHtml);
    $("#global-modals").append(settingsModalsHtml);
  },

  refreshStations: function() {
    alert("bingo bongo");
    $('.refresh-stations-icon').addClass('icon-spin');

  }
});