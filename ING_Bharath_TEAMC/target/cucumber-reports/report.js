$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/FirstCry.feature");
formatter.feature({
  "name": "Capture list of centres in respective location",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "validate the navigation to All Categories link",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Luncht the browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.ui.stepdefinations.ValidateNavigateAllCategories.luncht_the_browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to All Categories Link",
  "keyword": "When "
});
formatter.match({
  "location": "com.ui.stepdefinations.ValidateNavigateAllCategories.navigate_to_All_Categories_Link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchFrameException: No frame element found by name or id webpush-onsite\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LP-DG8BZY2\u0027, ip: \u002710.117.189.123\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:885)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringTargetLocator.frame(EventFiringWebDriver.java:702)\r\n\tat com.ui.firstcry.pages.FCHomePage.getAllCategories(FCHomePage.java:46)\r\n\tat com.ui.stepdefinations.ValidateNavigateAllCategories.navigate_to_All_Categories_Link(ValidateNavigateAllCategories.java:32)\r\n\tat ✽.Navigate to All Categories Link(file:///C:/Users/bharathraj_s/Desktop/Hackthon/ING_Bharath_TEAMC/./Features/FirstCry.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Hover on Stores and playschools",
  "keyword": "And "
});
formatter.match({
  "location": "com.ui.stepdefinations.ValidateNavigateAllCategories.hoverOnStoresAndPlayschools()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Hover to Playschools tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.ui.stepdefinations.ValidateNavigateAllCategories.hoverToPlayschoolsTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on location pin Bengaluru",
  "keyword": "And "
});
formatter.match({
  "location": "com.ui.stepdefinations.ValidateNavigateAllCategories.clickOnLocationPinBengaluru()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click the city Bengaluru",
  "keyword": "And "
});
formatter.match({
  "location": "com.ui.stepdefinations.ValidateNavigateAllCategories.clickTheCityBengaluru()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on the centers and select Bangalore",
  "keyword": "And "
});
formatter.match({
  "location": "com.ui.stepdefinations.ValidateNavigateAllCategories.clickOnTheCentersAndSelectBangalore()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate the Navigation from All Categories link",
  "keyword": "Then "
});
formatter.match({
  "location": "com.ui.stepdefinations.ValidateNavigateAllCategories.validate_the_Navigation_from_All_Categories_link()"
});
formatter.result({
  "status": "skipped"
});
});