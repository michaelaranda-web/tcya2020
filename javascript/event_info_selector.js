function EventInfoSelector() {
  this.selectedSection = "general";
  this.updating = false;
  
  this.showSection = function (sectionName) {
    if (sectionName == this.selectedSection || this.updating) {
      return;
    }
    
    this.updating = true;
    
    if (sectionName === "general") {
      this.selectedSection = "general";
      
      $( "#schedule-button" ).removeClass("selected");
      $( "#general-info-button" ).addClass("selected");
      
      $( "#schedule-section" ).hide();
      $( "#general-info-section" ).show( 'drop', {}, 500, function() { this.updating = false; }.bind(this) );
    } else {
      this.selectedSection = "schedule";
      
      $( "#general-info-button" ).removeClass("selected");
      $( "#schedule-button" ).addClass("selected");
      
      $( "#general-info-section" ).hide();
      $( "#schedule-section" ).show( 'drop', {}, 500, function() { this.updating = false; }.bind(this) );
    }
  }
}

var eventInfoSelector = new EventInfoSelector();

// listeners
$( "#general-info-button" ).on( "click", function() {
  eventInfoSelector.showSection("general");
});

$( "#schedule-button" ).on( "click", function() {
  eventInfoSelector.showSection("schedule");
});

// sections hidden by default
$( "#schedule-section" ).hide();