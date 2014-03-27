<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script type="text/javascript" src="js/ContactbookScript1.js"></script>
<script type="text/javascript" src="js/ContactbookScript2.js"></script>
</head>

<body>
<div id="word5" class="container  tab-pane" style="display:none;">
      
      <div class="row" >
        <div class="col-md-12" >
          <div class="list">
            <h1>CONTACT BOOK</h1>
            <p>&nbsp;</p>
            <div class="clear"></div>
          </div>
          <div class="list_search">
           
              <input class="list_search123" id="list_search123_cnt" type="text" placeholder="search box">
              <input class="list_search1234" id="list_search1234_cnt" type="button" onClick="search_cnt()" value="">
            
          </div>
          <div class="squaredFour">
            <input id="demo_box_1" class="css-checkbox" type="checkbox" checked="checked" onClick="chk_showContact();" />
            <label for="demo_box_1" name="demo_lbl_1" class="css-label">INDIVIDUALS</label>
          </div>
          <div class="squaredFour">
            <input id="demo_box_2" class="css-checkbox" type="checkbox" checked="checked" onClick="chk_showContact();" />
            <label for="demo_box_2" name="demo_lbl_1" class="css-label">GROUPS</label>
          </div>
          <div class="navbar navbar-static">
            <div class="navbar-inner">
              <ul role="navigation" class="nav">
                <li class="dropdown"> <a href="#" data-toggle="dropdown" class="dropdown-toggle">Add contact<b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li><a href="javascript:" onClick="manual_EntryIndividual();">Manual Entry Individual</a></li>
                    <li><a href="javascript:" onClick="manual_EntryGroup();">Manual Entry Group</a></li>
                    <li><a href="javascript:" onClick="upload_csv_file();">Upload from a csv file</a></li>
                   <!-- <li><a href="#">Import from Facebook</a></li>-->
                    <li><a href="javascript:" onClick="GoogleLogin();">Import from Google</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="clear"></div>
          <div id="show_individuals">
            <div class="date">
              <h2>Individuals</h1>
              <div class="clear"></div>
            </div>
			<div id="emptycontactlist" style="display:none;">Your contact list is empty.</div>
            <div id="div_individuals"> </div>
          </div>
          <div id="show_individuals_search" style="display:none;">
            <div class="date">
              <h2>Individuals Search Results</h2>
              <div class="clear"></div>
            </div>
            <div id="div_individuals_search" style="display:none;"> </div>
          </div>
          <div id="contacts_imported_from_google" style="display:none;">
            <div class="date">
              <h2>Contacts Imported from google</h2>
              <div class="clear"></div>
            </div>
            <div id="div_imported_contacts" style="display:none;"> </div>
          </div>
          <div id="show_groups">
            <div class="date">
              <h2>Groups</h2>
              <div class="clear"></div>
            </div>
			<div id="emptyGrouplist" style="display:none;">Your group list is empty.</div>
            <div id="div_groups"> </div>
          </div>
          <div id="show_groups_search" style="display:none;">
            <div class="date">
              <h2>Groups Search Results</h2>
              <div class="clear"></div>
            </div>
            <div id="div_groups_search" style="display:none;"> </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
</body>
</html>