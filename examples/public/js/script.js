function ShowModal()
{
// document.getElementById("overlay").style.height = document.body.clientHeight + 'px';
            document.getElementById("overlay").className = "OverlayEffect";
            document.getElementById("modalMsg").className = "ShowModal";
}
function RemoveModal()
   {
            document.getElementById("modalMsg").className = "HideModal";        
            document.getElementById("overlay").className = "";
            return false;
        }
