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
            <tbody >
                <tr >
                    <td>2345</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr >
                    <td  id="Myguess">1234</td>
                    <td id="dead">1</td>
                    <td id="injured">1</td>
                </tr>
                <tr >
                    <td>3215</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr >
                    <td>2345</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr >
                    <td>2345</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
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