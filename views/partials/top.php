<script>
    alert("enter your code")
</script>


<div class= "gameui" >
    <div class="gameplayswitch">
        
                <div id="mygame" clicked="true" class="mygame"> <h3>My game</h3> </div>
                <div id ="opps" clicked="false" class="opps"><h3>Opps</h3></div>
            </div>
            
    <div class="tableui">
        <table>
            <thead  >
                <th >My guess</th>
                <th >Dead </th>
                <th >Injured</th>
            </thead>
            <tbody id="tbody-container" >
               
            </tbody>
        </table>
        
    </div>
</div>


















































<script>
  const gameplayswitch_for_mygame =document.getElementById("mygame");
   const gameplayswitch_for_opps =document.getElementById("opps");
gameplayswitch_for_mygame.addEventListener('click', () => {
   

gameplayswitch_for_mygame.setAttribute('clicked',true)
gameplayswitch_for_opps.setAttribute('clicked',false)
})

gameplayswitch_for_opps.addEventListener('click', () => {
    
    gameplayswitch_for_mygame.setAttribute('clicked',false)
gameplayswitch_for_opps.setAttribute('clicked',true)
})

</script> 