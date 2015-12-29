#pragma strict

public var sceneName : String;

function OnTriggerEnter (col : Collider) {
    if(col.gameObject.tag =="Bomb"){
        Application.LoadLevel(sceneName);    
    }
}