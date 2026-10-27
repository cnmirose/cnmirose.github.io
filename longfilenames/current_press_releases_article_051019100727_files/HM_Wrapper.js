// Global values:
var posID = "_pos";         // ID string for positioner element
var posIDup = "_pos_up";    // ID string for positioner element - pos will be bottom left corner of menu
	
// HMW_popUp; function to properly position the drop downs
// Arguments:
//  strId - the string id of the menu to pop up
//  e - an event object
// Return value: 
// 	none
function HMW_popUp(id, e){
	if (!HM_AreLoaded || !HM_AreCreated) return true;
	
	var offsetX = 0;
	var offsetY = 0;
	
	if(GS_Position_By_Image_Offset_X) {
		offsetX += GS_Position_By_Image_Offset_X;
	}
	
	if(GS_Position_By_Image_Offset_Y) {
		offsetY += GS_Position_By_Image_Offset_Y;
	}
	
	
	HM_f_PopUp(id,e);
	
	var positioner = GetElementById(id + posID);
		
	if(positioner)
	{
		if(HM_NS4)
		{
			offsetX += positioner.x - HM_CurrentMenu.clip.width;
			offsetY += positioner.y;
		}

		else if(HM_DOM)
		{
			offsetX += GS_getXPosition(positioner) - HM_CurrentMenu.offsetWidth;
			offsetY += GS_getYPosition(positioner);
		}
		else if(HM_IE4)
		{
			offsetX += GS_getXPosition(positioner) - HM_CurrentMenu.style.pixelWidth;
			offsetY += GS_getYPosition(positioner);
		}
		
		
		HM_CurrentMenu.tree.MenuLeft = offsetX;
		HM_CurrentMenu.tree.MenuTop = offsetY;

		HM_CurrentMenu.moveTo(offsetX, offsetY);

	}
	else
	{
		positioner = GetElementById(id + posIDup);
		
		if(positioner)
		{
			if(HM_NS4)
			{
				offsetX += positioner.x;
				offsetY += positioner.y - HM_CurrentMenu.clip.height + positioner.height + (2 * positioner.border);
			}
			else if(HM_DOM)
			{
				offsetX += GS_getXPosition(positioner);
				offsetY += GS_getYPosition(positioner) - HM_CurrentMenu.offsetHeight + positioner.offsetHeight;
			}
			else if(HM_IE4)
			{
				offsetX += GS_getXPosition(positioner);
				offsetY += GS_getYPosition(positioner) - HM_CurrentMenu.style.pixelHeight + positioner.offsetHeight;
			}
			
			HM_CurrentMenu.tree.MenuLeft = offsetX;
			HM_CurrentMenu.tree.MenuTop = offsetY;
			
			HM_CurrentMenu.moveTo(offsetX, offsetY);
		}
	}
	
	return true;
}

// Over write the page popUp function
window.popUp = HMW_popUp;


function GetElementById( strId )
{
	if(HM_NS4) 
		return getImageNav4( strId );
	else if(HM_DOM) 
		return document.getElementById(strId);
	else if(HM_IE4) 
		return document.all[ strId ];
	else 
		return null;
}

function getImageNav4( strId, parentLyr ) 
{
	var imgObj = null;
	var parentObj = (parentLyr ? parentLyr : document );
	imgObj = parentObj.images[ strId ];
	if(! imgObj )
	{
		for( var i =0; i < parentObj.layers.length && !imgObj; i++) 
			imgObj = getImageNav4( strId, parentObj.layers[i].document );
	}
	return imgObj;
}