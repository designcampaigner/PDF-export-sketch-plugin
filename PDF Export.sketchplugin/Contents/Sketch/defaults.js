
var defaultsKey = "com.davidwilliames.pdf-export"

var defaults = {
  exportToImages: false,
  excludeWithPrefix: true,
  exclusionPrefix: '-',
  imageExportScale: 2,
  includeSymbolArtboards: false
}

function fetchDefaults() {
  var newDefaults = NSUserDefaults.standardUserDefaults().dictionaryForKey(defaultsKey)
  if(newDefaults != null) {
    defaults = newDefaults
  }
}

function saveDefaults() {
  NSUserDefaults.standardUserDefaults().setObject_forKey(defaults, defaultsKey)
  NSUserDefaults.standardUserDefaults().synchronize()
}
