class homePages {
    /******************************************
       *  Case Register locators  *
       * ****************************************/


    emailinputbox = "//input[@id='signinSrEmail']"
    passwordinputbox="//input[@id='signupSrPassword']"
    loginbutton="//button[@id='signInBtn']"
    adminhomelogo= "//img[@class='navbar-brand-logo initial--36 onerror-image onerror-image']"



   Settingsbutton = "//a[@id='tourb-3']//span[contains(text(),'Settings')]"
   navbar = "//*[@id='navbar-vertical-content']"
   Modulesetupdropdown = '(//*[@id="tourb-3"])[2]'
   systemmodulesoptions = "//span[normalize-space()='System Module Setup']"
   Addnewmodule= "//span[normalize-space()='Add Business Module']"
   modulenameinputbox = '//*[@id="default-form"]/div[1]/input'
   moduledescriptioninputbox = "//iframe[contains(@class,'cke_wysiwyg_frame')]"
   moduleradiobutton = "//div[@class='module-radio-group']//input[@name='module_type']"
   moduleiconupload = '//*[@id="customFileEg1"]'
   Modulethambnailupload = '//*[@id="customFileEg2"]'
   addmodulebutton = "//button[@type='submit']"
   // update module
   modules= "//a[@title='Modules']"
   editmodulebutton = '//*[@id="table-div"]/tr[1]/td[7]/div/a'


}
export default homePages;