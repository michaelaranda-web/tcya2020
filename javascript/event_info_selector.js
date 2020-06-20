function EventInfoSelector() {
  this.selectedSection = "general";
  
  this.showSection = function (sectionName) {
    if (sectionName == this.selectedSection) {
      return;
    }
    
    if (sectionName === "general") {
      this.selectedSection = "general";
      
      $( "#schedule-button" ).parent().removeClass("selected");
      $( "#general-info-button" ).parent().addClass("selected");
      
      $( "#schedule-section" ).hide();
      $( "#general-info-section" ).show( 'drop', {}, 500 );
    } else {
      this.selectedSection = "schedule";
      
      $( "#general-info-button" ).parent().removeClass("selected");
      $( "#schedule-button" ).parent().addClass("selected");
      
      $( "#general-info-section" ).hide();
      $( "#schedule-section" ).show( 'drop', {}, 500 );
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