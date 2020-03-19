package com.ui.stepdefinations;

import com.app.base.UITestBase;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ValidateNavigateAllCategories extends UITestBase{

	public ValidateNavigateAllCategories() {
		super();
	}
	
	
	@Given("Luncht the browser and hit the url")
	public void luncht_the_browser_and_hit_the_url() {
		initialization();
		
	}

	@When("Navigate to All Categories Link")
	public void navigate_to_All_Categories_Link() {

	}

	@Then("Validate the Navigation from All Categories link")
	public void validate_the_Navigation_from_All_Categories_link() {

	}

}
